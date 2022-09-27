
<script>
	import * as THREE from "three";
	import * as SC from "svelte-cubed";
	import { tweened } from "svelte/motion";
	import { elasticOut } from "svelte/easing";
	
	import ReusableGLTF from "./ReusableGLTF.svelte";
	import Loading from "./Loading.svelte";
	import { statusOfModels, modelURL, modelsLoading, updateModelStatus } from "./stores";
	
	function handleStatusChange(evt) {
		updateModelStatus(evt.detail.name, evt.detail.status);
	}

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
>


    <!-- SUELO -->

	<SC.Group position={[0,-height/2,0]}>
    
		<SC.Mesh
		geometry={new THREE.PlaneGeometry(100,100)}
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
    position={[100, 50, 0]}
    near={0.1}
    far={200}
    fov={20}
  />

  <SC.OrbitControls 
    enabled={true}
    enableZoom={true}
	maxPolarAngle={Math.PI * 0.51}
    autoRotate={true}
    autoRotateSpeed={1}
  />

  <SC.DirectionalLight
    color={new THREE.Color('white')}
    position={[5,10,0]}
    intensity={1}
    shadow={false}
  />
  <SC.AmbientLight
    color={new THREE.Color('white')}
    intensity={0.9}
  />
	
	<!-- Don't need this once we have a reusable component! -->
<!-- 		<LittleCity /> -->
	
	<ReusableGLTF 
		modelURL={modelURL['littleCity']} 
		name="littleCity" 
		rotation={[0, Math.PI * -1.45, 0]} 
		position={[0, 0.1, -6]} 
		scale={[1,1,1]} 
		on:statusChange={handleStatusChange} 
	/>

	<ReusableGLTF 
		modelURL={modelURL['agencia']} 
		name="agencia" 
		rotation={[0, Math.PI * -1.324, 0]} 
		position={[-0.85, 0.15, -4.5]}
		on:statusChange={handleStatusChange} 
	/>

	<ReusableGLTF 
		modelURL={modelURL['sireno']} 
		name="sireno" 
		position={[-0.5, -0.36, -1]}
		rotation={[0, Math.PI * 1.45, 0]} 
		scale={[1.2,1.2,1.2]}
		on:statusChange={handleStatusChange} 
	/>
	
</SC.Canvas>
<Loading showLoading={$modelsLoading} />
