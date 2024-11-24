// Crear la escena  
const scene = new THREE.Scene();  
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);  

// Crear un renderizador  
const renderer = new THREE.WebGLRenderer();  
renderer.setSize(window.innerWidth, window.innerHeight);  
document.body.appendChild(renderer.domElement);  

// Crear un cubo  
const geometry = new THREE.BoxGeometry();  
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });  
const cube = new THREE.Mesh(geometry, material);  
scene.add(cube);  

camera.position.z = 5;  

// Animación  
function animate() {  
    requestAnimationFrame(animate);  
    cube.rotation.x += 0.01;  
    cube.rotation.y += 0.01;  
    renderer.render(scene, camera);  
}  

animate();  

// Manejar el cambio de tamaño de la ventana  
window.addEventListener('resize', () => {  
    camera.aspect = window.innerWidth / window.innerHeight;  
    camera.updateProjectionMatrix();  
    renderer.setSize(window.innerWidth, window.innerHeight);  
});