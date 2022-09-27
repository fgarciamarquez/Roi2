<script>
	import * as SC from "svelte-cubed";
	import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
	import { onMount } from "svelte";
	import { modelURL } from "./stores";

	let model = null;
	
	function loadGLTF() {
		const loader = new GLTFLoader();
		return loader.loadAsync(modelURL['littleCity']);
	}

	onMount(() => {
		loadGLTF().then(_model => model = _model);
	})

</script>

{#if model}
	<SC.Primitive
		object={model.scene}
		scale={[.05,.05,.05]}
	/>
{/if}




