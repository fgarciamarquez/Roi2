<script>
	import Saos from 'saos';
	import ListaTeam from './SQLTeam.svelte';
</script>

<svelte:head>
	<title>Roi Scroll</title>
	<meta name="description" content="Sobre nosotros. Somos RoiScroll" />
</svelte:head>


<div
	id="portada_animada"
	class="static ancho_maximo flex-wrap box-border overflow-hidden pt-28 justify-center text-center relative bg-center bg-cover"
	style="background-image:url('img/bg.png')"
>
<Saos animation={'slide-in-elliptic-top-fwd 2s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
	<div class="sobreatmosfera absolute bottom-0 z-0 w-full mx-auto flex justify-center">
		<img src="img/ondasCirculo.png" alt="Efecto Atmosfera" />
	</div>
</Saos>


	<Saos animation={'from-bottom 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'}>
		<div class="absolute -bottom-28 w-full flex justify-center">
			<img class="edificio_roiScroll" src="/img/SuperLogo_RoiScroll.webp" alt="Hero RoiScroll" />
		</div>
	</Saos>
	

	<Saos animation={'from-left 1.2s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
		<h2 id="titular_2">Somos <span class="text-primary">Roi Scroll.</span></h2>
	</Saos>
		<Saos animation={'from-left 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
			<h2 id="titular_1">Tu partner en <span class="text-primary">marketing digital.</span></h2>
		</Saos>
		
</div>

<div class="ancho_maximo flex-wrap bg-black box-border overflow-hidden py-14 ">
	<div class="content_normal flex flex-wrap justify-between items-stretch w-full p-4 mx-auto">
		<div class="w-full md:w-1/2 py-12">
			<h2 class="text-white">Con sede en Galicia <br> <span class="text-primary">y, sobre todo,<br> apasionados de<br> nuestro trabajo.</span></h2>
			<p class="text-white">
				Muchas veces, nos preguntamos si nuestra empresa contribuye a hacer del mundo un lugar
				mejor. Ambicioso y contundente, ¿verdad? <br />
				Seguro que te has encontrado más de alguna vez haciéndote esta misma pregunta.
			</p>
			<ul>
				<li />
			</ul>

			<p class="text-white">Podríamos decir que…</p>

			<p class="text-white">
				<strong>
					Queremos aportar valor. <br />
					Queremos ayudar a las personas de nuestro entorno.<br />
					Queremos generar empleo en nuestra comunidad.<br />
					Queremos rodearnos de socios con nuestros valores.<br />
					Queremos que la honestidad y profesionalidad sean nuestras señas de identidad.
				</strong>
			</p>
		</div>
		<div class="text-white w-full md:w-1/2">
			<div class="flex relative">
				<img class="mask z-0 hover:z-20 mask-hexagon" src="/img/AgenciaRoi1.webp" />

				<img class="absolute z-10 top-0 left-0 invisible md:visible mask mask-hexagon" src="/img/AgenciaRoi2.webp" />
			</div>
		</div>
	</div>
</div>

<div class="ancho_normal flex flex-wrap p-4 w-full mx-auto py-10">
	<div class="w-full md:w-1/2 relative mb-4 flex justify-center relative p-0 md:pl-10">
		<img src="/img/globoTierra.webp" alt="Img GloboTierra" />
	</div>
	<div class="w-full md:w-1/2 relative mb-4 relative ">
		<h2>¿Cúal es entonces <span class="text-primary">nuestro papel?</span></h2>

		<p>
			Promover un marketing, una <strong>comunicación y una publicidad digital con valores</strong>,
			donde nuestros clientes se relacionen con su target de forma honesta, transparente y generen
			valor para la sociedad.
		</p>
		<p>
			Acompañar a las empresas en su camino de transformación digital, para mejorar procesos,
			encontrar nuevos ámbitos para desarrollar el negocio digital, para ser más eficientes y <strong
				>no perder las ventajas competitivas actuales.</strong
			>
		</p>
		<p>
			Ayudar a nuestros clientes a <strong>
				vender mejor sus productos de forma más eficiente y sostenible,</strong
			> para que alcancen sus objetivos y puedan contribuir a mejorar la comunidad en la que desarrollan
			su actividad.
		</p>
		<p>
			Emplear la <strong>tecnología de manera creativa e innovadora,</strong> haciéndola accesible y
			enfocando su uso para el bien común y el desarrollo de las personas.
		</p>
	</div>
</div>

<div class="ancho_maximo flex flex-wrap my-10">
	<div class="content_normal mx-auto w-full p-4">
		<h2>Algunas cosas que quizás no sabes <span class="text-primary">sobre nosotros</span></h2>
	</div>

	<div class="bg-secondary ancho_maximo w-full h-2" />

	<div class="content_normal flex w-full mx-auto p-4 pt-0">
		<div class="flex-1 pl-12 relative flex flex-wrap flex-col mt-12">
			<div class="flex absolute -top-14 h-14 left-20 w-1 bg-secondary">&nbsp;</div>
			<div class="flex w-full"><h2 class="text-secondary">2017</h2></div>
			<div class="text-sm">
				Entramos en el ranking de las <strong> 100 mejores agencias de publicidad de España</strong>
				y conseguimos el <strong> anuncio más visto en YouTube España en Navidad.</strong>
			</div>
		</div>

		<div class="flex-1 pl-12 relative flex flex-wrap flex-col mt-12">
			<div class="flex absolute -top-14 h-14 left-20 w-1 bg-secondary">&nbsp;</div>
			<div class="flex w-full"><h2 class="text-secondary">2019</h2></div>
			<div class="text-sm">
				Fuimos reconocida entre las <strong
					>800 empresas jóvenes que más crecen de toda España.</strong
				>
			</div>
		</div>

		<div class="flex-1 pl-12 relative flex flex-wrap flex-col mt-12">
			<div class="flex absolute -top-14 h-14 left-20 w-1 bg-secondary">&nbsp;</div>
			<div class="flex w-full"><h2 class="text-secondary">2021</h2></div>
			<div class="text-sm">
				Repetimos como empresa de <strong>Alto Rendimiento de Galicia,</strong> según los indicadores
				de Ardán del Consorcio de la Zona Franca de Vigo.
			</div>
		</div>
	</div>

	<div class="content_normal flex w-full mx-auto p-4">
		<p>
			Y todo esto siendo fieles a nuestros valores y ofreciendo un servicio al cliente basado en la
			excelencia y la integridad, siendo relevantes en los procesos de negocio y estableciendo
			relaciones duraderas.
		</p>
	</div>
</div>
<div class="ancho_maximo bg-secondary">
	<div class="content_normal flex flex-wrap w-full p-4 mx-auto py-10">
		<div class="w-full md:w-3/4 relative mb-4">
			<h2 class="text-white">SI, SOMOS</h2>
			<ul>
				<li class="text-primary">
					<span class="text-white font-bold">Somos</span> motor de cambio e impulsor de la digitalización
					en marketing y ventas.
				</li>
				<li class="text-primary">
					<span class="text-white font-bold">Somos</span> los guardianes de tu marca en el entorno digital.
				</li>
				<li class="text-primary">
					<span class="text-white font-bold">Somos</span> la agencia de marketing digital de las marcas
					con pasión y emoción.
				</li>
				<li class="text-primary">
					<span class="text-white font-bold">Somos</span> independientes y libres para proponer y pensar
				</li>
				<li class="text-primary">
					<span class="text-white font-bold">Somos</span> empáticos, escuchamos tus necesidades.
				</li>
				<li class="text-primary">
					<span class="text-white font-bold">Somos</span> pequeños haciendo cosas grandes.
				</li>
				<li class="text-primary">
					<span class="text-white font-bold">Somos</span> pura adrenalina, somos atrevidos, somos digitales.
				</li>
			</ul>
		</div>
		<div class="w-full md:w-1/4 relative mb-4 relative p-0 md:pl-10">
			<img class="object-contain" src="/img/raton_transp.png" alt="raton fondo transparente" />
		</div>
	</div>
</div>

<div class="ancho_normal flex flex-wrap mx-auto p-4 my-20">
	<div class="w-full md:w-1/2 ">
		<img src="/img/coqueManos.webp" alt="Img ChoqueManos" />
	</div>

	<div class="w-full md:w-1/2 relative mb-4 p-0 md:pl-10">
		<h2>
			<span class="text-primary">Nos apasiona nuestro trabajo</span>, y eso, nuestros clientes lo
			notan.
		</h2>

		<p>
			Nuestro eje de decisión en cada una de las fases de un proyecto es la data, nunca las
			opiniones subjetivas o los deseos irracionales.
		</p>
		<p>
			Y si los números son los grandes argumentos, no nos olvidamos de que la experiencia es lo que
			hace toda historia convincente. Por ello, entendemos que las personas son el verdadero activo
			detrás del mundo digital, la tecnología y las pantallas.
		</p>
		<p>
			Independencia, buen rollo e inconformismo son nuestras señas de identidad. Nos gustan las
			marcas con valores auténticos, la publicidad inspiradora e inteligente. Huimos del spam, el
			clickbait, la burocracia y los anuncios intrusivos.
		</p>
		<p>Sabemos de lo que hablamos y hacemos lo que sabemos.</p>

		<p class="font-bold">Ven a ponernos a prueba!</p>
	</div>
</div>
<div class="ancho_normal grow-0 flex flex-col flex-wrap p-4 mx-auto mb-20 w-full">
	<h2>Somos <span class="text-primary">Roi Scroll,</span> conoce la agencia.</h2>

	<div class="galeriaEquipo flex flex-wrap justify-start gap-0 mt-7">
		<ListaTeam />
	</div>
</div>

<style>
	.ancho_normal,
	.content_normal {
		max-width: var(--column-width);
	}
	.edificio_roiScroll{
		height:35rem;
	}
	.ancho_maximo {
		max-width: 100%;
	}
	p {
		margin-top: 1.5rem;
	}
	#portada_animada {
		height: 40rem;
	}
</style>
