
<script>
	import * as THREE from "three";
	import * as SC from "svelte-cubed";
	import { tweened } from "svelte/motion";
	import { elasticOut } from "svelte/easing";
	
	import ReusableGLTF from "./ReusableGLTF.svelte";
	import Loading from "./Loading.svelte";
	import { statusOfModels, modelURL, modelsLoading, updateModelStatus } from "./stores";
	
	

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
	spin += 0.05;
	})
		
</script>



<SC.Canvas
antialias 
background={new THREE.Color('white')} 
>


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
    position={[70, 20, 0]}
    near={0.6}
    far={200}
    fov={20}
  />

  <SC.OrbitControls 
    enabled={true}
    enableZoom={true}
	maxPolarAngle={Math.PI * 0.47}
    autoRotate={false}
    autoRotateSpeed={0.3}
  />

  <SC.DirectionalLight
    color={new THREE.Color('white')}
    position={[5,10,0]}
    intensity={1}
    shadow={false}
  />
  <SC.AmbientLight
    color={new THREE.Color('white')}
    intensity={0.99}
  />
	
	<!-- Don't need this once we have a reusable component! -->
<!-- 		<LittleCity /> -->
	
	<ReusableGLTF 
		modelURL={modelURL['littleCity']} 
		name="littleCity" 
		rotation={[0, Math.PI * -1.45, 0]} 
		position={[0, 0.1, -6]} 
		scale={[1,1,1]} 
		
	/>

	<ReusableGLTF 
		modelURL={modelURL['logoroi']} 
		name="logoroi" 
		scale={[0.1,0.1,0.1]}
		rotation={[0,-spin,0]}
		position={[-0.85, 2.12, -5.3]}
		
	/>

	<ReusableGLTF 
		modelURL={modelURL['agencia']} 
		name="agencia" 
		rotation={[0, Math.PI * -1.324, 0]} 
		position={[-0.85, 0.15, -4.5]}
		 
	/>

	<ReusableGLTF 
		modelURL={modelURL['sireno']} 
		name="sireno" 
		position={[-0.5, -0.36, -1]}
		rotation={[0, Math.PI * 1.45, 0]} 
		scale={[1.2,1.2,1.2]}
		
	/>
	
</SC.Canvas>
<Loading showLoading={$modelsLoading} />
