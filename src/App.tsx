import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import './App.css'
import Three from './components/Three'

function App() {
  return (
      <Canvas id="threeCanvasContainer">
        <Suspense fallback={null}> 
        {/* suspense allows you to give some kind of element while page loads.  */}
         {/*Components go here*/}
         <Three/>
        </Suspense>
      </Canvas>
  )
}

export default App
