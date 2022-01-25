import React, { Suspense, useState  } from "react";
import { Canvas,  useThree, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import LandingModel from "./LandingModel"
import Loading from "./Loading";
import * as THREE from "three";
import { FaAngleRight } from 'react-icons/fa'
import ReactTooltip from "react-tooltip";

function Rig() {
    const { camera, mouse } = useThree();
    const vec = new THREE.Vector3();
    return useFrame(() =>
      camera.position.lerp(
        vec.set(mouse.x * 2, mouse.y * 1, camera.position.z),
        0.02
      )
    );
  }

export default function Landing({ setScene, isPlaying, setIsPlaying }) {
  const [click, setClick] = useState(false)
  function handleClick () {
    setClick(true)
    if (!isPlaying) {
      setIsPlaying(true)
    }
  }

  return (
    <div className="landing" >
      {click ? <div className="oneliner-overlay landing" onClick={()=> setScene("2")}>
      <h2 className="story-text" style={{fontSize: "3em"}}>For the best viewing experience:</h2>
        <div className="overlay-instructions">
          
          <div className="overlay-instructions-col">
            <p style={{fontSize: "2em"}}>1. Press `F11` to make the browser full-screen</p>
          </div>
          <div className="overlay-instructions-col">
            <p style={{fontSize: "2em"}}>2. And make sure that your volume is turned on</p>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <p className="explanation">click anywhere to continue</p>
        
      </div> : null}
      
      <div className="anatomy-background-1"></div>
      {/* 3D CANVAS */}
      <Canvas linear frameloop="demand">
        <PerspectiveCamera makeDefault position={[0, 2, 5]} />
        <Suspense fallback={<Loading />}>

          {/* Lights */}
          <ambientLight intensity={1} />
          <spotLight position={[10, 10, 10]} angle={0.15}  penumbra={2} />
          <spotLight
            position={[-10, -10, -10]}
            angle={0.15}
            penumbra={2}
          />
          <spotLight position={[10, -10, 10]} angle={0.15} penumbra={2} />
          <pointLight position={[-10, -10, -10]} />

          {/* Model */}
          <LandingModel />

          {/* Cursor-Move-Camera Rig */}
          <Rig />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            enableRotate={false}
          />
        </Suspense>
      </Canvas>
      
      <div className="tagline">
        <p>learn how to save a life</p>
      </div>

      <div className="next">
        <FaAngleRight className="btn" onClick={handleClick}/>
      </div>
    </div>
  )
}
