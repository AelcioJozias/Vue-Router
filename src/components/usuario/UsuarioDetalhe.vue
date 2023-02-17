<template lang="">
   <div class="usuario-detalhe">
        <h3>Usuário Detalhe</h3>
        <p><strong>Código: {{ id }}</strong></p>
        <!-- fazendo sem usar o nome da rota:
                :to="`/usuario/${$route.params.id}/editar`"-->
        <router-link :to="{ name: 'editarUsuario', params: {id} ,
        query: { completo: true, lingua: 'pt-br'} }" tag="button" primario >
            Editar
        </router-link>
   </div>
</template>
<script>
export default {
    props:['id'],
}
</script>
<style lang="">
    
</style>