<style>
	div#cabecera_nav {
		max-width: var(--column-width);
	}

	.normal {
		color: #4538d1;
		font-weight: 800;
		font-size: 4rem;
		-webkit-text-stroke-width: 1px;
		-webkit-text-stroke-color: white;
	}

	.normal_mini {
		color: white;
		font-size: 1vh;
		font-weight: normal;
		color: keyblue;
	}

	.normal_mini:hover {

		color: lightblue;
		background: transparent;
	}

	@media screen and (max-width: 600px) {
		.normal {
			font-size: 3vh;
		}
	}

	.normal:hover{
		color: white;
		border: 0;
		background: transparent;
	}

	.active {
		color: white;
	}
	header {
    background: white;
	}
</style>
<script>
	import { page } from '$app/stores';
	import {fade,scale,slide,fly} from "svelte/transition";
	import {bounceInOut} from "svelte/easing"
	export let href;
	$: active = $page.url.pathname === href;

	import Nav from './Nav.svelte';


	

	let estado = false;

	function abrirManu() {
		estado = !estado;
	};



	


</script>

<header class="relative bg-white/50 h-16 pt-2">
	<div id="fixed cabecera_nav" class="flex flex-wrap flex-row justify-between mx-auto w-full  ">
		<div class="mt-0 px-4">
			 <label
			 	on:click|preventDefault={abrirManu}
				for="my-drawer"
				class="drawer-button">
			
				{#if estado}


				<!-- <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg> -->

				
				<button class="btn btn-xs btn-success rounded-full mt-3 px-4">menu</button>
				{:else}

				<!-- <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg> -->

				<button class="btn btn-xs btn-primary rounded-full mt-3 px-4">menu</button>
					
				
					
				{/if}
				
			</label> 

			
			
		

			
		</div>

		<div><Nav /></div>

		<div class="px-4">
			<button class="btn btn-xs btn-primary rounded-full mt-3 px-4">Chat</button>

		
		
		</div>

		

		
	</div>

	

	<div class="drawer ">
		<input id="my-drawer" type="checkbox" checked={estado} class="drawer-toggle" />

		<div class="drawer-side pt-2">
			<label for="my-drawer" class="drawer-overlay" />

			
			
			<ul class="menu pt-20 overflow-y-auto w-auto bg-primary text-base-content">
				
				{#if estado}

				<span transition:fly={{x:-200, delay:300}} >


				<li class="h-24"><a on:click={() => {document.getElementById('my-drawer').click()}} class="normal mx-auto" class:active={$page.url.pathname === "/"} href="/">Mini-Metaverso</a></li>
                <li class="h-24"><a on:click={() => {document.getElementById('my-drawer').click()}} class="normal mx-auto" class:active={$page.url.pathname === "/Agencia"} href="/Agencia">Roi Scroll</a></li>
				<li class="h-24">
					<span class="relative w-72 md:w-96 mx-auto hover:bg-transparent ">
						
						<a on:click={() => {document.getElementById('my-drawer').click()}} tabindex="0" class="normal mx-auto" class:active={$page.url.pathname === "/Servicios"} href="/Servicios">
					
						Servicios
			
						</a>

						<div class="dropdown dropdown-end dropdown-hover text-white mx-auto absolute top-0 -right-4">
							<label tabindex="0" class="btn btn-primary btn-circle m-1 hover:bg-white">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
							</label>
							
							<ul tabindex="0" class="dropdown-content menu p-2 drop-shadow-lg bg-primary rounded-box w-52 ">
							  <li><a class="normal_mini" on:click={() => {document.getElementById('my-drawer').click()}} class:active={$page.url.pathname === "/Servicios/Estrategia-de-Negocio"} href="/Servicios/Estrategia-de-Negocio">Estrategia de Negocio</a></li>
							  <li><a class="normal_mini" on:click={() => {document.getElementById('my-drawer').click()}} class:active={$page.url.pathname === "/Servicios/Estrategia-de-Marca"} href="/Servicios/Estrategia-de-Marca">Estrategia de Marca</a></li>
							  <li><a class="normal_mini" on:click={() => {document.getElementById('my-drawer').click()}} class:active={$page.url.pathname === "/Servicios/Customer-Experience"} href="/Servicios/Customer-Experience">Customer Experience</a></li>
							  <li><a class="normal_mini" on:click={() => {document.getElementById('my-drawer').click()}} class:active={$page.url.pathname === "/Servicios/Perfomance-Marketing"} href="/Servicios/Perfomance-Marketing">Perfomance Marketing</a></li>
							  <li><a class="normal_mini" on:click={() => {document.getElementById('my-drawer').click()}} class:active={$page.url.pathname === "/Servicios/Data-Driven-Marketing"} href="/Servicios/Data-Driven-Marketing">Data Driven Marketing</a></li>
							</ul>
						</div>

					</span>
					
					
					
				
				</li>
				<li class="h-24"><a on:click={() => {document.getElementById('my-drawer').click()}} class="normal mx-auto" class:active={$page.url.pathname === "/Casos-de-Exito"} href="/Casos-de-Exito">Casos de éxito</a></li>
				<li class="h-24"><a on:click={() => {document.getElementById('my-drawer').click()}} class="normal mx-auto" class:active={$page.url.pathname === "/Blog"} href="/Blog">Blog</a></li>
				<li class="h-24"><a on:click={() => {document.getElementById('my-drawer').click()}} class="normal mx-auto" class:active={$page.url.pathname === "/Contacto"} href="/Contacto">Contacto</a></li> 

			    </span>
					
				{/if}

				 

				
					 
				
			</ul>
			

		
			
			
			


		</div>
	</div>
</header>


