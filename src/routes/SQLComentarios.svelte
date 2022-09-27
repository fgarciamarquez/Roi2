
<script>
   
    import {fade,scale} from "svelte/transition";
    let ruta_api = "http://localhost:8888/ROISCROLL-BACK/comentarios.php";

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



<div class="ancho_maximo bg-black w-full">

    <div class="content_normal w-full mx-auto" >

        <div class="carousel w-full py-14 place-content-center">

            {#await promesa}
                <div in:fade={{duration:100,delay:100}} out:scale class="mx-auto">
                    <progress class="progress progress-info w-56"></progress>
                </div>
            {:then value}

                {#each value as item}


                    <div id="item{item.id_elogio}" class="carousel-item w-full flex flex-col">
                        <p class="w-full text-center text-white">
                            {@html item.frase}
                        </p>
                        <p class="text-center text-success pt-4">
                            {@html item.nombre}. <br> <span class="italic text-gray-400 text-xs">{@html item.cargo}</span>
                        </p>
                    </div>


                {/each}

            {:catch error}
                <p>error: {error.message}</p>
            {/await}


        </div>



    </div>


</div>

<style>
    .ancho_normal,
    .content_normal {
        max-width: var(--column-width);	}
    .ancho_maximo {
        max-width: 100%;
    }
</style>
