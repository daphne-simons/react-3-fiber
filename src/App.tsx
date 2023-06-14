import { Suspense } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import {Three} from './components/Three'
function App() {


  return (
    <>
      <Canvas className="canvas">
        <Suspense fallback={null}> 
        {/* suspense allows you to give some kind of element while page loads.  */}
         {/*Components go here*/}
        </Suspense>
      </Canvas>
       
    </>
  )
}

export default App
