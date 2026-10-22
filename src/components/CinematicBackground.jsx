"use client";

import { useEffect, useRef } from "react";

// ============================================================================
// 3D HELICAL ENERGY SPIRAL & AMBIENT SPACE ENGINE
// ============================================================================

// Helical Spark Particle orbiting and traveling along the 3D energy helix
class HelicalSpark {
  constructor(index, total) {
    this.index = index;
    this.baseT = index / total; // Base parametric coordinate along the helix [0, 1]
    this.strand = index % 2 === 0 ? 0 : 1; // 0 = Strand A, 1 = Strand B (Counter-helix)
    this.speed = (Math.random() * 0.0004 + 0.0002) * (Math.random() > 0.5 ? 1 : -1);
    this.size = Math.random() * 1.8 + 1.2;
    this.sparklePhase = Math.random() * Math.PI * 2;
    this.sparkleSpeed = Math.random() * 0.04 + 0.02;
    this.colorType = Math.random() > 0.3 ? "orange" : Math.random() > 0.5 ? "amber" : "white";
    this.trailLength = Math.floor(Math.random() * 3) + 3;
    this.history = [];
  }

  update(currentScroll, velocity) {
    this.sparklePhase += this.sparkleSpeed;
    // Scroll progress directly drives advancement along the spiral
    this.currentT = (this.baseT + currentScroll * 1.6 + this.speed * 100) % 1;
    if (this.currentT < 0) this.currentT += 1;
  }

  draw(context, helix, width, height, isMobile) {
    const point = helix.getPointAt(this.currentT, this.strand);
    if (!point || point.screenY < -50 || point.screenY > height + 50) return;

    // Track historical screen positions for glowing motion trail
    this.history.unshift({ x: point.screenX, y: point.screenY, z: point.zNorm });
    if (this.history.length > this.trailLength) {
      this.history.pop();
    }

    const zFactor = point.zNorm; // 0 (far) to 1 (near)
    const sparkle = 0.7 + Math.sin(this.sparklePhase) * 0.3;
    const radius = this.size * (0.6 + zFactor * 0.8) * sparkle;

    // Draw fading energy trail
    if (this.history.length > 1 && !isMobile) {
      context.beginPath();
      context.moveTo(this.history[0].x, this.history[0].y);
      for (let i = 1; i < this.history.length; i++) {
        context.lineTo(this.history[i].x, this.history[i].y);
      }
      context.strokeStyle = `rgba(255, 126, 40, ${0.25 * zFactor * sparkle})`;
      context.lineWidth = Math.max(0.75, radius * 0.6);
      context.stroke();
    }

    // Draw glowing spark head
    context.beginPath();
    context.arc(point.screenX, point.screenY, radius, 0, Math.PI * 2);

    if (this.colorType === "white") {
      context.fillStyle = `rgba(255, 245, 230, ${0.85 * zFactor * sparkle})`;
    } else if (this.colorType === "amber") {
      context.fillStyle = `rgba(255, 190, 60, ${0.8 * zFactor * sparkle})`;
    } else {
      context.fillStyle = `rgba(255, 110, 30, ${0.9 * zFactor * sparkle})`;
    }
    context.fill();

    // Subtle soft glow halo for foreground sparks
    if (zFactor > 0.65 && !isMobile) {
      context.beginPath();
      context.arc(point.screenX, point.screenY, radius * 3.0, 0, Math.PI * 2);
      context.fillStyle = `rgba(255, 94, 30, ${0.18 * zFactor * sparkle})`;
      context.fill();
    }
  }
}

// 3D Parametric Energy Helix Engine
class EnergyHelix {
  constructor() {
    this.cachedPointsStrandA = [];
    this.cachedPointsStrandB = [];
    this.segments = 140; // Number of curve subdivisions
  }

  // Calculate the central spine X position as it weaves gracefully across the screen
  getSpineCenter(u, scrollProgress, width) {
    // u: 0 (top of viewport buffer) to 1 (bottom of viewport buffer)
    // Synchronize X-position with sections:
    // Hero (0.0 - 0.20): Anchored to right (~74% width) framing hero profile
    // About (0.20 - 0.40): Gently sweeps to ~68% width
    // Skills (0.40 - 0.65): Transitions towards ~34% width behind matrix
    // Projects (0.65 - 0.85): Sweeps to ~78% width flanking project showcases
    // Contact (0.85 - 1.00): Converges toward center (~50% width)

    let baseTargetX = 0.74;

    if (scrollProgress < 0.2) {
      baseTargetX = 0.74;
    } else if (scrollProgress < 0.45) {
      const t = (scrollProgress - 0.2) / 0.25;
      baseTargetX = 0.74 - t * 0.08;
    } else if (scrollProgress < 0.65) {
      const t = (scrollProgress - 0.45) / 0.2;
      baseTargetX = 0.66 - t * 0.32; // Moves toward left-center during Skills
    } else if (scrollProgress < 0.85) {
      const t = (scrollProgress - 0.65) / 0.2;
      baseTargetX = 0.34 + t * 0.44; // Sweeps back to right during Projects
    } else {
      const t = (scrollProgress - 0.85) / 0.15;
      baseTargetX = 0.78 - t * 0.28; // Converges to center (~50%) during Contact
    }

    // Subtle sinusoidal wave weaving through the vertical extent
    const waveOffset = Math.sin(u * Math.PI * 3 + scrollProgress * Math.PI * 2) * (width * 0.04);
    return width * baseTargetX + waveOffset;
  }

  // Precompute 3D coordinates and 2D projections for the current frame
  computePoints(width, height, scrollProgress, time, isMobile) {
    this.cachedPointsStrandA = [];
    this.cachedPointsStrandB = [];

    const fov = 420;
    const baseRadius = isMobile ? width * 0.15 : Math.min(width * 0.11, 130);
    // Vertical travel: As user scrolls down, spiral descends continuously
    const scrollDescent = scrollProgress * height * 1.5;
    // Rotation around spine directly tied to scroll progress
    const scrollTwist = scrollProgress * Math.PI * 8.0;
    const ambientTwist = time * 0.00035;
    const totalRotation = scrollTwist + ambientTwist;

    const yStart = -height * 0.35;
    const yEnd = height * 1.35;
    const yRange = yEnd - yStart;

    for (let i = 0; i <= this.segments; i++) {
      const u = i / this.segments;
      const yWorld = yStart + u * yRange;
      const spineX = this.getSpineCenter(u, scrollProgress, width);

      // Helix frequency and angle
      const turns = 3.8;
      const angleA = u * Math.PI * 2 * turns + totalRotation;
      const angleB = angleA + Math.PI; // Counter-helix strand

      // Dynamic radius breathing along the height
      const radius = baseRadius * (0.85 + Math.sin(u * Math.PI * 2 + scrollProgress * 3) * 0.18);

      // --- STRAND A ---
      const xWorldA = spineX + radius * Math.cos(angleA);
      const zWorldA = radius * Math.sin(angleA);
      const scaleA = fov / (fov + zWorldA);
      const screenXA = spineX + (xWorldA - spineX) * scaleA;
      const screenYA = yWorld;
      const zNormA = (zWorldA + radius) / (2 * radius); // 0 = far, 1 = near

      this.cachedPointsStrandA.push({
        screenX: screenXA,
        screenY: screenYA,
        zNorm: zNormA,
        zWorld: zWorldA,
        u,
      });

      // --- STRAND B (Counter-Helix) ---
      const xWorldB = spineX + radius * Math.cos(angleB);
      const zWorldB = radius * Math.sin(angleB);
      const scaleB = fov / (fov + zWorldB);
      const screenXB = spineX + (xWorldB - spineX) * scaleB;
      const screenYB = yWorld;
      const zNormB = (zWorldB + radius) / (2 * radius);

      this.cachedPointsStrandB.push({
        screenX: screenXB,
        screenY: screenYB,
        zNorm: zNormB,
        zWorld: zWorldB,
        u,
      });
    }
  }

  // Get exact projected point on the helix at parametric position t
  getPointAt(t, strandIndex) {
    const points = strandIndex === 0 ? this.cachedPointsStrandA : this.cachedPointsStrandB;
    if (!points || points.length === 0) return null;

    const indexExact = t * (points.length - 1);
    const idx0 = Math.floor(indexExact);
    const idx1 = Math.min(idx0 + 1, points.length - 1);
    const frac = indexExact - idx0;

    const p0 = points[idx0];
    const p1 = points[idx1];

    return {
      screenX: p0.screenX + (p1.screenX - p0.screenX) * frac,
      screenY: p0.screenY + (p1.screenY - p0.screenY) * frac,
      zNorm: p0.zNorm + (p1.zNorm - p0.zNorm) * frac,
    };
  }

  // Render the glowing 3D helical ribbon and connecting cybernetic rungs
  draw(context, width, height, scrollProgress, isMobile) {
    if (this.cachedPointsStrandA.length < 2) return;

    // 1. Draw transverse energy bridge rungs between Strand A and Strand B
    const stepInterval = isMobile ? 8 : 4;
    context.save();
    for (let i = 0; i < this.segments; i += stepInterval) {
      const ptA = this.cachedPointsStrandA[i];
      const ptB = this.cachedPointsStrandB[i];
      if (!ptA || !ptB) continue;

      const avgZ = (ptA.zNorm + ptB.zNorm) * 0.5;
      if (avgZ < 0.2) continue; // Cull distant rungs for contrast

      context.beginPath();
      context.moveTo(ptA.screenX, ptA.screenY);
      context.lineTo(ptB.screenX, ptB.screenY);
      context.strokeStyle = `rgba(255, 126, 40, ${0.14 * avgZ})`;
      context.lineWidth = isMobile ? 0.6 : 0.85;
      context.stroke();
    }
    context.restore();

    // 2. Render Strand B (Counter-Helix - Slightly more delicate)
    this.renderStrand(context, this.cachedPointsStrandB, isMobile, false);

    // 3. Render Strand A (Primary Core Energy Helix - High radiance)
    this.renderStrand(context, this.cachedPointsStrandA, isMobile, true);
  }

  renderStrand(context, points, isMobile, isPrimary) {
    // Draw segmented strokes with depth-based luminosity
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i];
      const p1 = points[i + 1];

      // Cull segments far outside viewport
      if (
        (p0.screenY < -40 && p1.screenY < -40) ||
        (p0.screenY > context.canvas.height + 40 && p1.screenY > context.canvas.height + 40)
      ) {
        continue;
      }

      const zAvg = (p0.zNorm + p1.zNorm) * 0.5; // 0 = back, 1 = front

      // Glowing outer aura for front strands
      if (zAvg > 0.55 && isPrimary && !isMobile) {
        context.beginPath();
        context.moveTo(p0.screenX, p0.screenY);
        context.lineTo(p1.screenX, p1.screenY);
        context.strokeStyle = `rgba(255, 94, 30, ${0.28 * zAvg})`;
        context.lineWidth = 6.0 * zAvg;
        context.lineCap = "round";
        context.stroke();
      }

      // Middle luminous energy beam
      context.beginPath();
      context.moveTo(p0.screenX, p0.screenY);
      context.lineTo(p1.screenX, p1.screenY);

      if (isPrimary) {
        context.strokeStyle = `rgba(255, 126, 40, ${0.25 + zAvg * 0.65})`;
        context.lineWidth = isMobile ? 1.4 * (0.6 + zAvg * 0.8) : 2.6 * (0.5 + zAvg * 0.9);
      } else {
        context.strokeStyle = `rgba(255, 160, 60, ${0.15 + zAvg * 0.45})`;
        context.lineWidth = isMobile ? 1.0 * (0.5 + zAvg * 0.7) : 1.6 * (0.4 + zAvg * 0.8);
      }
      context.stroke();

      // Sharp glowing white/amber core for foreground
      if (zAvg > 0.65 && isPrimary) {
        context.beginPath();
        context.moveTo(p0.screenX, p0.screenY);
        context.lineTo(p1.screenX, p1.screenY);
        context.strokeStyle = `rgba(255, 240, 210, ${0.45 * (zAvg - 0.4)})`;
        context.lineWidth = isMobile ? 0.75 : 1.1;
        context.stroke();
      }
    }
  }
}

// Background Stardust Field
class AmbientStardust {
  constructor(width, height) {
    this.reset(width, height, true);
  }

  reset(width, height, isInitial = false) {
    this.x = Math.random() * width;
    this.y = isInitial ? Math.random() * height : height + 10;
    this.z = Math.random() * 0.7 + 0.3;
    this.radius = (Math.random() * 1.3 + 0.5) * this.z;
    this.speedY = -(Math.random() * 0.3 + 0.1) * this.z;
    this.speedX = (Math.random() - 0.5) * 0.2 * this.z;
    this.opacity = (Math.random() * 0.4 + 0.15) * this.z;
    this.pulsePhase = Math.random() * Math.PI * 2;
    this.pulseSpeed = Math.random() * 0.02 + 0.01;
    this.hue = Math.random() > 0.5 ? 24 : 34; // warm orange / amber
  }

  update(width, height, scrollVelocity, prefersReducedMotion) {
    if (prefersReducedMotion) return;

    this.pulsePhase += this.pulseSpeed;
    const velocityY = scrollVelocity * -1.2 * this.z;
    this.y += this.speedY + velocityY;
    this.x += this.speedX;

    if (this.y < -15) {
      this.y = height + 10;
      this.x = Math.random() * width;
    } else if (this.y > height + 15) {
      this.y = -10;
      this.x = Math.random() * width;
    }

    if (this.x < -15) this.x = width + 10;
    if (this.x > width + 15) this.x = -10;
  }

  draw(context) {
    const pulse = 0.8 + Math.sin(this.pulsePhase) * 0.2;
    context.beginPath();
    context.arc(this.x, this.y, this.radius * pulse, 0, Math.PI * 2);
    context.fillStyle = `hsla(${this.hue}, 90%, 65%, ${this.opacity * pulse})`;
    context.fill();
  }
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function CinematicBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let animationFrameId;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let isVisible = true;

    // Smooth scroll progress and velocity interpolation
    let targetScroll = 0;
    let currentScroll = 0;
    let scrollVelocity = 0;
    let lastScrollY = window.scrollY;

    const isMobile = window.innerWidth < 768;
    const sparkCount = isMobile ? 45 : 95;
    const stardustCount = isMobile ? 25 : 55;

    // Initialize 3D Engine objects
    const energyHelix = new EnergyHelix();
    let sparks = [];
    let stardust = [];

    function resize() {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);

      // Initialize helical sparks and stardust
      sparks = [];
      for (let i = 0; i < sparkCount; i++) {
        sparks.push(new HelicalSpark(i, sparkCount));
      }

      stardust = [];
      for (let i = 0; i < stardustCount; i++) {
        stardust.push(new AmbientStardust(width, height));
      }
    }

    function handleScroll() {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      targetScroll = docHeight > 0 ? Math.min(1, Math.max(0, scrollY / docHeight)) : 0;

      const deltaY = scrollY - lastScrollY;
      scrollVelocity = deltaY * 0.05;
      lastScrollY = scrollY;
    }

    function handleVisibilityChange() {
      isVisible = !document.hidden;
      if (isVisible) {
        lastScrollY = window.scrollY;
      }
    }

    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);

    resize();
    handleScroll();

    // Main 60 FPS Render Loop
    function render(currentTime) {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      // Smooth damping (lerp): immediate response with subtle inertia
      currentScroll += (targetScroll - currentScroll) * 0.09;
      scrollVelocity *= 0.91;

      // 1. Deep Space Base
      ctx.fillStyle = "#07080a";
      ctx.fillRect(0, 0, width, height);

      // 2. Precompute 3D Energy Helix for this frame
      energyHelix.computePoints(
        width,
        height,
        currentScroll,
        prefersReducedMotion ? 0 : currentTime,
        isMobile
      );

      // 3. Volumetric Radiant Glow following the 3D Helix Spine
      const spineFocalX = energyHelix.getSpineCenter(0.45, currentScroll, width);
      const spineFocalY = height * 0.45;
      const glowRadius = Math.max(width, height) * 0.42;

      const volumetricGlow = ctx.createRadialGradient(
        spineFocalX,
        spineFocalY,
        0,
        spineFocalX,
        spineFocalY,
        glowRadius
      );
      volumetricGlow.addColorStop(0, "rgba(255, 94, 30, 0.13)");
      volumetricGlow.addColorStop(0.5, "rgba(255, 126, 71, 0.04)");
      volumetricGlow.addColorStop(1, "rgba(7, 8, 10, 0)");

      ctx.fillStyle = volumetricGlow;
      ctx.fillRect(0, 0, width, height);

      // Secondary ambient fill for depth
      if (!isMobile) {
        const secondaryGlow = ctx.createRadialGradient(
          width * 0.2,
          height * 0.7,
          0,
          width * 0.2,
          height * 0.7,
          width * 0.35
        );
        secondaryGlow.addColorStop(0, "rgba(255, 140, 50, 0.05)");
        secondaryGlow.addColorStop(1, "rgba(7, 8, 10, 0)");
        ctx.fillStyle = secondaryGlow;
        ctx.fillRect(0, 0, width, height);
      }

      // 4. Update & Draw Ambient Stardust
      for (let i = 0; i < stardust.length; i++) {
        stardust[i].update(width, height, scrollVelocity, prefersReducedMotion);
        stardust[i].draw(ctx);
      }

      // 5. Draw 3D Energy Helix Ribbons & Bridge Rungs
      energyHelix.draw(ctx, width, height, currentScroll, isMobile);

      // 6. Update & Draw Helical Sparks flowing along the spiral
      for (let i = 0; i < sparks.length; i++) {
        if (!prefersReducedMotion) {
          sparks[i].update(currentScroll, scrollVelocity);
        }
        sparks[i].draw(ctx, energyHelix, width, height, isMobile);
      }

      animationFrameId = requestAnimationFrame(render);
    }

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
      style={{
        transform: "translate3d(0, 0, 0)",
        willChange: "transform",
      }}
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
