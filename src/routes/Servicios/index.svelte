<script>
	import Saos from 'saos';

	import MarqueeLogos from '../MarqueeLogos.svelte';
	import ListaServicios from './ListaServicios.svelte';
</script>

<svelte:head>
	<title>Servicios</title>
	<meta name="description" content="Sobre nuestro servicios y capacidades" />
</svelte:head>

<div
	id="portada_animada"
	class="static ancho_maximo flex-wrap box-border overflow-hidden pt-28 justify-center text-center relative bg-center bg-cover"
	style="background-image:url('img/bg.png')"
>
	<Saos animation={'from-left 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
		<h2 id="titular_1">Somos tu partner <span class="text-primary">digital.</span></h2>
	</Saos>
	<Saos animation={'from-left 1.2s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
		<h2 id="titular_2">Somos <span class="text-primary">Roi Scroll.</span></h2>
	</Saos>

	<Saos animation={'slide-in-elliptic-top-fwd 2s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
		<div class="sobreatmosfera absolute bottom-0 z-0 w-full mx-auto flex justify-center">
			<img src="img/ondasCirculo.png" alt="Efecto Atmosfera" />
		</div>
	</Saos>

	<Saos animation={'from-bottom 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'}>
		<div class="absolute bottom-0 w-full flex justify-center">
			<img src="img/chico_servicios.webp" alt="Hero RoiScroll" />
		</div>
	</Saos>
</div>

<MarqueeLogos />

<div
	class="ancho_normal bg-primary flex flex-col flex-wrap p-4 w-full mx-auto py-10 -mt-10 text-center justify-center"
>
	<h2 class="text-white text-center">Vamos a trabajar juntos y hacer tu imaginación realidad</h2>
	<p>
		<button
			class="btn btn-wide rounded-full bg-success font-normal disabled: hover:bg-white text-black hover:text-primary transition ease-in-out duration-500 transform hover:scale-105 "
			>Contactar</button
		>
	</p>
</div>

<div class="ancho_normal flex flex-col flex-wrap p-4 w-full mx-auto py-10 -mt-10 justify-center">
	<ListaServicios />
</div>

<div class="ancho_maximo  flex-wrap bg-black box-border overflow-hidden py-14 ">
	<div class="content_normal flex flex-wrap justify-between items-stretch w-full p-4 mx-auto">
		<div class="w-full md:w-1/2 relative mb-4">
			<h2 class="text-white leading-8 ">
				Somos tu <br /> <span class="text-success">digital</span> partner
			</h2>
			<p class="text-white">
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
				been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
				galley of type and scrambled it to make a type specimen book.
			</p>
		</div>

		<div class="w-full md:w-1/2 relative">
			<div><img src="img/GloboAnimado.gif" alt="Animacion GloboJ" /></div>
		</div>
	</div>
</div>

<style>
	.ancho_normal,
	.content_normal {
		max-width: var(--column-width);
	}
	.ancho_maximo {
		max-width: 100%;
	}
	#portada_animada {
		height: 40rem;
	}
	p {
		margin-top: 1.5rem;
	}

	.dos_columnas {
		display: flex;
		justify-content: start;
		vertical-align: top;
	}
	.dos_columnas > div {
		width: 50%;
		padding: 10px;
	}

	.dos_columnas > div:first-child {
		padding-left: 40px;
	}

	.titulo_servicio {
		line-height: 1.9rem;
	}
</style>
