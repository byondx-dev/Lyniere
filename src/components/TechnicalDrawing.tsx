import { motion } from "motion/react";

export function TechnicalDrawing() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {/* Isometric Building Wireframe - Left Side */}
      <motion.svg
        className="absolute left-[5%] top-[15%] w-[400px] h-[500px]"
        viewBox="0 0 400 500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2 }}
      >
        <defs>
          <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'var(--color-accent)', stopOpacity: 0.6 }} />
            <stop offset="100%" style={{ stopColor: 'var(--color-accent)', stopOpacity: 0.1 }} />
          </linearGradient>
        </defs>

        {/* Base grid */}
        {[...Array(8)].map((_, i) => (
          <motion.line
            key={`grid-h-${i}`}
            x1="0"
            y1={50 + i * 50}
            x2="400"
            y2={50 + i * 50}
            stroke="var(--color-accent)"
            strokeWidth="0.5"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 2.5 + i * 0.1 }}
          />
        ))}
        
        {[...Array(8)].map((_, i) => (
          <motion.line
            key={`grid-v-${i}`}
            x1={50 + i * 50}
            y1="0"
            x2={50 + i * 50}
            y2="500"
            stroke="var(--color-accent)"
            strokeWidth="0.5"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 2.5 + i * 0.1 }}
          />
        ))}

        {/* Isometric building structure */}
        {/* Floor 1 */}
        <motion.path
          d="M 200 350 L 280 300 L 280 250 L 200 300 Z"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 3 }}
        />
        <motion.path
          d="M 200 350 L 120 300 L 120 250 L 200 300 Z"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 3.2 }}
        />
        <motion.path
          d="M 120 250 L 200 200 L 280 250 L 200 300 Z"
          fill="url(#techGradient)"
          stroke="var(--color-accent)"
          strokeWidth="2"
          initial={{ pathLength: 0, fillOpacity: 0 }}
          animate={{ pathLength: 1, fillOpacity: 0.1 }}
          transition={{ duration: 1.5, delay: 3.4 }}
        />

        {/* Floor 2 */}
        <motion.path
          d="M 200 300 L 280 250 L 280 200 L 200 250 Z"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 3.6 }}
        />
        <motion.path
          d="M 200 300 L 120 250 L 120 200 L 200 250 Z"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 3.8 }}
        />
        <motion.path
          d="M 120 200 L 200 150 L 280 200 L 200 250 Z"
          fill="url(#techGradient)"
          stroke="var(--color-accent)"
          strokeWidth="2"
          initial={{ pathLength: 0, fillOpacity: 0 }}
          animate={{ pathLength: 1, fillOpacity: 0.15 }}
          transition={{ duration: 1.5, delay: 4 }}
        />

        {/* Floor 3 */}
        <motion.path
          d="M 200 250 L 280 200 L 280 150 L 200 200 Z"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 4.2 }}
        />
        <motion.path
          d="M 200 250 L 120 200 L 120 150 L 200 200 Z"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 4.4 }}
        />
        <motion.path
          d="M 120 150 L 200 100 L 280 150 L 200 200 Z"
          fill="url(#techGradient)"
          stroke="var(--color-accent)"
          strokeWidth="2"
          initial={{ pathLength: 0, fillOpacity: 0 }}
          animate={{ pathLength: 1, fillOpacity: 0.2 }}
          transition={{ duration: 1.5, delay: 4.6 }}
        />

        {/* Dimension lines */}
        <motion.line
          x1="90"
          y1="250"
          x2="90"
          y2="350"
          stroke="var(--color-accent)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 5 }}
        />
        <motion.line
          x1="85"
          y1="250"
          x2="95"
          y2="250"
          stroke="var(--color-accent)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 5.2 }}
        />
        <motion.line
          x1="85"
          y1="350"
          x2="95"
          y2="350"
          stroke="var(--color-accent)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 5.2 }}
        />

        {/* Measurement text */}
        <motion.text
          x="60"
          y="305"
          fill="var(--color-accent)"
          fontSize="12"
          fontFamily="monospace"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 5.5 }}
        >
          50m
        </motion.text>

        {/* Detail circles */}
        {[[200, 100], [280, 150], [120, 150]].map(([cx, cy], i) => (
          <motion.circle
            key={`detail-${i}`}
            cx={cx}
            cy={cy}
            r="4"
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="1.5"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 5.5 + i * 0.2 }}
          />
        ))}
      </motion.svg>

      {/* Blueprint Lines - Right Side */}
      <motion.svg
        className="absolute right-[5%] bottom-[10%] w-[350px] h-[400px]"
        viewBox="0 0 350 400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 3 }}
      >
        {/* Floor plan outline */}
        <motion.rect
          x="50"
          y="100"
          width="250"
          height="200"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 3.5 }}
        />

        {/* Interior walls */}
        <motion.line
          x1="175"
          y1="100"
          x2="175"
          y2="300"
          stroke="var(--color-accent)"
          strokeWidth="1.5"
          strokeDasharray="5,5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 4 }}
        />
        <motion.line
          x1="50"
          y1="200"
          x2="300"
          y2="200"
          stroke="var(--color-accent)"
          strokeWidth="1.5"
          strokeDasharray="5,5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 4.2 }}
        />

        {/* Windows */}
        {[[80, 100], [150, 100], [220, 100], [270, 100]].map(([x, y], i) => (
          <motion.rect
            key={`window-top-${i}`}
            x={x}
            y={y - 3}
            width="30"
            height="6"
            fill="var(--color-accent)"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 4.5 + i * 0.1 }}
          />
        ))}

        {/* Door */}
        <motion.path
          d="M 160 300 Q 160 280 175 280"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 5 }}
        />

        {/* Measurements arrows */}
        <motion.line
          x1="50"
          y1="320"
          x2="300"
          y2="320"
          stroke="var(--color-accent)"
          strokeWidth="1"
          markerEnd="url(#arrowhead)"
          markerStart="url(#arrowhead)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 5.5 }}
        />

        {/* Scale indicator */}
        <motion.text
          x="150"
          y="340"
          fill="var(--color-accent)"
          fontSize="10"
          fontFamily="monospace"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 6 }}
        >
          25.0m
        </motion.text>

        {/* Corner marks */}
        {[[50, 100], [300, 100], [50, 300], [300, 300]].map(([x, y], i) => (
          <g key={`corner-${i}`}>
            <motion.line
              x1={x - 10}
              y1={y}
              x2={x + 10}
              y2={y}
              stroke="var(--color-accent)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.3, delay: 5.8 + i * 0.1 }}
            />
            <motion.line
              x1={x}
              y1={y - 10}
              x2={x}
              y2={y + 10}
              stroke="var(--color-accent)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.3, delay: 5.8 + i * 0.1 }}
            />
          </g>
        ))}

        {/* North arrow */}
        <g transform="translate(310, 130)">
          <motion.circle
            r="20"
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="1"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 6.5 }}
          />
          <motion.path
            d="M 0 -15 L 5 5 L 0 -5 L -5 5 Z"
            fill="var(--color-accent)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 6.7 }}
          />
          <motion.text
            y="30"
            fill="var(--color-accent)"
            fontSize="10"
            fontFamily="monospace"
            textAnchor="middle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 6.9 }}
          >
            N
          </motion.text>
        </g>

        {/* Arrow marker definition */}
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="10"
            refX="5"
            refY="3"
            orient="auto"
          >
            <polygon
              points="0 0, 6 3, 0 6"
              fill="var(--color-accent)"
            />
          </marker>
        </defs>
      </motion.svg>

      {/* Rotating detail annotations */}
      <motion.div
        className="absolute top-[20%] right-[30%]"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, repeatType: "loop", ease: "linear" }}
      >
        <svg width="100" height="100" viewBox="0 0 100 100">
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="0.5"
            strokeDasharray="2,2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 4 }}
          />
          <motion.line
            x1="50"
            y1="10"
            x2="50"
            y2="30"
            stroke="var(--color-accent)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 5 }}
          />
          <motion.line
            x1="50"
            y1="70"
            x2="50"
            y2="90"
            stroke="var(--color-accent)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 5 }}
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-[35%] left-[20%]"
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, repeatType: "loop", ease: "linear" }}
      >
        <svg width="80" height="80" viewBox="0 0 80 80">
          <motion.polygon
            points="40,15 65,65 15,65"
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="0.5"
            strokeDasharray="3,3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 4.5 }}
          />
        </svg>
      </motion.div>
    </div>
  );
}