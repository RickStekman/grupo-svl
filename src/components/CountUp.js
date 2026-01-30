"use client";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, animated } from "framer-motion";

export default function CountUp({ to, duration = 2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useSpring(count, { stiffness: 30, damping: 15 });

  useEffect(() => {
    if (isInView) {
      count.set(to);
    }
  }, [isInView, to, count]);

  return (
    <span ref={ref}>
      <animated.span>
        {/* Usamos un pequeño truco para animar el texto del número */}
        {rounded}
      </animated.span>
    </span>
  );
}