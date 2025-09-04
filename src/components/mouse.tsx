import React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function PointerFollower() {
  // 마우스 좌표 저장용
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 스프링 애니메이션으로 자연스럽게 이동
  const springX = useSpring(mouseX, { stiffness: 200, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 20 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 20,
        height: 20,
        borderRadius: "50%",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        pointerEvents: "none", // 클릭 방지
        x: springX,
        y: springY,
        zIndex: 9999,
      }}
    />
  );
}
