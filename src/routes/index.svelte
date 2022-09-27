<script>


	export const prerender = true;
	let listaJavier = [
		{nombre: "Javier", edad: "21"},
		{nombre: "Espacio MiniMetaverso", edad: "41"},
		

	]

	import Meta from "./Meta/index.svelte";
</script>


<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="ancho_maximo h-full back-metaverso w-full m-0 p-0">

	<Meta/>

<!-- <span class="text-xs">(Imagen provisional)</span>
<div class="imagen_provisional" style="background-image:url('./img/3D_ROISCROLL.png'); background-size:cover;"></div> -->
</section>

<style>
	.imagen_provisional {
		height: 50rem;
	}
	.ancho_maximo {
		max-width: 100%;
	}
</style>


