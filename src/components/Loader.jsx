import { Html, useProgress } from "@react-three/drei";
import { motion } from "framer-motion";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="flex flex-col items-center justify-center h-screen">
        <motion.span
          className="canvas-load mb-4"
          animate={{ rotate: 360 }} // Rotates the loader
          transition={{ 
            duration: 2, // Duration of the rotation
            ease: "linear",
            repeat: Infinity // Repeats the animation infinitely
          }}
        >
          {/* Add any additional loading animation or content here */}
          <div className="w-16 h-16 border-4 border-t-4 border-blue-500 rounded-full border-opacity-50 animate-spin"></div>
        </motion.span>
        <p className="text-white font-bold text-lg mt-4">
          {progress.toFixed(2)}%
        </p>
      </div>
    </Html>
  );
};

export default Loader;
