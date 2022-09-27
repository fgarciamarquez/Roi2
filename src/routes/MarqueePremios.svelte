<script>

import {fade,scale} from "svelte/transition";
let ruta_api = "http://localhost:8888/ROISCROLL-BACK/premios.php";


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



    import Marquee from "svelte-fast-marquee";
    let play = true;
</script>

<div class="ancho_maximo py-4 flex-wrap bg-secondary box-border overflow-hidden">


    <Marquee pauseOnHover={true} speed={20} play={play}>

        {#await promesa}
            <div in:fade={{duration:1000,delay:1000}} out:scale class="text-center mx-auto my-20">
                <progress class="progress w-56"></progress>
            </div>
        {:then value}

            {#each value as item}


            <div class="flex items-stretch flex-col w-80 px-10 ">
                <div class="mx-auto">
                    <img class="flex h-12 mx-auto" src="{item.img}" alt="Imagen_premio">
                </div>
                <div class="text-center"><h5>{@html item.titulo}</h5>
                    <p>{@html item.txt}</p>
                </div>
            </div>
            
            {/each}

        {:catch error}
            <p>error: {error.message}</p>
        {/await}


    </Marquee>

</div>