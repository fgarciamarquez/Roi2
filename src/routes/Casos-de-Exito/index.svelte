<script>
    
    import {fade, slide, scale, fly} from "svelte/transition";
    import Saos from 'saos';
    import { images } from './imgData.js';
    import { categories } from './imgData.js';
    import MarqueePremios from "../MarqueePremiosMini.svelte";
    let selected = "Todos";
    const filterSelection = (e) => selected = e.target.dataset.name;
</script>

<svelte:head>
	<title>Casos de Éxito. </title>
	<meta name="description" content="Casos de Exito de Roi Scroll" />
</svelte:head>

<div
	id="portada_animada"
	class="relative static ancho_maximo flex-wrap box-border overflow-hidden pt-28 justify-center text-center relative bg-center bg-cover"
	style="background-image:url('img/bg.png')"
>
	<Saos animation={'from-left 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
		<h2 id="titular_1">Tv <span class="text-sm align-middle">💙</span> Prensa <span class="text-sm align-middle">💙</span> Apps <span class="text-sm align-middle">💙</span> Web... </h2>
	</Saos>
	<!-- <Saos animation={'from-left 1.2s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
		<h2 id="titular_2">La estrella <span class="text-primary">Perfecta.</span></h2>
	</Saos> -->

	<Saos animation={'slide-in-elliptic-top-fwd 2s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
		<div class="sobreatmosfera absolute -left-2 bottom-0 z-0 w-full mx-auto flex justify-center">
			<img src="img/ondasCirculo.png" alt="Efecto Atmosfera" />
		</div>
	</Saos>

	<Saos animation={'from-bottom 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'}>
		<div class="absolute bottom-0 w-full flex justify-center">
			<img class="imagen_central" src="/img/45_Cup_blue.png" alt="Hero RoiScroll" />
		</div>
	</Saos>
</div>
<div class="ancho_maximo py-2 bg-black"></div>

<MarqueePremios />

<div class="ancho_maximo py-8 bg-black"></div>

<div
	class="ancho_normal bg-primary flex flex-col flex-wrap p-4 w-full mx-auto py-10 -mt-10 mb-12 text-center justify-center"
>
	<h1 class="text-white text-center">Casos de Éxito</h1>
	
</div>

<main class="flex flex-col w-full items-center justify-center mb-20">
    
 
        <!--<div id="myBtnContainer" class="mb-12 z-0">
            {#each categories as category}
                <button class:active={selected === category}
                        class="btn btn-sm rounded-full text-black border-0 bg-white hover:bg-white hover:border font-bold"
                        data-name={category}
                        on:click={filterSelection}>
                    {category}
                </button>
            {/each}
        </div>-->
   
    

    <!-- Portfolio Gallery Grid -->
    <div class="row flex flex-wrap w-full">
        {#each images as {name, src, keyword, descr, link}}
            {#if selected === "Todos"}
                <div in:fade out:fade class="show flex flex-wrap relative column justify-center h-96 w-full md:w-1/2" style="background-image:url({src}); background-size:cover;">
                    <a href="{link}" >
                       
                        <div class="flex flex-col absolute bottom-0 left-0 w-full h-full p-4 justify-end opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-white to-transparent">
                           <h3>{name}</h3>
                            <p>{descr}</p>
                            
                        </div>
                    </a>
                </div>
            {:else}
                <div class:show={selected === keyword} class="show flex flex-wrap relative column justify-center h-96 w-full md:w-1/2" style="background-image:url({src}); background-size:cover;">
                    <a href="{link}">
                     
                        <div class="flex flex-col absolute bottom-0 left-0 w-full h-full p-4 justify-end opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-white to-transparent">
                            <h3>{name}</h3>
                            <p>{descr}</p>
                            
                        </div>
                    </a>
                </div>
            {/if}
        {/each}
    </div>
</main>

<!-- <Comentarios/> -->

<style>

.ancho_normal,
    .content_normal {
        max-width: var(--column-width);	}
    .ancho_maximo {
        max-width: 100%;
    }

    /* Create three equal columns */
    .column {
        display: none;
    }

    /* The "show" class is added to the filtered elements */
    .show {
        display: flex;
    }

    a.link {text-decoration: none;}



    /* Add a dark background color to the active button */
    .btn:active,
    .active {
        background-color: var(--primary-color);
        color: white;
    }
    .row {
		max-width: var(--column-width);
	}

    #portada_animada {
		height: 40rem;
	}
	

	.imagen_central{
		height: 30rem;
	}


</style>