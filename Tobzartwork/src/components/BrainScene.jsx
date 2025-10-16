import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const BrainScene = () => {
  const mountRef = useRef(null)

  useEffect(() => {
    // --- 1. Scene Setup ---
    const scene = new THREE.Scene()
    scene.background = null;


    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 34

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)

    // this makes the background fully transparent
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement)

    
    // --- 2. Lights ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7)
    const pointLight = new THREE.PointLight(0xffffff, 1.2)
    pointLight.position.set(2, 3, 3)
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.2)
    scene.add(ambientLight, pointLight, hemiLight)

    // --- 3. Load Brain Model ---
    const loader = new GLTFLoader()
    let brain

    loader.load(
      '/Model/human_brain.glb',
      (gltf) => {
        console.log('✅ Model loaded:', gltf)
        brain = gltf.scene

        // 🔹 Responsive scaling
        const isMobile = window.innerWidth < 768
        const scale = isMobile ? 0.12 : 0.08
        brain.scale.set(scale, scale, scale)

        brain.position.set(0, 0, 0)
        scene.add(brain)

        // 🔹 Bring back that cool gradient color
        brain.traverse((child) => {
          if (child.isMesh) {
            child.material = new THREE.MeshPhysicalMaterial({
              color: 0xF5F5DC,// Bright cyan
              wireframe: true,
              roughness: 0.1,
              metalness: 0.5,
            })
          }
        })
      },
      (xhr) => console.log((xhr.loaded / xhr.total) * 100 + '% loaded'),
      (error) => console.error('❌ Error loading model:', error)
    )

    // --- 4. Animation ---
    const animate = () => {
      requestAnimationFrame(animate)
      if (brain) {
        brain.rotation.y += 0.007
        // brain.rotation.x += 0.001
      }
      renderer.render(scene, camera)
    }
    animate()
    

    // --- 5. Resize handler ---
    const handleResize = () => {
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)

      if (brain) {
        const isMobile = window.innerWidth < 768
        const scale = isMobile ? 0.12 : 0.08
        brain.scale.set(scale, scale, scale)
      }
    }
    window.addEventListener('resize', handleResize)

    // --- 6. Cleanup ---
    return () => {
      window.removeEventListener('resize', handleResize)
      mountRef.current.removeChild(renderer.domElement)
    }
  }, [])

  return <div className=" w-2/3 items-center mx-auto h-[300px] md:h-[400px] lg:w-3/4 lg:h-[450px]" ref={mountRef}></div>
}

export default BrainScene