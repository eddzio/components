"use client"

import React, { useState, useEffect, useRef } from "react";
import { Heart, MessageCircle, Share2, Globe } from "lucide-react";

const languages = ["en", "es", "fr", "it", "da"] as const;
type Language = typeof languages[number];

const content: Record<Language, { name: string; handle: string; body: string; time: string; flag: string }> = {
  en: {
    name: "Alex Morgan",
    handle: "@alexmorgan",
    body: "Just got back from the most incredible hike. The views from the top were absolutely breathtaking — I could see for miles in every direction. Highly recommend doing this before the summer crowds arrive.",
    time: "2h ago",
    flag: "🇬🇧",
  },
  es: {
    name: "Alex Morgan",
    handle: "@alexmorgan",
    body: "Acabo de volver de la caminata más increíble. Las vistas desde la cima eran absolutamente impresionantes — podía ver kilómetros en todas las direcciones. Muy recomendable hacer esto antes de que lleguen las multitudes de verano.",
    time: "hace 2h",
    flag: "🇪🇸",
  },
  fr: {
    name: "Alex Morgan",
    handle: "@alexmorgan",
    body: "Je reviens tout juste de la randonnée la plus incroyable. Les vues depuis le sommet étaient absolument à couper le souffle — je pouvais voir à des kilomètres à la ronde. Je recommande vivement de le faire avant l'arrivée des foules estivales.",
    time: "il y a 2h",
    flag: "🇫🇷",
  },
  it: {
    name: "Alex Morgan",
    handle: "@alexmorgan",
    body: "Sono appena tornato dalla escursione più incredibile. Le viste dalla cima erano assolutamente mozzafiato — riuscivo a vedere per chilometri in ogni direzione. Consiglio vivamente di farlo prima che arrivino le folle estive.",
    time: "2h fa",
    flag: "🇮🇹",
  },
  da: {
    name: "Alex Morgan",
    handle: "@alexmorgan",
    body: "Jeg er lige kommet hjem fra den mest utrolige vandretur. Udsigten fra toppen var absolut betagende — jeg kunne se i kilometers afstand i alle retninger. Jeg anbefaler stærkt at gøre det, inden sommerens folkemasser ankommer.",
    time: "for 2t siden",
    flag: "🇩🇰",
  },
};

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const TICK_MS = 30; /* Time in milliseconds between each tick. Default = 30 */
const CHARS_PER_TICK = 5; /* Number of characters to resolve per tick. Default = 5 */

const scramble = (target: string, resolved: number): string =>
  target
    .split("")
    .map((char, i) => {
      if (char === " ") return " ";
      if (i < resolved) return char;
      return CHARS[Math.floor(Math.random() * CHARS.length)];
    })
    .join("");

export const Translation = () => {
  const [langIndex, setLangIndex] = useState(0);

  const currentLang = languages[langIndex];
  const { name, handle, body, time, flag } = content[currentLang];

  const [displayed, setDisplayed] = useState(body);
  const [expanded, setExpanded] = useState(false);
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }

    setExpanded(false);

    let resolved = 0;
    setDisplayed(scramble(body, 0));

    const interval = setInterval(() => {
      resolved += CHARS_PER_TICK;
      if (resolved >= body.length) {
        setDisplayed(body);
        clearInterval(interval);
        return;
      }
      setDisplayed(scramble(body, resolved));
    }, TICK_MS);

    return () => clearInterval(interval);
  }, [body]);

  const cycleLanguage = () => {
    setLangIndex((i) => (i + 1) % languages.length);
  };

  return (
    <div className="bg-card border border-color rounded-xl p-4 w-full max-w-sm flex flex-col gap-3">

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
      <div className="flex flex-col gap-1">
        <p className={`label-secondary text-sm leading-snug ${expanded ? "" : "line-clamp-3"}`}>
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
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1 label-tertiary hover:text-red-400 transition-colors duration-150">
            <Heart size={15} />
            <span className="text-xs">142</span>
          </button>
          <button className="flex items-center gap-1 label-tertiary hover:label-secondary transition-colors duration-150">
            <MessageCircle size={15} />
            <span className="text-xs">38</span>
          </button>
          <button className="flex items-center gap-1 label-tertiary hover:label-secondary transition-colors duration-150">
            <Share2 size={15} />
          </button>
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
  );
};
