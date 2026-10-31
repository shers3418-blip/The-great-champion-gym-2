import React, { useEffect, useRef } from "react";

export const AmbientCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Small floating particles and subtle network connections
    const particleCount = Math.min(width < 768 ? 32 : 54, 65);
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
      pulseSpeed: number;
      isGold: boolean;
    }

    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.28,
        vy: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.28 - 0.04,
        radius: Math.random() * 1.5 + 0.6,
        alpha: Math.random() * 0.4 + 0.15,
        pulseSpeed: 0.008 + Math.random() * 0.012,
        isGold: Math.random() < 0.35, // 35% golden highlights (#E8CC70)
      });
    }

    let time = 0;

    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      // Deep pure black background with extremely subtle radial glow
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, width, height);

      // Soft ambient golden center-top vignette
      const centerGrad = ctx.createRadialGradient(
        width / 2,
        height * 0.4,
        20,
        width / 2,
        height * 0.45,
        Math.max(width, height) * 0.65
      );
      centerGrad.addColorStop(0, "rgba(232, 204, 112, 0.035)");
      centerGrad.addColorStop(0.5, "rgba(18, 18, 18, 0.01)");
      centerGrad.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = centerGrad;
      ctx.fillRect(0, 0, width, height);

      // Draw subtle particles and network connections
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < -10) p1.x = width + 10;
        if (p1.x > width + 10) p1.x = -10;
        if (p1.y < -10) p1.y = height + 10;
        if (p1.y > height + 10) p1.y = -10;

        p1.alpha += Math.sin(time * 2 + i) * p1.pulseSpeed;
        const currentAlpha = Math.max(0.08, Math.min(0.45, p1.alpha));

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = p1.isGold
          ? `rgba(232, 204, 112, ${currentAlpha})`
          : `rgba(255, 255, 255, ${currentAlpha * 0.75})`;
        ctx.fill();

        // Connect near neighbors with delicate lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < 10000) {
            const lineAlpha = (1 - distSq / 10000) * 0.07 * currentAlpha;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p1.isGold || p2.isGold
              ? `rgba(232, 204, 112, ${lineAlpha})`
              : `rgba(255, 255, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 w-full h-full"
      style={{ opacity: 0.9 }}
    />
  );
};
