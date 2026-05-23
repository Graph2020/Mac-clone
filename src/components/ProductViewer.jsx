import React from "react";
import useMacBookStore from "../store";
import clsx from "clsx";
import { Canvas } from "@react-three/fiber";
import { Box, PerspectiveCamera } from "@react-three/drei";

function ProductViewer() {
  const { color, scale, setColor, setScale } = useMacBookStore();
  return (
    <section id="product-viewer">
      <h2>Take a closer look.</h2>
      <div className="controls">
        <p className="info">MacbookPro 16" in Space Black</p>
        <div className="flex-center gap-5 mt-5">
          <div className="color-control">
            <div
              onClick={() => setColor("#adb5bd")}
              className={clsx(
                "bg-neutral-300",
                color === "#adb5bd" && "active",
              )}
            />
            <div
              onClick={() => setColor("#2e2c2e")}
              className={clsx(
                "bg-neutral-900",
                color === "#2e2c2e" && "active",
              )}
            />
          </div>
          <div className="size-control">
            <div
              className={clsx(
                scale === 0.06
                  ? "bg-white text-black"
                  : " bg-transparent text-white",
              )}
              onClick={() => setScale(0.06)}
            >
              <p>14"k/</p>
            </div>
            <div
              className={clsx(
                scale === 0.08
                  ? "bg-white text-black"
                  : " bg-transparent text-white",
              )}
              onClick={() => setScale(0.08)}
            >
              <p>16"k/</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white text-4xl">Render Canvas</div>

      <Canvas id="canvas">
        <PerspectiveCamera
          makeDefault
          position={[-1, 0.5, 5]}
          far={50}
          fov={50}
        />
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Box position={[-1, 1, 1]} scale={scale * 10}>
          <meshStandardMaterial color="hotpink" />
        </Box>
      </Canvas>
    </section>
  );
}

export default ProductViewer;
