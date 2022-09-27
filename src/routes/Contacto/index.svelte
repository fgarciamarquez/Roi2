<script>
	import Saos from 'saos';

	import MarqueeLogos from '../MarqueeLogos.svelte';


	let yes = true;

</script>
<svelte:head>
	<title>Contacto</title>
	<meta name="description" content="Pon rumbo a RoiScroll" />
</svelte:head>
<div
	id="portada_animada"
	class="static ancho_maximo flex-wrap box-border overflow-hidden pt-28 justify-center text-center relative bg-center bg-cover"
	style="background-image:url('img/bg.png')"
>
	<Saos animation={'from-left 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
		<h2 id="titular_1">Llámanos, <span class="text-primary">te estamos esperando.</span></h2>
	</Saos>
	<!-- <Saos animation={'from-left 1.2s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
		<h2 id="titular_2">La estrella <span class="text-primary">Perfecta.</span></h2>
	</Saos> -->

	<Saos animation={'slide-in-elliptic-top-fwd 2s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
		<div class="sobreatmosfera absolute bottom-0 z-0 w-full mx-auto flex justify-center">
			<img src="img/ondasCirculo.png" alt="Efecto Atmosfera" />
		</div>
	</Saos>

	<Saos animation={'from-bottom 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'}>
		<div class="absolute bottom-0 w-full flex justify-center">
			<img class="imagen_central" src="/img/Hero2.png" alt="Hero RoiScroll" />
		</div>
	</Saos>
</div>
<MarqueeLogos />
<div
	class="ancho_normal bg-primary flex flex-col flex-wrap p-4 w-full mx-auto py-10 -mt-10 text-center justify-center"
>
	<h1 class="text-white text-center">Contacto</h1>
	
</div>

<div class="ancho_normal flex flex-col flex-wrap p-4 w-full mx-auto py-10 -mt-10 justify-center">

	<div class="ancho_normal columns-2 flex flex-wrap mx-auto relative py-10 h-70 p-4 w-full">
		<div class="order-last md:order-first w-full md:w-1/2 relative mb-4">
		

			<div class="mt-4">

				<input  type="text" placeholder="Nombre" class="input input-bordered input-primary w-full my-2" />

				<input  type="text" placeholder="Empresa" class="input input-bordered input-primary w-full my-2" />
				
				<input  type="text" placeholder="Telefono" class="input input-bordered input-primary w-full my-2" />

				<input  type="text" placeholder="Email" class="input input-bordered input-primary w-full my-2" />

			</div>

			<div class="mt-4">
				<div class="flex flex-col w-full border-opacity-50">
					
					<div class="divider">¿Qué función ocupas?</div>
					
				  </div>

				<div class="flex flex-row justify-between">

					<div class="form-control">
						<label class="label cursor-pointer">
						<span class="label-text text-xs md:text-sm mr-2">Marketing</span> 
						<input type="checkbox" class="checkbox checkbox-primary" />
						</label>
					</div>
					<div class="form-control">
						<label class="label cursor-pointer">
						<span class="label-text text-xs md:text-sm mr-2">CEO</span> 
						<input type="checkbox" class="checkbox checkbox-primary" />
						</label>
					</div>
					<div class="form-control">
						<label class="label cursor-pointer">
						<span class="label-text text-xs md:text-sm mr-2">Agencia</span> 
						<input type="checkbox"  class="checkbox checkbox-primary" />
						</label>
					</div>
					<div class="form-control">
						<label class="label cursor-pointer">
						<span class="label-text text-xs md:text-sm mr-2">Consultor</span> 
						<input type="checkbox"  class="checkbox checkbox-primary" />
						</label>
					</div>
					<div class="form-control">
						<label class="label cursor-pointer">
						<span class="label-text mr-2">Otro</span> 
						<input type="checkbox"  class="checkbox checkbox-primary" />
						</label>
					</div>

				</div>

					<div class="flex flex-col w-full border-opacity-50">
					
					<div class="divider"></div>
					
				  	</div>

				  <div class="w-full">
					<div class="form-control">
					<textarea class="textarea textarea-primary w-full" placeholder="¿En qué te podemos ayudar?"></textarea>
					</div>
				  </div>

				  <div class="flex flex-col w-full border-opacity-50">
					
					<div class="divider"></div>
					
				  	</div>

					  <div class="form-control">
						<label class="label cursor-pointer justify-start">
						 
						  <input type="checkbox" bind:checked={yes} class="toggle toggle-primary" />
						  <span class="label-text text-left ml-2">Acepto la Política de Privacidad de Roi Scroll</span>
						</label>
					  </div>

					  <button class="btn btn-block btn-primary mt-6" disabled={!yes}>Enviar</button>

			</div>


			
		</div>

		<div class="flex flex-col w-full md:w-1/2 relative pl-0 md:pl-8 pt-4 ">
			<h3 class="mb-4">Dirección:</h3>
			
			<p>
				Calle Policarpo Sanz, nº3, 5º piso. <br>
Vigo (Pontevedra) <br>
CP 36202 <br>
<span class="text-primary">+34 986 910 648</span> <br>
				<span class="text-primary">hello@roiscroll.com</span>
			</p>

			<div class="flex flex-col w-full border-opacity-50">
					
				<div class="divider"></div>
				
				  </div>

			<h3 class="mb-4">¿Ya tienes un plan?</h3>
			<p class="mb-6">Vivimos tiempos complejos, pero en la transformación digital están casi todas las respuestas para comenzar a construir un futuro esperanzador. <br> <br>
				Nosotros podemos ayudarte. ¿Cómo? Con la estrategia e implementación de tu:
			</p>
				
				
				<ul class="text-xs list-inside list-disc mb-10">
					<li>Transformación digital</li>
					
					<li>Entrada en marketplace (Amazon, Ebay, ...)</li>
					<li>Marketing Digital</li>
					<li>Vamos a recorrer este camino junto a ti.</li>
					
				</ul>

				
			

		</div>

	</div>
	
</div>

<div class="ancho_maximo h-50 flex-wrap bg-black box-border overflow-hidden  ">

	<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2953.9034021793173!2d-8.726419648239956!3d42.23787665069807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2f626a90bd552f%3A0x5deb769fa0808048!2sR%C3%BAa%20Policarpo%20Sanz%2C%203%2C%2036202%20Vigo%2C%20Pontevedra!5e0!3m2!1ses!2ses!4v1663605998793!5m2!1ses!2ses" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

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
	

	.imagen_central{
		width: 34rem;
	}
	iframe {
    width:100%;
    height:500px;
}

	

	
</style>