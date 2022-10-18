<script>


	export const prerender = true;
	let listaJavier = [
		{nombre: "Javier", edad: "21"},
		{nombre: "Espacio MiniMetaverso", edad: "41"},
		

	]

	import Meta from "./Meta/index.svelte";
</script>

<style>
	
	.ancho_maximo {
		max-width: 100%;
	}
</style>


<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="ancho_maximo h-full back-metaverso content-center mx-auto w-11/12 m-0 p-0">

	<Meta/>

<!-- <span class="text-xs">(Imagen provisional)</span>
<div class="imagen_provisional" style="background-image:url('./img/3D_ROISCROLL.png'); background-size:cover;"></div> -->
</section>




