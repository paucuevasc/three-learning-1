var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000);

var prevCubeC =0;
var cubeC;
var firstCoords=[null,null,null];

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener('resize',function(){
	var width=window.innerWidth;
	var height=window.innerHeight;
	renderer.setSize(width,height);
	camera.aspect=width/height;
	camera.updateProjectionMatrix();
})

function cubeModificator(){
	//Create the shape
	
cube.scale.x=cubeC;
cube.scale.y=cubeC;
cube.scale.z=cubeC;

}

function lineDrawer(){
	console.log("ok");
	var coords=document.querySelector("#option2").value.split(',');
	if (firstCoords!=coords){
	var material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
	var geometry = new THREE.Geometry();
	geometry.vertices.push(new THREE.Vector3( firstCoords[0], firstCoords[1], firstCoords[2] ));
	geometry.vertices.push(new THREE.Vector3( coords[0],coords[1], coords[2]) );
	var line = new THREE.Line( geometry, material );
	scene.add(line);
	}
	firstCoords=coords;
}
controls=new THREE.OrbitControls(camera,renderer.domElement);
//Create the shape
var geometry=new THREE.BoxGeometry(cubeC,cubeC,cubeC);

//Create a material, colour or image texture
var material = new THREE.MeshBasicMaterial({color:0xFFFFFF,wireframe:false});
var cube=new THREE.Mesh(geometry, material);
scene.add(cube);


camera.position.z=10;

var update = function(){
	cubeC=document.querySelector("#option1").value;
	
	if ((isNaN(cubeC)==false)&&(cubeC!=prevCubeC)){
	cubeModificator();
	prevCubeC=cubeC;
	}
cube.rotation.x +=0.01;
cube.rotation.y +=0.01;
	

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