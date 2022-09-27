<script>
    let yes = true;
</script>

  
  <div class="container flex flex-wrap mx-auto md:h-80 h-96 w-full p-4 py-5 w-full bg-no-repeat bg-auto bg-bottom" style="background-image:url('/img/ondasBlancas.png')">
    <div class="w-full md:w-1/2 relative z-0">
      <div class="invisible absolute 1/2 md:visible">
      <img width="500" src="/img/absolute_mano_tel.png" alt="Figura_mano">
      </div>
    </div> 
    <div class="w-full sm:w-1/2 flex-auto content-center">
<h2 class="text-white">¡Vamos a ayudarnos!</h2>
    <form class="flex flex-col w-full">
      
        <input type="text" placeholder="Nombre" class="input-sm my-1  rounded-2xl input-bordered drop-shadow-md" />
        <input type="text" placeholder="Nombre" class="input-sm my-1 rounded-2xl input-bordered drop-shadow-md" />
        <textarea class="textarea-sm rounded-2xl my-1 input-bordered drop-shadow-md" placeholder="Mensaje"></textarea>
        
      <div class="form-control">
        <label class="cursor-pointer label gap-4 justify-start">
          <input type="checkbox" bind:checked={yes} class="checkbox checkbox-success" />
          {#if yes}
            
            <span class="text-white text-xs">Acepto la política de privacidad</span>
            
              {:else}
              
            <span class="text-white text-xs">Acepto la política de privacidad</span>
            
          {/if}
          
          
        </label>
      </div>
      <button class="btn btn-wide rounded-full bg-success font-normal disabled: hover:bg-white text-black hover:text-primary transition ease-in-out duration-500 transform hover:scale-105 " disabled={!yes}>Enviar</button>

    </form>
    </div>
  </div>


<style>
  

  div.container {
    max-width: var(--column-width);
  }

  input,
  textarea {
background-color: #3B82F5;
  }
  ::placeholder {
  color: white;
  font-weight: lighter;
  padding-left: 1rem;
  
}
textarea{
  padding-left: .8rem;
}
textarea::placeholder {
  padding-left: 1rem;
  font-size: .9rem}

  

 
</style>
