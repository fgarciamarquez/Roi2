<script>
    import {fade,scale} from "svelte/transition";
let ruta_api = "http://localhost:8888/ROISCROLL-BACK/logos_clientes.php";


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

<div class="ancho_maximo h-50 py-14 flex-wrap bg-black box-border overflow-hidden  ">


    <Marquee pauseOnHover={true} speed={20} play={play}>
        {#await promesa}
            <div in:fade={{duration:1000,delay:1000}} out:scale class="text-center mx-auto my-10">
                <progress class="progress progress-info w-56"></progress>
            </div>
        {:then value}

        {#each value as item}

            <div transition:fade>
                <img class="h-12 mx-12" src="{item.img}" alt="{item.name}">
            </div>
            

        {/each}

        {:catch error}
            <p>error: {error.message}</p>
        {/await}
    

    </Marquee>

</div>