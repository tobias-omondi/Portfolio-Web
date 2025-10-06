import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const BrainScene = () => {
  const mountRef = useRef(null)

  useEffect(() => {
    const scene = new THREE.Scene()
    scene.background = new THREE.Color("beige"); 
   
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 32

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)
    mountRef.current.appendChild(renderer.domElement)

    // === 2. Lights ===
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7) 
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0xffffff, 1.2) //
    pointLight.position.set(2, 3, 3)
    scene.add(pointLight)

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.2)
    scene.add(hemiLight)

    

    //3. Load Brain Model
    const loader = new GLTFLoader()
    let brain

    loader.load(
      '/Model/human_brain.glb', // path from public folder
      (gltf) => {
        console.log('✅ Model loaded:', gltf)
        brain = gltf.scene
        brain.scale.set(0.08, 0.08, 0.08)
        brain.position.set(0, 0, 0)
        scene.add(brain)

        // bright material to confirm visibility
        brain.traverse((child) => {
          if (child.isMesh) {
            child.material = new THREE.MeshNormalMaterial(
              { color: 0xff0066, // 🔴 hot pink/red color
      metalness: 0.3,
      roughness: 0.5,}
            )
          }
        })
      },
      (xhr) => console.log((xhr.loaded / xhr.total) * 100 + '% loaded'),
      (error) => console.error('❌ Error loading model:', error)
    )

    // === 4. Animation loop ===
    const animate = () => {
      requestAnimationFrame(animate)
      if (brain) brain.rotation.y += 0.01
      renderer.render(scene, camera)
    }
    animate()

    // === 5. Handle Resize ===
    const handleResize = () => {
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)
    }
    window.addEventListener('resize', handleResize)

    // === Cleanup ===
    return () => {
      window.removeEventListener('resize', handleResize)
      mountRef.current.removeChild(renderer.domElement)
    }
  }, [])

  return <div className="w-full h-screen" ref={mountRef}></div>
}

export default BrainScene
