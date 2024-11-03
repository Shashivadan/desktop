import './style.css'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import GUI from 'lil-gui';

import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const geometry = new THREE.BoxGeometry( );
const material = new THREE.MeshStandardMaterial( { color: 0x00ff00  , metalness: 0.7  } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

const canvas = document.querySelector("#canvas");
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
})
// const pointLight = new THREE.PointLight();
// pointLight.position.set(5, 5, 5);
//
// scene.add(pointLight);
// pointLight.intensity = 100;

const ambientLight = new THREE.DirectionalLight( 0xffffff, 2 );
ambientLight.position.set(1, 1, 1);
scene.add( ambientLight );

const helperLight = new THREE.DirectionalLightHelper( ambientLight );
scene.add( helperLight );

const gui = new GUI();
const cubeFolder = gui.addFolder('Cube');
cubeFolder.add(cube.rotation, 'x', 0, Math.PI * 2);
cubeFolder.add(cube.rotation, 'y', 0, Math.PI * 2);
cubeFolder.add(cube.rotation, 'z', 0, Math.PI * 2);
cubeFolder.open();

const lightFolder = gui.addFolder('Light');
// lightFolder.add(pointLi.position, 'x', -10, 10);
// lightFolder.add(pointLight.position, 'y', -10, 10);
// lightFolder.add(pointLight.position, 'z', -10, 10);
// lightFolder.add(pointLight, 'intensity', 0, 100);
lightFolder.open();
const controls = new OrbitControls( camera, renderer.domElement );
controls.enableDamping = true
controls.autoRotate = true


function animate() {
    window.requestAnimationFrame( animate );
    controls.update();
    renderer.render( scene, camera );


}
animate()