<script>

import MarqueePremios from "../MarqueePremios.svelte";
import Comentarios from "../SQLComentarios.svelte";

</script>


<svelte:head>
	<title>Estrategia de Negocio</title>
	<meta name="description" content="Sobre nuestro sericios y capacidades" />
</svelte:head>

<div class="ancho_maximo bg-white flex-wrap pt-14 relative bg-no-repeat bg-contain bg-left-bottom"  >

	<div class="content_normal flex flex-wrap justify-between items-stretch w-full bg-contain bg-bottom bg-no-repeat mx-auto">
		
		<div class="w-full md:w-1/2 relative" >
		
			<div class="-mt-20">
			<img class="flex relative md:absolute" src="/img/estrategia_negocio/sireno.png" alt="Sireno-Vigo RoiScroll">
			</div>


		
		</div>
		
		<div class="w-full md:w-1/2 relative mb-10 md:mb-28 pt-8  md:pl-0 pl-4">
			<h1 id="titular_1" class="leading-10">Estrategia de  <br> <span class="trazado text-primary">Negocio</span></h1>
		
			<p class="my-4 pr-8">
			En el mundo actual las compañías deben adaptarse con agilidad a los cambios y desarrollar estrategias de negocio efectivas que provoquen un impacto real en su visión de futuro y sus resultados.
			</p>


			<!--<button class="btn rounded-full text-white btn-primary">Contactar</button>-->
		</div>
	
	</div>
	
	<div class="flex bg-black">
		<div class="content_normal flex flex-wrap justify-between items-stretch w-full bg-contain bg-bottom bg-no-repeat mx-auto">
			<div class="w-full md:w-1/2 relative " >
				<p class="text-white py-20 px-4 mb-4 text-center md:text-left">	La digitalización ha pisado el acelerador y los planes de negocio deben estar en constante revisión, actualizándose cada vez en ciclos de tiempo más cortos. Contar con los partners adecuados y de confianza para afrontar esta velocidad de cambio y adaptación seguirá siendo fundamental.
					<br><br>
					Pero no debemos olvidar que entre tecnología, plataformas, dispositivos… en el camino de la transformación digital, las personas son las verdaderas protagonistas.
                </p>

			</div>
			
			<div class="py-4 md:w-1/2 relative flex justify-center mx-auto relative" >
			<img class="mx-auto p-4" src="/img/estrategia_negocio/1.png" alt="GloboRoi">
			</div>
		</div>
	
	</div>

</div>

<div class="ancho_normal flex flex-wrap p-4 w-full mx-auto py-10">
	<div class="w-full md:w-1/2 relative mb-4 flex justify-center relative p-0 md:pl-10">
		<img class="object-contain" src="/img/estrategia_negocio/2.webp" alt="Imagen_Puzzle">
	</div>
	<div class="w-full md:w-1/2 relative mb-4">
		<h2 class="leading-10 mb-10">
La digitalización comienza en las personas
		</h2>
		<p class="mb-6"> Pensando en ellas se dan vida a nuevos modelos de negocio y se escuchan sus necesidades para sacar al mercado nuevos productos, nuevas formas de contacto, medios de pago o canales de venta y distribución que nunca antes no se habían contemplado.</p>
		<p class="mb-6">Y dentro de la empresa ganan peso los espacios de trabajo integradores, en los que se promueve la participación, se tienen en cuenta las opiniones de los empleados y se genera un entorno facilitador de la innovación. Nuevos procesos y nuevos métodos de trabajo que ayuden a las empresas a adaptarse a los rápidos giros de timón a los que obliga la transformación digital.</p>
		<p class="mb-6">Muchos de los cambios que hay que acometer suponen una inversión en tiempo y recursos, así que nosotros te ayudaremos en la toma de decisiones con el objetivo de que los pasos dados sean los correctos.</p>
	</div>

</div>



<div class="ancho_normal flex flex-wrap p-4 w-full mx-auto py-10">

	


	<div class="w-full md:w-1/2 relative mb-4">
		<h2 class="leading-10 mb-10">
			¿Te apuntas?
		</h2>
		<p class="mb-6"> Además, si lo que tu compañía necesita es financiación para su digitalización e impulsar su transformación digital, nuestro equipo te informará sobre las ayudas o subvenciones activas. Maximiza tus posibilidades. </p>
		<button class="btn rounded-full text-white btn-primary">Acceso al programa de subvenciones</button>
	</div>

	<div class="w-full md:w-1/2 relative mb-4 flex justify-center relative p-0 md:pr-10">
		<img class="object-contain" src="/img/estrategia_negocio/1.webp" alt="Imagen de relleno">
	</div>

</div>

<!--Componente premios-->
 <MarqueePremios /> 
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