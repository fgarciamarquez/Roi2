<script>

/*Componentes*/
import Premios from "../MarqueePremios.svelte";
import Comentarios from "../SQLComentarios.svelte";



</script>


<svelte:head>
	<title>Estrategia de Marca</title>
	<meta name="description" content="Sobre nuestro ssericios y capacidades" />
</svelte:head>

<div class="ancho_maximo bg-white flex-wrap pt-14 relative bg-no-repeat bg-contain bg-left-bottom"  >

	<div class="content_normal flex flex-wrap justify-between items-stretch w-full bg-contain bg-bottom bg-no-repeat mx-auto">
		
		<div class="w-full md:w-1/2 relative" >
		
			<div>
			<img class="flex scale-150 relative md:absolute" src="/img/estrategia_marca/dinosaurios.png" alt="Dinoseto RoiScroll">
			</div>


		
		</div>
		
		<div class="w-full md:w-1/2 relative mb-10 md:mb-18 pt-8 md:pl-0 pl-4">
			<h1 id="titular_1" class="leading-10">Estrategia de <br> <span class="trazado text-primary">Marca</span></h1>
		
			<p class="my-4 pr-8">
				Hoy más que nunca se necesitan y se exigen marcas sensibles e implicadas, que compartan y nos hagan sentir. Esto supone profundizar en el conocimiento de tu marca, en quién eres, dónde estás y a dónde quieres llegar. Teniendo en cuenta el mercado y el público objetivo y buscando una consonancia global entre identidad y objetivos.
			</p>



			<!--<button class="btn rounded-full text-white btn-primary">Contactar</button>-->
		</div>
	
	</div>
	
	<div class="flex bg-black">
		<div class="content_normal flex flex-wrap justify-between items-stretch w-full bg-contain bg-bottom bg-no-repeat mx-auto">
			<div class="w-full md:w-1/2 relative " >
			<p class="text-white pt-60  px-4  text-center md:text-left">Si indagamos un poco más, vemos que la RAE define creatividad como:
				 <br>
					De creativo e -idad.<br>
					1. f. Facultad de crear.<br>
					2. f. Capacidad de creación.</p>

			</div>
			
			<div class="py-4 md:w-1/2 relative flex justify-center relative mx-auto" >
			<img class="mx-auto p-4 px-20" src="/img/estrategia_marca/2.png" alt="GloboRoi">
			</div>
		</div>
	
	</div>

</div>

<div class="ancho_normal flex flex-wrap p-4 w-full mx-auto py-10">

	<div class="w-full md:w-1/2 relative mb-4 flex justify-center relative p-0 md:pl-10">
		<img class="object-contain" src="/img/estrategia_marca/2.webp" alt="Imagen_colores">
	</div>

	<div class="w-full md:w-1/2 relative mb-4">
		<h2 class="leading-10 mb-10 accent-red-600">
Titulo primer grupo de texto
		</h2>
		<p class="mb-6"> El desarrollo y la aplicación de la creatividad dentro de la estrategia de marca contribuye a construir marcas sólidas y duraderas en el tiempo. La creatividad al servicio de la identidad de marca va mucho más allá de un logotipo o un tagline, busca conectar con lo esencial para poder transmitirlo y representarlo sin ni siquiera mencionarlo. Esta capacidad de síntesis, abstracción y conceptualización es parte del proceso analítico y de reflexión que deben contemplar una estrategia de marca.</p>

	</div>


</div>



<div class="ancho_normal flex flex-wrap p-4 w-full mx-auto py-10">

	


	<div class="w-full md:w-1/2 relative mb-4">
		<h2 class="leading-10 mb-10">
			título segundo grupo de texto
		</h2>
		<p class="mb-6"> Proyectar una marca a través de un relato que defina, con claridad, su ecosistema semántico para que el público pueda conocerla, comprenderla, sentirla y conectar con ella. Y todo esto a través de cualquier plataforma, canal o campaña. Este es el reto, reconocer la marca en cada imagen, en cada frase, en cada acción.</p>

		<p class="mb-6"> Este será un valor diferencial frente a tu competencia, una estrategia de marca que alcance el reconocimiento de la misma sin perder la perspectiva e identidad global del negocio.</p>

	</div>

	<div class="w-full md:w-1/2 relative mb-4 flex justify-center relative p-0 md:pr-10">
		<img class="object-contain" src="/img/estrategia_marca/1.webp" alt="Imagen_escribiendo">
	</div>

</div>

<!--Componente premios-->
<Premios />
<!--Fin componente premios-->

<!--Componente comentarios-->
<Comentarios />
<!--fin  componente comentarios-->

<style>
	.ancho_normal,
	.content_normal {
		max-width: var(--column-width);	}
	.ancho_maximo {	
		max-width: 100%;
	}
</style>