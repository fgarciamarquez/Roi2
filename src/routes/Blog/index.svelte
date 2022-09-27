<script>

import Saos from 'saos';

import MarqueeLogos from '../MarqueeLogos.svelte';

    import { images } from './imgData.js';
    import { categories } from './imgData.js';
    import ButtonContainer from './ButtonContainer.svelte';
    import Gallery from './Gallery.svelte';
    import Comentarios from '../SQLComentarios.svelte';

    let selected = "Todos";
    const filterSelection = (e) => selected = e.target.dataset.name;


    import {fade, slide, scale, fly} from "svelte/transition";

</script>

<svelte:head>
	<title>Blog</title>
	<meta name="description" content="Blog" />
</svelte:head>



<div
	id="portada_animada"
	class="static ancho_maximo flex-wrap box-border overflow-hidden pt-28 justify-center text-center relative bg-center bg-cover"
	style="background-image:url('img/bg.png')"
>
	<Saos animation={'from-left 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
		<h2 id="titular_1">Pensamos, Hablamos, Compartimos...</h2>
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
			<img class="imagen_central" src="/img/blog.webp" alt="Hero RoiScroll" />
		</div>
	</Saos>
</div>

<MarqueeLogos />

<div
	class="ancho_normal bg-primary flex flex-col flex-wrap p-4 w-full mx-auto py-10 -mt-10 text-center justify-center"
>
	<h1 class="text-white text-center">Blog</h1>
	
</div>

<main class="flex flex-col w-full items-center justify-center mb-20">
   


    <!-- Portfolio Gallery Grid -->
    <Gallery>
        {#each images as {name, src, keyword, descr, link}}
            {#if selected === "Todos"}
                <div class="show flex flex-wrap relative column justify-center h-96 w-full md:w-1/2" style="background-image:url({src}); background-size:cover;">

                      
                        <div class="flex flex-col absolute bottom-0 left-0 w-full h-full p-4 justify-end opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-white to-transparent">
                           <h3>{name}</h3>
                            <p>{descr}</p>
                            <a href="{link}" class="link link-primary"><h3 class="trazado">+ info</h3></a>
                        </div>

                </div>
            {:else}
                <div class:show={selected === keyword} class="show flex flex-wrap relative column justify-center h-96 w-full md:w-1/2 p-1" style="background-image:url({src}); background-size:cover;">

                        
                        <div class="flex flex-col absolute bottom-0 left-0 w-full h-full p-4 justify-end opacity-0 hover:opacity-100 hover:bg-gradient-to-t from-white to-transparent">
                            <h3>{name}</h3>
                            <p>{descr}</p>
                            <a href="{link}" class="link link-primary"><h3 class="trazado">+ info</h3></a>
                        </div>

                </div>
            {/if}
        {/each}
    </Gallery>
</main>

<Comentarios/>

<style>

.ancho_normal,
	.content_normal {
		max-width: var(--column-width);
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
    #portada_animada {
		height: 40rem;
	}
	

	.imagen_central{
		width: 13rem;
	}

</style>