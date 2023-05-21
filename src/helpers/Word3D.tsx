import { useState } from 'react'
import { Text3D } from '@react-three/drei'

export default function Word3D(props: any) {
  const [hovered, hover] = useState(false)

  return (
    <Text3D
      font="/Pacifico_Regular.json"
      onClick={() => { window.open(props.url, "_blank") }}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      position={props.position}
    >
      {props.label}
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </Text3D>
  )
}
