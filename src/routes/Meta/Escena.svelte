<script>
	import * as THREE from "three";
	import * as SC from "svelte-cubed";
	import { tweened } from "svelte/motion";
	import { elasticOut } from "svelte/easing";
  
  

 
  let width = 1;
  let height = 1;
  let depth = 1;
	
	let scale = tweened(1, {duration: 1000, easing: elasticOut});

  let scaleType = "LARGE";

	$: if (scaleType === "SMALL"){
		$scale = .25;
	} else if (scaleType === "MEDIUM"){
		$scale = .35;
	} else if (scaleType === "LARGE") {
		$scale = 1;
	}
  
  let spin = 0;

  SC.onFrame(() => {
    spin += 0.01;
  })



</script>

<SC.Canvas 
antialias 
background={new THREE.Color('white')} 
fog={new THREE.FogExp2('white',0.02)}
shadows 
>
	 
<!-- OBJETO -->

   <SC.Mesh
    geometry={new THREE.BoxGeometry()}
    material={new THREE.MeshStandardMaterial({color: new THREE.Color('lightblue')})}
    scale={[$scale, $scale, $scale]}
    rotation={[0,-spin,0]}
    castShadow
   />


   <!-- SUELO -->

  <SC.Group position={[0,-height/2,0]}>
    
    <SC.Mesh
    geometry={new THREE.PlaneGeometry(50,50)}
    material={new THREE.MeshStandardMaterial({color:'white'})}
    rotation={[Math.PI / 2,0,0]}
    receiveShadow
    />

    <!-- Regilla de horizonte -->
    
    <SC.Primitive
      object={new THREE.GridHelper(50,50, 0XF1F1F1, 0XF2F2F2)}
      position={[0,0.001,0]}
    />
    

  </SC.Group>


  <SC.PerspectiveCamera 
    position={[1, 1, 3]} 
    near={0.1}
    far={500}
    fov={50}
  />
  <SC.OrbitControls 
  enableZoom={true} 
  maxPolarAngle={Math.PI * 0.51}
  autoRotate={false}
  autoRotateSpeed={2}

  />

  <SC.DirectionalLight 
  color={new THREE.Color(0xffffff)}
  position={[-2, 3, 2]} 
  intensity={0.5} 
  shadow={{ mapSize: [2048, 2048] }} 
  />

  <SC.AmbientLight 
  color={new THREE.Color(0xffffff)}
  intensity={0.5} 
  /> 
  
</SC.Canvas>

<div class="controls">
  BASE ESCÉNICA: 
	<label>
	SMALL
		<input type="radio" bind:group={scaleType} value="SMALL" />
	</label>
	<label>
	MEDIUM
		<input type="radio" bind:group={scaleType} value="MEDIUM" />
	</label>
	<label>
	BIGER
		<input type="radio" bind:group={scaleType} value="LARGE" />
	</label>
</div>

<style>
	.controls {
		position: absolute;
        border-radius: 10rem;
        border: 1px solid gray;
        width: auto;
        padding: 0.5rem 2rem;
		bottom: 2rem;
		right: .5rem;
		background: transparent;
	
		color: grey;
	}
</style>