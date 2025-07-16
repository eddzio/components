import React from "react";
import { motion, useAnimation } from "framer-motion";

const userImage = "/user.png"; // Path relative to /public

const spring = {
    type: "spring",
    stiffness: 200,
    damping: 15,
};

const RotatingPNG: React.FC<{ delay?: number; direction?: "left" | "right"; style?: React.CSSProperties }> = ({
    delay = 0,
    direction = "right",
    style = {},
}) => {
    const controls = useAnimation();

    React.useEffect(() => {
        let toggled = false;
        const animate = () => {
            controls.start({
                rotate: toggled
                    ? 0
                    : direction === "right"
                    ? 12
                    : -12,
                y: toggled ? 0 : -20,
                marginLeft: toggled ? -24 : 0,
                marginRight: toggled ? -24 : 0,
                transition: { ...spring, delay },
            });
            toggled = !toggled;
        };
        animate();
        const interval = setInterval(animate, 1000);
        return () => clearInterval(interval);
    }, [controls, delay, direction]);

    return (
        <motion.img
            src={userImage}
            alt="Animated PNG"
            style={{ height: 128, margin: 16, ...style }}
            animate={controls}
        />
    );
};

const PNGAnimation: React.FC = () => (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <RotatingPNG direction="left" style={{ marginRight: -24, opacity: 0.8 }} />
        <RotatingPNG direction="right" style={{ marginLeft: -24, opacity: 0.7 }} />
    </div>
);

export default PNGAnimation;