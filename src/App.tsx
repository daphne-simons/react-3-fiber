import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import './App.css'
// import Three from './components/Three'
import D20 from './components/D20'
import NewDice from './components/NewDice'
 
function App() {
  return (
      <Canvas shadows id="threeCanvasContainer">
        <Suspense fallback={null}> 
        {/* suspense allows you to give some kind of element while page loads.  */}
         {/*Components go here*/}
         <NewDice/>
        </Suspense>
      </Canvas>
  )
}

export default App
