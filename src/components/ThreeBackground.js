"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const scene = new THREE.Scene();
    
    // Set space-black fog
    scene.fog = new THREE.FogExp2(0x080810, 0.005);

    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      1,
      1000
    );
    camera.position.z = 200;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Cosmic Star Field
    const particleCount = 600;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color("#4F46E5"); // Indigo
    const color2 = new THREE.Color("#8B5CF6"); // Cosmic Violet
    const color3 = new THREE.Color("#E2E8F0"); // Silver

    for (let i = 0; i < particleCount * 3; i += 3) {
      // Floating stardust distribution
      positions[i] = (Math.random() - 0.5) * 500;
      positions[i + 1] = (Math.random() - 0.5) * 500;
      positions[i + 2] = (Math.random() - 0.5) * 400;

      // Color mix
      const mix = Math.random();
      let c;
      if (mix < 0.4) {
        c = color1;
      } else if (mix < 0.8) {
        c = color2;
      } else {
        c = color3;
      }
      colors[i] = c.r;
      colors[i + 1] = c.g;
      colors[i + 2] = c.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Circular glowing texture
    const canvas = document.createElement("canvas");
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
    gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
    gradient.addColorStop(0.3, "rgba(139, 92, 246, 0.4)");
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 16, 16);
    const texture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 3,
      map: texture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      vertexColors: true,
    });

    const stars = new THREE.Points(geometry, material);
    scene.add(stars);

    // Mouse Tracking variables
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX - window.innerWidth / 2) * 0.04;
      mouseY = (event.clientY - window.innerHeight / 2) * 0.04;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      if (!container || !camera || !renderer) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth camera pan based on mouse
      targetX += (mouseX - targetX) * 0.03;
      targetY += (mouseY - targetY) * 0.03;

      stars.rotation.y += 0.0002;
      stars.rotation.x = targetY * 0.001;
      stars.rotation.y += targetX * 0.001;

      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 -z-20 w-full h-full overflow-hidden bg-[#080810]"
    />
  );
}
