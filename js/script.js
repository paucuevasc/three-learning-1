var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000);
var renderer = new THREE.WebGLRenderer();
var prevCubeC =0;
var cubeC;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


function cubeModificator(){
	//Create the shape
	
cube.scale.x=cubeC;
cube.scale.y=cubeC;
cube.scale.z=cubeC;

}
//Create the shape
var geometry=new THREE.BoxGeometry(cubeC,cubeC,cubeC);

//Create a material, colour or image texture
var material = new THREE.MeshBasicMaterial({color:0xFFFFFF,wireframe:false});
var cube=new THREE.Mesh(geometry, material);
scene.add(cube);

var material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
var geometry = new THREE.Geometry();
geometry.vertices.push(new THREE.Vector3( -1, 0, 0) );
geometry.vertices.push(new THREE.Vector3( 0, 1, 0) );
geometry.vertices.push(new THREE.Vector3( 1, 0, 0) );
geometry.vertices.push(new THREE.Vector3( 1, 1, 0) );
var line = new THREE.Line( geometry, material );
scene.add(line);
camera.position.z=10;

var update = function(){
	cubeC=document.querySelector("#option1").value;
	
	if ((isNaN(cubeC)==false)&&(cubeC!=prevCubeC)){
	cubeModificator();
	prevCubeC=cubeC;
	}
cube.rotation.x +=0.01;
cube.rotation.y +=0.01;
line.rotation.z +=0.03;
};

var render = function(){
renderer.render(scene,camera);
};


var GameLoop=function(){
requestAnimationFrame(GameLoop);
update();
render();
};

GameLoop();