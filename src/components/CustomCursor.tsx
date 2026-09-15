"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const INTERACTIVE_SELECTOR = "a, button, [role='button']";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 350, damping: 50 });
  const springY = useSpring(y, { stiffness: 350, damping: 50 });

  const velocity = useMotionValue(0);
  const angle = useMotionValue(0);
  const lastPos = useRef({ x: 0, y: 0, t: 0 });

  const stretch = useTransform(velocity, [0, 40], [1, 3.2], {
    clamp: true,
  });
  const scaleSpring = useSpring(stretch, { stiffness: 300, damping: 25 });

  useEffect(() => {
    const canHover = window.matchMedia("(pointer: fine)").matches;
    setEnabled(canHover);
    if (!canHover) return;

    const handleMove = (e: MouseEvent) => {
      const now = performance.now();
      const dt = Math.max(now - lastPos.current.t, 1);
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy) / dt;

      if (dx * dx + dy * dy > 4) {
        angle.set((Math.atan2(dy, dx) * 180) / Math.PI);
      }
      velocity.set(Math.min(speed * 12, 40));

      lastPos.current = { x: e.clientX, y: e.clientY, t: now };
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);

      const target = e.target as Element;
      setHovering(!!target.closest(INTERACTIVE_SELECTOR));
    };
    const handleLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMove);
    document.documentElement.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
    };
  }, [x, y, velocity, angle]);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[999] mix-blend-difference"
      style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.15 }}
    >
      <motion.div
        style={{ rotate: angle }}
        animate={{
          width: hovering ? 14 : 10,
          height: hovering ? 14 : 10,
        }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center justify-center"
      >
        <motion.div
          style={{ scaleX: hovering ? 1 : scaleSpring }}
          className="h-full w-full origin-center rounded-full bg-ink"
        />
      </motion.div>
    </motion.div>
  );
}
