<script>
    let yes = true;
</script>

  
  <div class="container flex flex-wrap mx-auto md:h-80 h-96 w-full p-4 py-5 w-full bg-no-repeat bg-auto " style="background-image:url('/img/ondasBlancas.png'); background-size:contain;">
    <div class="w-full md:w-1/2 relative z-0">
      <div class="invisible absolute -top-16 1/2 md:visible">
      <img width="500" src="/img/absolute_mano_tel.png" alt="Figura_mano">
      </div>
    </div> 
    <div class="w-full sm:w-1/2 flex-auto content-center text-center">
<h2 class="text-white">¡Vamos a ayudarnos!</h2>
    <form class="flex flex-col w-full justify-center ">
      
        <input type="text" placeholder="Nombre" class="input-sm my-1  rounded-lg input-bordered drop-shadow-md" />
        <input type="text" placeholder="Email" class="input-sm my-1 rounded-lg input-bordered drop-shadow-md" />
        <textarea class="textarea-sm rounded-lg my-1 input-bordered drop-shadow-md" placeholder="Mensaje"></textarea>
        
      <div class="form-control">
        <label class="cursor-pointer label gap-4 justify-center">
          <input type="checkbox" bind:checked={yes} class="checkbox checkbox-success" />
          {#if yes}
            
            <span class="text-white text-xs">Acepto la política de privacidad</span>
            
              {:else}
              
            <span class="text-white text-xs">Acepto la política de privacidad</span>
            
          {/if}
          
          
        </label>
      </div>
      <button class="mx-auto text-center btn btn-sm w-40 rounded-full bg-white font-normal disabled: hover:bg-success text-primary hover:text-primary transition ease-in-out duration-500 transform hover:scale-105 " disabled={!yes}>Enviar</button>

    </form>
    </div>
  </div>


<style>
  

  div.container {
    max-width: var(--column-width);
  }

  input,
  textarea {
background-color: #3e34af;
  }
  ::placeholder {
  color: lightgray;
  font-weight: lighter;
  padding-left: 1rem;
  
}
textarea{
  padding-left: .8rem;
  height: 3rem;
}
textarea::placeholder {
  padding-left: 1rem;
  font-size: .9rem}

  

 
</style>
