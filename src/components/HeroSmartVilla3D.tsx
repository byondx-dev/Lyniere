import React, { useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { 
  Environment, 
  PerspectiveCamera,
  Float,
  Sparkles,
  ScrollControls,
  useScroll,
  Line
} from "@react-three/drei";
import * as THREE from "three";
import { motion, useScroll as useFramerScroll, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";

// --- SCENE CONFIGURATION ---

// Minimalist Sophisticated Luxury
const LUXURY_CONFIG = {
  dark: {
    bg: "#121214",
    fog: "#121214",
    glass: "#2c2c30",
    accent: "#ffffff",
    metal: "#444444",
    gold: "#a3a3a3",
    horizonTop: "#2a2a2a",
    horizonBottom: "#121214"
  },
  light: {
    bg: "#f4f4f5",
    fog: "#f4f4f5",
    glass: "#ffffff",
    accent: "#18181b",
    metal: "#d4d4d8",
    gold: "#71717a",
    horizonTop: "#e4e4e7",
    horizonBottom: "#f4f4f5"
  }
};

// --- 3D COMPONENTS ---

const TechDrawingLines = ({ isDark }: { isDark: boolean }) => {
  const groupRef = useRef<THREE.Group>(null);
  const lineColor = isDark ? "#ffffff" : "#000000";
  const opacity = 0.5;

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.05) * 0.1;
      const scale = 1 + Math.sin(t * 0.2) * 0.02;
      groupRef.current.scale.set(scale, scale, scale);
    }
  });

  const lines = useMemo(() => {
    const l = [];
    const size = 3;
    const d = size/2;
    
    l.push([new THREE.Vector3(-d, -d, d), new THREE.Vector3(d, -d, d)]);
    l.push([new THREE.Vector3(d, -d, d), new THREE.Vector3(d, d, d)]);
    l.push([new THREE.Vector3(d, d, d), new THREE.Vector3(-d, d, d)]);
    l.push([new THREE.Vector3(-d, d, d), new THREE.Vector3(-d, -d, d)]);
    
    l.push([new THREE.Vector3(-d, -d, -d), new THREE.Vector3(d, -d, -d)]);
    l.push([new THREE.Vector3(d, -d, -d), new THREE.Vector3(d, d, -d)]);
    l.push([new THREE.Vector3(d, d, -d), new THREE.Vector3(-d, d, -d)]);
    l.push([new THREE.Vector3(-d, d, -d), new THREE.Vector3(-d, -d, -d)]);
    
    l.push([new THREE.Vector3(-d, -d, -d), new THREE.Vector3(-d, -d, d)]);
    l.push([new THREE.Vector3(d, -d, -d), new THREE.Vector3(d, -d, d)]);
    l.push([new THREE.Vector3(d, d, -d), new THREE.Vector3(d, d, d)]);
    l.push([new THREE.Vector3(-d, d, -d), new THREE.Vector3(-d, d, d)]);

    return l;
  }, []);

  return (
    <group ref={groupRef}>
      {lines.map((pts, i) => (
        <Line key={i} points={pts} color={lineColor} opacity={opacity} transparent lineWidth={1.5} dashed={false} />
      ))}
      {[0, 1, 2].map((y, i) => (
         <Line
            key={`scan-${i}`}
            points={[new THREE.Vector3(-2, y-1, 2), new THREE.Vector3(2, y-1, 2)]}
            color={lineColor}
            opacity={0.3}
            transparent
            lineWidth={1}
            dashed={true}
            dashScale={10}
            dashSize={0.2}
            dashOffset={i}
         />
      ))}
      {[1.2, 1.8, 2.5].map((r, i) => (
        <mesh key={`circle-${i}`} rotation={[Math.PI/2, 0, 0]}>
          <ringGeometry args={[r, r + 0.02, 64]} />
          <meshBasicMaterial color={lineColor} opacity={opacity * 0.3} transparent side={THREE.DoubleSide} />
        </mesh>
      ))}
    </group>
  );
};

const MinimalistSculpture = ({ isDark }: { isDark: boolean }) => {
  const groupRef = useRef<THREE.Group>(null);
  const scroll = useScroll();
  const colors = isDark ? LUXURY_CONFIG.dark : LUXURY_CONFIG.light;

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.15;
      if (scroll) {
        const scrollOffset = scroll.offset;
        // Scroll interaction: Vanishing effect
        // Reduced scroll length effect as requested: offset * 3 instead of 5
        groupRef.current.position.y = scrollOffset * 3; 
        groupRef.current.rotation.x = scrollOffset * 2;
        groupRef.current.scale.setScalar(1 - scrollOffset * 0.8); // Faster fade/shrink
      }
    }
  });

  const materialProps = {
    color: colors.glass,
    roughness: 0.2,
    metalness: 0.1,
    transmission: 0.6,
    thickness: 1,
    clearcoat: 0.5,
    side: THREE.DoubleSide
  };

  return (
    <group ref={groupRef} position={[1.5, 0, 0]}> 
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
        <mesh position={[0, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[1.5, 3, 0.2]} />
          <meshPhysicalMaterial {...materialProps} />
        </mesh>
        
        {/* Shifted metal bar higher up again (1.2) as requested */}
        <mesh position={[0.5, 1.2, 0]} rotation={[0, Math.PI / 3, 0]} castShadow receiveShadow>
          <boxGeometry args={[2, 2, 0.1]} />
          <meshPhysicalMaterial {...materialProps} color={colors.metal} transmission={0} metalness={0.5} />
        </mesh>

        <mesh position={[-0.5, -0.8, 0.5]} rotation={[Math.PI / 4, 0, Math.PI / 6]} castShadow receiveShadow>
           <boxGeometry args={[2.5, 0.5, 0.1]} />
           <meshPhysicalMaterial {...materialProps} color={colors.accent} transmission={0} emissive={colors.accent} emissiveIntensity={0.1} />
        </mesh>

        <TechDrawingLines isDark={isDark} />
      </Float>
    </group>
  );
};

const HorizonBackground = ({ isDark, customBg }: { isDark: boolean, customBg?: string }) => {
  const colors = isDark ? LUXURY_CONFIG.dark : LUXURY_CONFIG.light;
  const bgColor = customBg || colors.bg;
  return (
    <mesh scale={[100, 100, 100]}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshBasicMaterial side={THREE.BackSide} color={bgColor} depthWrite={false} />
    </mesh>
  );
};

const MinimalScene = ({ theme, nextSectionColor }: { theme: string, nextSectionColor: string }) => {
  const isDark = theme === 'dark';
  const colors = isDark ? LUXURY_CONFIG.dark : LUXURY_CONFIG.light;
  const bgToUse = nextSectionColor || colors.bg;

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={35} />
      <ambientLight intensity={isDark ? 0.4 : 0.8} />
      <rectAreaLight width={10} height={10} intensity={2} position={[5, 5, 5]} color={colors.accent} lookAt={[0,0,0] as any} />
      <pointLight position={[-5, -5, 5]} intensity={0.5} color={colors.gold} />
      <Environment preset={isDark ? "studio" : "city"} blur={1} background={false} />
      <HorizonBackground isDark={isDark} customBg={bgToUse} />
      
      {/* Stars removed as requested */}
      <Sparkles count={30} scale={8} size={1.5} speed={0.1} opacity={0.3} color={colors.accent} />
      
      {/* Reduced scroll pages to make animation finish quicker */}
      <ScrollControls pages={1.2} damping={0.2}>
         <MinimalistSculpture isDark={isDark} />
      </ScrollControls>
    </>
  );
};

const CheckpointSidebar = ({ isDark }: { isDark: boolean }) => {
  const { scrollYProgress } = useFramerScroll();
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const checkpoints = [0.1, 0.3, 0.5, 0.7, 0.9];

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 h-[40vh] flex flex-col items-center gap-8 z-50 hidden md:flex">
      <div className="absolute top-0 bottom-0 w-[1px] bg-gray-300/20 origin-top">
         <motion.div 
           style={{ scaleY, transformOrigin: 'top' }} 
           className={`w-full h-full ${isDark ? 'bg-white' : 'bg-black'}`} 
         />
      </div>
      {checkpoints.map((pt, i) => (
        <div key={i} className="relative">
           <div className={`w-1 h-1 rounded-full transition-colors duration-300 ${isDark ? 'bg-gray-600' : 'bg-gray-300'}`} />
        </div>
      ))}
    </div>
  );
};

interface HeroSmartVilla3DProps {
  onNavigate?: (page: string) => void;
}

export function HeroSmartVilla3D({ onNavigate }: HeroSmartVilla3DProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [isHomeMode, setIsHomeMode] = useState(false);
  const [showContent, setShowContent] = useState(false);
  
  const nextSectionColor = isDark ? "#000000" : "#ffffff";

  useEffect(() => {
    // 1. Start showing content when Welcome Screen is done (approx 5.5s)
    const showTimer = setTimeout(() => {
      setShowContent(true);
    }, 5500);

    // 2. Automatically switch from "FUTURE" to "HOME" a few seconds later
    const switchTimer = setTimeout(() => {
      setIsHomeMode(true);
    }, 8500); // 3 seconds after text appears

    return () => {
      clearTimeout(showTimer);
      clearTimeout(switchTimer);
    };
  }, []);

  return (
    <div 
      className="relative w-full h-screen overflow-hidden transition-colors duration-700"
      style={{ backgroundColor: nextSectionColor }}
    >
      <div className="absolute inset-0 z-0">
        <Canvas
          dpr={[1.5, 2]} 
          gl={{ 
            antialias: true, 
            toneMapping: THREE.ACESFilmicToneMapping,
            outputColorSpace: THREE.SRGBColorSpace,
            powerPreference: "high-performance"
          }}
        >
          <fog attach="fog" args={[nextSectionColor, 5, 20]} />
          <MinimalScene theme={theme} nextSectionColor={nextSectionColor} />
        </Canvas>
      </div>

      <CheckpointSidebar isDark={isDark} />

      <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-between p-8 md:p-16 max-w-[1600px] mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : -20 }}
          transition={{ duration: 1 }}
          className="text-left"
        >
           <h2 className="text-[10px] md:text-xs font-mono uppercase tracking-widest opacity-60" style={{ color: isDark ? '#fff' : '#000' }}>
             Awwwards Collection • 2025
           </h2>
        </motion.div>

        <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 text-left min-h-[200px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {showContent && (
              <motion.h1
                layout
                className="text-6xl md:text-9xl font-light tracking-tight leading-none whitespace-nowrap flex flex-col"
                style={{ color: isDark ? '#ffffff' : '#121214' }}
              >
                SMART
                <br />
                <span className="relative block">
                  <AnimatePresence mode="wait">
                    {isHomeMode ? (
                      <motion.span
                        key="home"
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="font-bold italic block"
                      >
                        HOME
                      </motion.span>
                    ) : (
                      <motion.span
                        key="future"
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="font-bold italic block"
                      >
                        FUTURE
                      </motion.span>
                    )}
                  </AnimatePresence>
                </span>

                <AnimatePresence>
                  {!isHomeMode && (
                    <motion.span
                      key="subtitle"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 0.5, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.8 }}
                      className="block text-2xl font-normal mt-2 tracking-normal overflow-hidden"
                    >
                      (BEYOND FORM)
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.h1>
            )}
          </AnimatePresence>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: showContent ? 1 : 0, x: showContent ? 0 : 20 }}
          transition={{ duration: 1 }}
          className="text-right self-end pointer-events-auto"
        >
           <button 
             onClick={() => onNavigate?.('homes')}
             className="group flex items-center gap-4 text-sm uppercase tracking-widest transition-all hover:opacity-70"
             style={{ color: isDark ? '#fff' : '#000' }}
           >
             <span>Explore Residence</span>
             <span className="block w-12 h-[1px] bg-current group-hover:w-20 transition-all duration-500" />
           </button>
        </motion.div>
      </div>
    </div>
  );
}
