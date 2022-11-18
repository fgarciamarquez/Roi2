<script>
import {fade,scale} from "svelte/transition";
let ruta_api = "http://localhost:8888/ROISCROLL-BACK/team.php";
// let ruta_api = "https://api.roiscroll.com/team.php";


let promesa = getPost();

async function getPost(){
    const response = await fetch(ruta_api);
    if(response.status === 200){
        const resultado = await response.json();
        return resultado;

    } else {
        throw new Error('Error en la query')
    }

}

</script>

{#await promesa}
    <div in:fade={{duration:500,delay:500}} out:scale class="text-center my-20">
        <progress class="progress progress-info w-56"></progress>
    </div>
{:then value}

        {#each value as item}


        <div class="fotoEquipo border overflow-hidden flex bg-blue-50 h-60 md:w-1/4 w-1/2 border-box relative bg-cover rounded-lg" style="background-image:url('{item.img}')">
			<div class="absolute w-full bottom-0 left-0  h-60 translate-y-1/2 transform duration-300 hover:translate-y-1 bg-transparent hover:bg-gradient-to-t from-white to-transparent flex flex-col justify-end p-4">
				<span class="text-bold">{@html item.nombre}</span>
				<span class="text-dm text-primary">{@html item.cargo}</span>
			</div>
		</div>


        {/each}

{:catch error}
    <p>error: {error.message}</p>
{/await}