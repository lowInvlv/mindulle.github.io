import ReactDOM from 'react-dom/client'
import { Canvas, useThree } from '@react-three/fiber'
import { Center, OrbitControls } from '@react-three/drei'
import Word3D from './helpers/Word3D'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Canvas orthographic camera={{ position: [0, 0, 100], zoom: 25 }}>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Scene />
    <OrbitControls enableZoom={true} enablePan={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
  </Canvas >,
)


function Scene({ margin = 0.5 }) {
  const { width, height } = useThree((state) => state.viewport)
  return (
    <>
      <Center bottom right position={[-width / 2 + margin, height / 2 - margin, 0]}>
        <Word3D label="CLI" url="https://github.com/mindulle/learn" position={[0, 0, 0]} />
        <Word3D label="Gym" url="https://github.com/mindulle/Gym" position={[width / -4, height / -3, 0]} />
        <Word3D label="UI" url="https://github.com/mindulle/playground" position={[width / -4, height / 3, 0]} />
        <Word3D label="Garden" url="https://mindulle.github.io/garden" position={[width / 4, height / 3, 0]} />
        <Word3D label="Bookshelf" url="https://mindulle.github.io/bookshelf" position={[width / 4, height / -3, 0]} />
      </Center>
    </>
  )
}