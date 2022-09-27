<script>

import Premios from "../MarqueePremios.svelte";
import Comentarios from "../SQLComentarios.svelte";



</script>


<svelte:head>
	<title>Perfomance Marketing</title>
	<meta name="description" content="Sobre nuestro ssericios y capacidades" />
</svelte:head>

<div class="ancho_maximo bg-white flex-wrap pt-14 relative bg-no-repeat bg-contain bg-left-bottom"  >

	<div class="content_normal flex flex-wrap justify-between items-stretch w-full bg-contain bg-bottom bg-no-repeat mx-auto">
		
		<div class="w-full md:w-1/2 relative relative" >
		
			<div >
			<img class="flex scale-100 md:scale-150 relative md:absolute ml-4 md:-ml-10" src="/img/perfomance_marketing/campoFutbol.png" alt="Stadio RoiScroll">
			</div>


		
		</div>
		
		<div class="w-full md:w-1/2 relative mb-10 md:mb-10 pt-8 md:pl-0  pl-4 text-left md:text-right">
			<h1 id="titular_1" class="leading-10">Perfomance <br> <span class="trazado text-primary">Marketing</span></h1>

			<p class="my-4 pr-0">

				El Performance Marketing, también conocido como Marketing de Resultados, es un componente clave dentro de las estrategias de marketing digital. La inversión en esta modalidad se hace en función de los objetivos alcanzados o acciones concretas, por ejemplo la venta de un producto/servicio o la adquisición de un cliente potencial.
				<br><br>
				Si todavía sigues realizando campañas publicitarias basadas en intuición e ideas preconcebidas, tienes una gran oportunidad de mejora incluyendo el Performance Marketing dentro de tu estrategia de marketing digital.
			</p>






			<!--<button class="btn rounded-full text-white btn-primary">Contactar</button>-->
		</div>
	
	</div>
	
	<div class="flex bg-black">
		<div class="content_normal flex flex-wrap justify-between items-stretch w-full bg-contain bg-bottom bg-no-repeat mx-auto">
			<div class="w-full md:w-1/2 relative " >
			<p class="text-white py-28 px-4  text-center md:text-left">
				Nuestro equipo especialista cuenta con una amplia experiencia en la gestión de campañas basadas en datos para optimizar al máximo tus resultados. Además, contamos con información de primera mano acerca de las mejores prácticas gracias a la formación continua de los principales players digitales del mercado (Google, Meta, Hubspot, Tik Tok…).
			</p>

			</div>
			
			<div class="py-4 md:w-1/2 relative flex mx-auto relative" >
			<img class="mx-auto p-4" src="/img/perfomance_marketing/4.png" alt="GloboRoi">
			</div>
		</div>
	
	</div>

</div>

<div class="ancho_normal flex flex-wrap p-4 w-full mx-auto py-10">

	<div class="w-full md:w-1/2 relative mb-4 flex justify-center relative p-0 md:pl-10">
		<img class="object-contain" src="/img/perfomance_marketing/1.webp" alt="Imagen de relleno">
	</div>
	<div class="w-full md:w-1/2 relative mb-4">
		<h2 class="leading-10 mb-10">
			Tu aliado en la jungla del perfomance marketing
		</h2>

		<p class="mb-6"> Hoy, con más de 4.000MM€ invertidos el pasado año en España y creciendo a doble dígito, la publicidad digital es la estrella de las estrategias de marketing. El reto está en conseguir, a través de la aplicación del Performance Marketing, el mayor retorno de esta inversión.</p>

		<p class="mb-6"> En un entorno de súper digitalización y de innovación constante, para las marcas no es suficiente con ser relevante, hay que ser el primero. La exigencia es alta y para ello sabemos que creatividad, estrategia y medios deben estar perfectamente integrados para conseguir que el mensaje de la marca llegue, convenza y además convierta.</p>

		<p class="mb-6">La tecnología forma parte de nuestra estrategia, nos permite trabajar las diferentes fases del embudo de conversión desde la perspectiva de Performance Marketing. Y desde luego, no damos nunca nada por sentado, ponemos a prueba las diferentes hipótesis para dar con la tecla que haga de cada campaña un verdadero éxito. </p>



	</div>

	



</div>

<!--Componente premios-->
<!--<Premios />-->
<!--Fin componente premios-->

<div class="ancho_normal flex flex-wrap p-4 w-full mx-auto py-10">



	<div class="w-full md:w-1/2 relative mb-4">
		<h2 class="leading-10 mb-10">
			Pero... cuál es el éxito de una campaña de publicidad online?
		</h2>
		<p class="mb-6"> ¿Generar tráfico, obtener un CPM reducido, captar leads con CPL por debajo de la media del sector, incrementar las ventas en campaña, captar seguidores…? </p>

		<p class="mb-6"> Son muchos los objetivos que se pueden perseguir en una estrategia de publicidad digital, pero igual de importante es no dejar pasar la oportunidad que nos ofrece este tipo de publicidad para establecer una relación duradera con los usuarios.  </p>

		<p class="mb-6"> Estos pueden ser partícipes de la campaña, compartir sus intereses relacionarse con la marca a través de anuncios interactivos, multisoporte e involucrarse con una historia que hacen suya.  </p>

		<p class="mb-6"> Somos partners de los principales players del mercado (Google, Meta, Hubspot, TikTok…) y, junto con la experiencia de nuestro equipo, lograremos el mejor rendimiento de tus acciones a través de una optimización diaria de las plataformas y una actualización constante de las mejores prácticas y alternativas de formato.  </p>
		<!--<button class="btn rounded-full text-white btn-primary">Acceso al programa de subvenciones</button>-->
	</div>

	<div class="w-full md:w-1/2 relative mb-4 flex justify-center relative p-0 md:pr-10">
		<img class="object-contain" src="/img/perfomance_marketing/2.webp" alt="Imagen de relleno">
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