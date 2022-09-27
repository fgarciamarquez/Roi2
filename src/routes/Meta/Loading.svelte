<script>
	export let showLoading = false;
</script>

{#if showLoading}
	<div class="loading-container">
		<p>
			Loading...
		</p>	
	</div>
{/if}

<style>
	.loading-container {
		position: fixed;
		left: 5rem;
		top: 5rem;
		background: #00000088;
		color: #fafbfc;
		padding: .5rem .875rem;
	}
	
	p {
		margin: 0;
	}
</style>