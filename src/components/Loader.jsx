import { Html, useProgress } from "@react-three/drei";
import { motion } from "framer-motion";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="flex flex-col items-center justify-center h-screen">
        <span className="canvas-load mb-4">
          {/* Add any additional loading animation or content here */}
        </span>
        <p className="text-white font-bold text-lg mt-4">
          {progress.toFixed(2)}%
        </p>
      </div>
    </Html>
  );
};

export default Loader;
