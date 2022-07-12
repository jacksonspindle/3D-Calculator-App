import {React, Suspense} from 'react'
import Calculator from './components/Calculator'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Style from './style.css'

export default function App(){
    return (
        <div className='canvas'>
            
            <Suspense  >
                <Canvas >
                    <Calculator />
                    <directionalLight intensity={3}/>
                    <ambientLight intensity={2}/>
                    <OrbitControls 
                        maxDistance={2.5}
                        minDistance={2}

                    />

                </Canvas>
            </Suspense> 
        </div>
    )
}