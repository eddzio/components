"use client"

import React, { useState, useEffect, useRef } from "react";
import { Globe } from "lucide-react";

type Mode = "scramble" | "both" | "blur";
const modes: { value: Mode; label: string }[] = [
  { value: "scramble", label: "Scramble" },
  { value: "both",     label: "Both"     },
  { value: "blur",     label: "Blur"     },
];

const languages = ["en", "es", "fr", "it", "da"] as const;
type Language = typeof languages[number];

const content: Record<Language, { name: string; handle: string; body: string; time: string; flag: string }> = {
  en: {
    name: "Ed Orozco",
    handle: "@alexmorgan",
    body: "Just got back from the most incredible hike. The views from the top were absolutely breathtaking — I could see for miles in every direction. Highly recommend doing this before the summer crowds arrive.",
    time: "2h ago",
    flag: "🇬🇧",
  },
  es: {
    name: "Ed Orozco",
    handle: "@alexmorgan",
    body: "Acabo de volver de la caminata más increíble. Las vistas desde la cima eran absolutamente impresionantes — podía ver kilómetros en todas las direcciones. Muy recomendable hacer esto antes de que lleguen las multitudes de verano.",
    time: "hace 2h",
    flag: "🇪🇸",
  },
  fr: {
    name: "Ed Orozco",
    handle: "@alexmorgan",
    body: "Je reviens tout juste de la randonnée la plus incroyable. Les vues depuis le sommet étaient absolument à couper le souffle — je pouvais voir à des kilomètres à la ronde. Je recommande vivement de le faire avant l'arrivée des foules estivales.",
    time: "il y a 2h",
    flag: "🇫🇷",
  },
  it: {
    name: "Ed Orozco",
    handle: "@alexmorgan",
    body: "Sono appena tornato dalla escursione più incredibile. Le viste dalla cima erano assolutamente mozzafiato — riuscivo a vedere per chilometri in ogni direzione. Consiglio vivamente di farlo prima che arrivino le folle estive.",
    time: "2h fa",
    flag: "🇮🇹",
  },
  da: {
    name: "Ed Orozco",
    handle: "@alexmorgan",
    body: "Jeg er lige kommet hjem fra den mest utrolige vandretur. Udsigten fra toppen var absolut betagende — jeg kunne se i kilometers afstand i alle retninger. Jeg anbefaler stærkt at gøre det, inden sommerens folkemasser ankommer.",
    time: "for 2t siden",
    flag: "🇩🇰",
  },
};

const CHARS = "abcdefghijklmnopqrstuvwxyz";
const TICK_MS = 30;
const BLUR_DURATION = 800; // ms total for blur-only animation

const scramble = (target: string, resolved: number): string =>
  target
    .split("")
    .map((char, i) => {
      if (char === " ") return " ";
      if (i < resolved) return char;
      return CHARS[Math.floor(Math.random() * CHARS.length)];
    })
    .join("");

const SliderControl = ({
  label, value, min, max, unit, onChange,
}: {
  label: string; value: number; min: number; max: number; unit: string;
  onChange: (v: number) => void;
}) => (
  <div className="flex items-center gap-3">
    <span className="text-xs label-tertiary w-28 shrink-0">{label}</span>
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="flex-1 h-1 cursor-pointer"
      style={{ accentColor: "var(--accent)" }}
    />
    <span className="text-xs label-tertiary w-10 text-right tabular-nums shrink-0">
      {value}{unit}
    </span>
  </div>
);

export const Translation = () => {
  const [langIndex, setLangIndex] = useState(0);
  const currentLang = languages[langIndex];
  const { name, handle, body, time, flag } = content[currentLang];

  const [displayed, setDisplayed] = useState(body);
  const [expanded, setExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isScrambling, setIsScrambling] = useState(false);
  const [mode, setMode] = useState<Mode>("both");

  // Animation params — state drives the UI, refs drive the effect closure
  const [charsPerTick, setCharsPerTick] = useState(5);
  const [blurAmount, setBlurAmount]     = useState(8);
  const [blurFadeAt, setBlurFadeAt]     = useState(70); // % of animation at full blur

  const modeRef         = useRef<Mode>("both");
  const charsPerTickRef = useRef(5);
  const blurAmountRef   = useRef(8);
  const blurFadeAtRef   = useRef(70);

  const blurRef  = useRef<SVGFEGaussianBlurElement>(null);
  const rafRef   = useRef<number | undefined>(undefined);
  const isMounted = useRef(false);

  useEffect(() => { modeRef.current = mode; }, [mode]);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }

    setExpanded(false);
    setIsLoading(true);

    let interval: ReturnType<typeof setInterval> | undefined;

    const delay = setTimeout(() => {
      setIsLoading(false);
      setIsScrambling(true);

      const currentMode  = modeRef.current;
      const chars        = charsPerTickRef.current;
      const blur         = blurAmountRef.current;
      const fadeAt       = blurFadeAtRef.current / 100; // 0–1

      if (currentMode === "blur") {
        setDisplayed(body);
        blurRef.current?.setAttribute("stdDeviation", `${blur} ${blur}`);

        const start    = performance.now();
        const holdTime = fadeAt * BLUR_DURATION;
        const fadeTime = BLUR_DURATION - holdTime;

        const animate = (now: number) => {
          const elapsed = now - start;
          let blurVal: number;
          if (elapsed < holdTime) {
            blurVal = blur;
          } else {
            const t = Math.min((elapsed - holdTime) / (fadeTime || 1), 1);
            blurVal = blur * (1 - t);
          }
          blurRef.current?.setAttribute("stdDeviation", `${blurVal.toFixed(2)} ${blurVal.toFixed(2)}`);
          if (elapsed < BLUR_DURATION) {
            rafRef.current = requestAnimationFrame(animate);
          } else {
            blurRef.current?.setAttribute("stdDeviation", "0 0");
            setIsScrambling(false);
          }
        };
        rafRef.current = requestAnimationFrame(animate);
        return;
      }

      // scramble or both
      if (currentMode === "both") {
        blurRef.current?.setAttribute("stdDeviation", `${blur} ${blur}`);
      }

      let resolved = 0;
      setDisplayed(scramble(body, 0));

      interval = setInterval(() => {
        resolved += chars;
        if (resolved >= body.length) {
          setDisplayed(body);
          setIsScrambling(false);
          blurRef.current?.setAttribute("stdDeviation", "0 0");
          clearInterval(interval);
          return;
        }
        if (currentMode === "both") {
          const progress = resolved / body.length;
          let blurVal: number;
          if (progress < fadeAt) {
            blurVal = blur;
          } else {
            const t = (progress - fadeAt) / (1 - fadeAt);
            blurVal = blur * (1 - t);
          }
          blurRef.current?.setAttribute("stdDeviation", `${blurVal.toFixed(2)} ${blurVal.toFixed(2)}`);
        }
        setDisplayed(scramble(body, resolved));
      }, TICK_MS);
    }, 2000);

    return () => {
      clearTimeout(delay);
      if (interval) clearInterval(interval);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      blurRef.current?.setAttribute("stdDeviation", "0 0");
      setIsLoading(false);
      setIsScrambling(false);
    };
  }, [body]);

  const cycleLanguage = () => setLangIndex((i) => (i + 1) % languages.length);

  return (
    <div className="flex flex-col gap-6 w-full max-w-sm">

      {/* Card */}
      <div className="bg-card border border-color rounded-xl p-4 w-full flex flex-col gap-3">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-stone-300 dark:bg-stone-600 flex items-center justify-center text-sm font-semibold text-stone-600 dark:text-stone-300 shrink-0">
              AM
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold label-primary leading-tight">{name}</span>
              <span className="text-xs label-tertiary">{handle}</span>
            </div>
          </div>
          <span className="text-xs label-tertiary">{time}</span>
        </div>

        {/* Body */}
        <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
          <defs>
            <filter id="motion-blur">
              <feGaussianBlur ref={blurRef} stdDeviation="0 0" />
            </filter>
          </defs>
        </svg>
        <div className="flex flex-col gap-1">
          <p
            className={`label-secondary text-sm leading-snug ${expanded ? "" : "line-clamp-3"} ${isLoading ? "animate-heartbeat" : ""}`}
            style={(isScrambling && mode !== "scramble") ? { filter: "url(#motion-blur)" } : undefined}
          >
            {displayed}
          </p>
          <button
            onClick={() => setExpanded((e) => !e)}
            className="text-xs label-tertiary hover:label-secondary transition-colors duration-150 text-left"
          >
            {expanded ? "Read less" : "Read more"}
          </button>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-1">
          {/* Effect selector */}
          <div className="flex rounded-md border border-color overflow-hidden">
            {modes.map((m) => (
              <button
                key={m.value}
                onClick={() => setMode(m.value)}
                className={`px-2.5 py-1 text-xs font-medium transition-colors duration-150
                  ${mode === m.value
                    ? "bg-stone-200 dark:bg-stone-700 label-primary"
                    : "label-tertiary hover:label-secondary"
                  }`}
              >
                {m.label}
              </button>
            ))}
          </div>

          {/* Language toggle */}
          <button
            onClick={cycleLanguage}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-md
            border border-color label-tertiary
            hover:label-secondary hover:border-stone-400 dark:hover:border-stone-500
            transition-colors duration-150 text-xs font-medium"
          >
            <Globe size={13} />
            <span>{flag} {currentLang.toUpperCase()}</span>
          </button>
        </div>

      </div>

      {/* Controls */}
      <div className="flex flex-col gap-3">
        <SliderControl
          label="Scramble speed"
          value={charsPerTick}
          min={1} max={20} unit=" chars/tick"
          onChange={(v) => { setCharsPerTick(v); charsPerTickRef.current = v; }}
        />
        <SliderControl
          label="Blur amount"
          value={blurAmount}
          min={1} max={20} unit="px"
          onChange={(v) => { setBlurAmount(v); blurAmountRef.current = v; }}
        />
        <SliderControl
          label="Blur fade at"
          value={blurFadeAt}
          min={0} max={100} unit="%"
          onChange={(v) => { setBlurFadeAt(v); blurFadeAtRef.current = v; }}
        />
      </div>

    </div>
  );
};
