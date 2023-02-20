<template>
	<div id="app" ref="Inicio">
		<h1>Rotas com VueRouter</h1> 
		<router-view name="menu"></router-view> <!-- renderiza a rota do menu -->
		<transition mode="out-in"
			enter-active-class="animated rubberBand"
			leave-active-class="animated rollOut">
				<router-view/> <!-- renderiza a rota do usuário lista-->
		</transition>
	</div>
</template>	

<script>
export default {
	created() {
}
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
