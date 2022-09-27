<script>

import Premios from "../MarqueePremios.svelte";
import Comentarios from "../SQLComentarios.svelte";



</script>


<svelte:head>
	<title>Data Driven Marketing</title>
	<meta name="description" content="Sobre nuestro ssericios y capacidades" />
</svelte:head>

<div class="ancho_maximo bg-white flex-wrap pt-14 relative bg-no-repeat bg-contain bg-left-bottom"  >

	<div class="content_normal flex flex-wrap justify-between items-stretch w-full bg-contain bg-bottom bg-no-repeat mx-auto">
		
		<div class="w-full md:w-1/2 relative relative" >
		
			<div>
			<img class="flex relative scale-100 md:scale-125 md:absolute -mt-10" src="/img/data_driven/arbol.png" alt="Arbol RoiScroll">
			</div>


		
		</div>
		
		<div class="w-full md:w-1/2 relative mb-10 md:mb-40 pt-8 md:pl-0 pl-4">
			<h1 id="titular_1" class="leading-10">Data Driven <br> <span class="trazado text-primary">Marketing</span></h1>
		
			<p class="my-4 pr-8">
				El Data Driven Marketing, también conocido como marketing basado en datos, se ha convertido en un factor fundamental en toda estrategia de negocio. Incluye el análisis y comprensión de los datos obtenidos de interacciones con clientes y público objetivo, con el fin de utilizarlos en acciones de marketing, optimizar la inversión y obtener mejores resultados.
			</p>

			<p class="my-4 pr-8">
				Los datos son uno de los activos más valiosos en nuestra sociedad y nos ayudan a entender cómo pensamos las personas, cómo nos sentimos y a descifrar por qué hacemos lo que hacemos.
			</p>

		</div>
	
	</div>
	
	<div class="flex bg-black">
		<div class="content_normal flex flex-wrap justify-between items-stretch w-full bg-contain bg-bottom bg-no-repeat mx-auto">
			<div class="w-full md:w-1/2 relative " >
			<p class="text-white pt-24 px-4  text-center md:text-left">
				Habrás oído decir que los datos son el "nuevo petróleo", en otras palabras, son parte fundamental para la toma de decisiones en el mundo de los negocios. Aunque la intuición suele ser un buen ingrediente, si la acompañas con la orientación de los datos, la receta es infalible. Entre los componentes que desarrollamos en todas nuestras estrategias de Data Driven Marketing tenemos:</p>

			</div>
			
			<div class="py-4 md:w-1/2 relative flex mx-auto relative" >
			<img class="mx-auto p-4" src="/img/data_driven/malla.png" alt="GloboRoi">
			</div>
		</div>
	
	</div>

</div>

<div class="ancho_normal flex flex-wrap p-4 w-full mx-auto py-10">


	<div class="w-full md:w-1/2 relative mb-4 flex justify-center relative p-0 md:pl-10">
		<img class="object-contain" src="/img/data_driven/1.webp" alt="Imagen_Ordenador">
	</div>
	<div class="w-full md:w-1/2 relative mb-4">
		<h2 class="leading-10 mb-4">
			Auditoría de Datos
		</h2>
		<p class="mb-4"> Necesaria para conocer la ubicación, condición y el valor de los datos de una empresa. Con una auditoría de datos creamos conciencia sobre la importancia de los procesos de recopilación de los mismos. Aquí ponemos el foco en los recursos que aportan ahorro y eficiencia, y en la gestión de los riesgos asociados a la pérdida de datos.

		</p>
		<h2 class="leading-10 mt-10 mb-4">
			Explotación de Datos
		</h2>
		<p class="mb-6">Miles de millones de datos se extraen y se almacenan en las bases de datos de las empresas cada día y, en la mayoría de los casos, sin una estrategia de Data Driven Marketing definida que los aproveche. Seguro que nos habrás oído decir alguna vez, nunca con tanta información se hizo tan poco… Así que toca ponerse manos a la obra y definir una estrategia de explotación de datos con la que identificar patrones, tendencias y oportunidades de mejora para tu negocio.  </p>



	</div>




</div>

<!--Componente premios-->
<!--<Premios />-->
<!--Fin componente premios-->

<div class="ancho_normal flex flex-wrap p-4 w-full mx-auto py-10">

	


	<div class="w-full md:w-1/2 relative mb-4">
		<h2 class="leading-10 mb-4">
			Marketing Analytics
		</h2>
		<p class="mb-6"> El eje principal en cualquier estrategia de Data Driven Marketing, implica el comportamiento de compra, patrones de conducta, intereses, características demográficas... Profundizar en todo este conocimiento almacenado facilita la toma de decisiones para conseguir el máximo rendimiento de las acciones comerciales y de marketing. </p>
		<h2 class="leading-10 mt-10 mb-4">
			BI & Data Visualization
		</h2>
		<p class="mb-6">Una forma de aprovechar al máximo los datos y contrarrestar lo complejo que resulta manejar grandes volúmenes de información, es la implementación de procesos de Business Intelligence. <br><br>
			El objetivo es extraer la esencia de los datos y facilitar la toma de decisiones en la organización.<br><br>
			Ahora bien, el éxito está en definir una adecuada combinación de herramientas ETL (Extract - Transform - Load), Data Mining y Data Visualization que permiten analizar y visualizar grandes volúmenes de información en forma rápida, flexible e intuitiva.
		</p>


	</div>

	<div class="w-full md:w-1/2 relative mb-4 flex justify-center relative p-0 md:pr-10">
		<img class="object-contain" src="/img/data_driven/2.webp" alt="Imagen_estatistica">
	</div>

</div>

<div class="ancho_normal flex flex-wrap p-4 w-full mx-auto py-10">

	<div class="w-full md:w-1/2 relative mb-4 flex justify-center relative p-0 md:pr-10">
		<img class="object-contain" src="/img/data_driven/3.webp" alt="Imagen_Mailing">
	</div>


	<div class="w-full md:w-1/2 relative mb-4">

		<h2 class="leading-10 mb-4">
			Conversion Rate Optimization
		</h2>
		<p class="mb-6"> Tienes un buen posicionamiento en tu site o ecommerce, apareces en las búsquedas, manejas buenos volúmenes de tráfico pero… conversion is not there. <br> <br>
			Con el CRO analizamos la experiencia global de usuario en tu site y cómo esta afecta a los procesos de decisión para mejorar los ratios de conversión y conseguir el objetivo marcado.
		</p>


	</div>



</div>


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