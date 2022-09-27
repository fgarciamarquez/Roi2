<script>
import {fade,scale} from "svelte/transition";
let ruta_api = "http://localhost:8888/ROISCROLL-BACK/servicios.php";


let promesa = getPost();

async function getPost(){
    const response = await fetch(ruta_api);
    if(response.status === 200){
        const resultado = await response.json();
        return resultado;

    } else {
        throw new Error('Error en la petición')
    }

}
</script>

{#await promesa}
    <div in:fade={{duration:1000,delay:1000}} out:scale class="text-center my-20">
        <progress class="progress progress-info w-56"></progress>
    </div>
{:then value}

        {#each value as item}


            <div transition:fade class="ancho_normal columns-2 flex flex-wrap mx-auto relative py-10 h-70 p-4 w-full border-b">
                <div class="w-full md:w-1/2 relative mb-4">
                    <h2 class="titulo_servicio">{@html item.titulo}</h2>

                    <div class="texto_1 mt-4">

                    {@html item.texto_1}

                    </div>


                    <h2><a href=Servicios{item.link}><span class="trazado  text-primary hover:bg-white text-black hover:text-secondary transition ease-in-out duration-500 transform hover:scale-105">+ info</span></a></h2>
                </div>

                <div class="dos_columnas flex flex-wrap w-full md:w-1/2 relative justify-items-start pt-4 md:pt-16">

                    <div class="lista_ser w-1/2 pl-4 md:pl-10">{@html item.lista_izq}</div>


                    <div class="lista_ser w-1/2">{@html item.lista_der}</div>

                </div>

            </div>


        {/each}

{:catch error}
    <p>error: {error.message}</p>
{/await}