import React, { Suspense, useState  } from "react";
import { Canvas,  useThree, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import LandingModel from "./LandingModel"
import Loading from "./Loading";
import * as THREE from "three";
import { FaAngleRight } from 'react-icons/fa'
import FadeIn from 'react-fade-in'

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

export default function Landing({ setScene }) {
  const [clicked, setClicked] = useState(0)

  return (
    <div className="landing" >
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

      {/* <FadeIn>
        <div className="overlay-screen">
          <p>An action-adventure game in which the player is put into emergency medical situations and applies first aid to help others.</p>
        </div>
      </FadeIn> */}


        <div className="next">
            <FaAngleRight className="btn" onClick={() => setClicked(clicked + 1)}/>
        </div>

      { clicked === 1 ? 
      <div className="oneliner-overlay">
        <div className="question" style={{marginTop:"25vh"}}>
          <h2>What kind of game is this?</h2>
        </div>
        <div className="center">
        
          <h2 className="oneline-overlay-text">A first-person action-adventure game in which the player is put into emergency medical situations and applies first aid to help others.</h2>
        </div>
      </div> : null }
      { clicked === 2 ? setScene("3") : null }
    </div>
  )
}
