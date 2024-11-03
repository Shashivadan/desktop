

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

camera.position.z = 5;
scene.add(camera)

const box = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: "red"});
const mesh = new THREE.Mesh(box, material);

scene.add(mesh);

const canvas = document.querySelector("#canvas");
const renderer = new THREE.WebGLRenderer({canvas , antialiasing: true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);


const clock = new THREE.Clock();
function  animete() {
    window.requestAnimationFrame(animete);
    renderer.render(scene, camera);
    mesh.rotation.y = clock.getElapsedTime() * 2
}
animete()