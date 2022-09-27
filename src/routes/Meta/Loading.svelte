<script>
	export let showLoading = false;
</script>

{#if showLoading}
	<div class="loading-container">
		<p>
			Descargando...
		</p>	
	</div>
{/if}

<style>
	.loading-container {
		position: fixed;
		left: 5rem;
		top: 5rem;
		color: #000;
		padding: .5rem .875rem;
	}
	
	p {
		margin: 0;
	}
</style>