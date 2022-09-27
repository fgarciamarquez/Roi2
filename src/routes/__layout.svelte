<script>
	import Header from '$lib/Header/Header.svelte';
    import FForm from '$lib/Footer/FForm.svelte';
    import FMapa from '$lib/Footer/FMapa.svelte';
    import FCierre from '$lib/Footer/FCierre.svelte';
    import '../app.css';
    import { page } from '$app/stores';



</script>
<svelte:head>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;800&family=Roboto&display=swap');
    </style>
</svelte:head>

<Header />


<main class="flex flex-col my-auto w-full box-border">
	<slot />
</main>

<div class="flex flex-col bg-primary h-full w-full absolute">


    {#if $page.url.pathname === '/Contacto'}

    <FCierre />
    {:else if $page.url.pathname === '/'}
    <FCierre />
    {:else if $page.url.pathname === '/Meta'}
    
    {:else}
    <FForm />
    <FMapa />
    <FCierre />
    
    {/if}
    
</div>

<style>

	:global(body){ font-family: 'Poppins', sans-serif;}
	:global(h1,h2,h3,h4,h5,h6,bold,strong,b){font-family: 'Poppins', sans-serif;}
	:global(._h7){font-family: 'Poppins', sans-serif; font-weight:800; font-size:5vw;}


    @keyframes -global-from-left {
        0% {
            transform: rotateX(50deg) translateX(-200vw) skewX(-50deg);
            opacity: 1;
        }
        100% {
            transform: rotateX(0deg) translateX(0) skewX(0deg);
            opacity: 1;
        }
    }

    @keyframes -global-from-bottom {
        0% {
            transform: rotateY(50deg) translateY(100vh) skewY(0deg);
            opacity: 0;
        }
        100% {
            transform: rotateY(0deg) translateY(42vh) skewY(0deg);
            opacity: 1;
        }
    }

  


    @keyframes -global-scale-in-center {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }

    @keyframes -global-rotate-in-center {
        0% {
            transform: rotate(-360deg);
            opacity: 0;
        }
        100% {
            transform: rotate(0);
            opacity: 1;
        }
    }

    @keyframes -global-slide-in-top {
        0% {
            transform: translateY(-1000px);
            opacity: 0;
        }
        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes -global-slide-in-fwd-tr {
        0% {
            transform: translateZ(-1200px) translateY(-40rem) translateX(500px);
            opacity: 0;
        }
        100% {
            transform: translateZ(0) translateY(0) translateX(0);
            opacity: 1;
        }
    }

    @keyframes -global-slide-in-elliptic-top-fwd {
        0% {
            transform: translateY(0px) rotateX(-30deg) scale(0);
            transform-origin: 50% 100%;
            opacity: 0;
        }
        100% {
            transform: translateY(400px) rotateX(0) scale(1);
            transform-origin: 50% 600px;
            opacity: 1;
        }
    }



    @keyframes -global-roll-in-left {
        0% {
            transform: translateX(-800px) rotate(-540deg);
            opacity: 0;
        }
        100% {
            transform: translateX(0) rotate(0deg);
            opacity: 1;
        }
    }

    @keyframes -global-roll-in-blurred-left {
        0% {
            transform: translateX(-1000px) rotate(-720deg);
            filter: blur(50px);
            opacity: 0;
        }
        100% {
            transform: translateX(0) rotate(0deg);
            filter: blur(0);
            opacity: 1;
        }
    }

    @keyframes -global-tilt-in-fwd-tr {
        0% {
            transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px)
            skew(-35deg, 10deg);
            opacity: 0;
        }
        100% {
            transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
            opacity: 1;
        }
    }

    @keyframes -global-swing-in-top-fwd {
        0% {
            transform: rotateX(-100deg);
            transform-origin: top;
            opacity: 0;
        }
        100% {
            transform: rotateX(0deg);
            transform-origin: top;
            opacity: 1;
        }
    }

    @keyframes -global-puff-in-center {
        0% {
            transform: scale(2);
            filter: blur(4px);
            opacity: 0;
        }
        100% {
            transform: scale(1);
            filter: blur(0px);
            opacity: 1;
        }
    }

    @keyframes -global-fade-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    /* EXITS */
    @keyframes -global-scale-out-center {
        0% {
            transform: scale(1);
            opacity: 1;
        }
        100% {
            transform: scale(0);
            opacity: 1;
        }
    }

    @keyframes -global-rotate-out-center {
        0% {
            transform: rotate(0);
            opacity: 1;
        }
        100% {
            transform: rotate(-360deg);
            opacity: 0;
        }
    }

    @keyframes -global-rotate-out-2-cw {
        0% {
            transform: rotate(0);
            opacity: 1;
        }
        100% {
            transform: rotate(45deg);
            opacity: 0;
        }
    }

    @keyframes -global-swirl-out-bck {
        0% {
            transform: rotate(0) scale(1);
            opacity: 1;
        }
        100% {
            transform: rotate(-540deg) scale(0);
            opacity: 0;
        }
    }

    @keyframes -global-flip-out-hor-top {
        0% {
            transform: rotateX(0);
            opacity: 1;
        }
        100% {
            transform: rotateX(70deg);
            opacity: 0;
        }
    }

    @keyframes -global-slide-out-top {
        0% {
            transform: translateY(0);
            opacity: 1;
        }
        100% {
            transform: translateY(-1000px);
            opacity: 0;
        }
    }

    @keyframes -global-slide-out-fwd-center {
        0% {
            transform: translateZ(1);
            opacity: 1;
        }
        100% {
            transform: translateZ(600px);
            opacity: 0;
        }
    }

    @keyframes -global-slide-out-elliptic-top-bck {
        0% {
            transform: translateY(0) rotateX(0) scale(1);
            transform-origin: 50% 1400px;
            opacity: 1;
        }
        100% {
            transform: translateY(-600px) rotateX(-30deg) scale(0);
            transform-origin: 50% 100%;
            opacity: 1;
        }
    }

	


</style>           
