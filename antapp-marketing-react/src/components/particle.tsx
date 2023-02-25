import * as THREE from 'three';
import { useMemo } from 'react';
import { OrbitControls } from '@react-three/drei/core/OrbitControls';
import { Stats } from '@react-three/drei/core/Stats';
import { Canvas, useFrame } from '@react-three/fiber';
import { vertexShader, fragmentShader } from './shader';
import '../styles/style.scss';

const Particles = () => {
    const planePositions = useMemo(() => {
        const planeGeometry = new THREE.PlaneGeometry(20, 20, 150, 150);
        const positions = planeGeometry.attributes.position;
        return positions.array;
    }, []);

    const shaderArgs = useMemo(
        () => ({
            uniforms: {
                uTime: { value: 0 }
            },
            vertexShader,
            fragmentShader
        }),
        []
    );

    useFrame(() => {
            shaderArgs.uniforms.uTime.value++;
        },
        [] as never
    );

    return (
        <points rotation={[-Math.PI / 2.5, 0, 4]}>
            <bufferGeometry attach="geometry">
                <bufferAttribute
                    attach="attributes-position"
                    array={planePositions}
                    itemSize={3}
                    count={planePositions.length / 3}
                />
            </bufferGeometry>
            <shaderMaterial
                args={[shaderArgs]}
                transparent={true}
                depthTest={false}
                depthWrite={false}
            />
        </points>
    );
};

// スクロールでカメラ移動（背景なので今回はオフにする）
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );
// camera.position.set(0, 200, 300);
// camera.lookAt(scene.position);

export default function Particle() {
    return (
        <Canvas dpr={2}>
            <color attach="background" />
            {/*<Stats/>*/}
            {/*<OrbitControls camera={camera} />*/}
            <OrbitControls/>
            <Particles />
        </Canvas>
    );
}
