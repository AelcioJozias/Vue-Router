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
        <button voltar @click="irParaInicio" div="btnVoltar" >Voltar</button>

   </div>
</template>
<script>
export default {
    props:['id'],
    methods: {
         irParaInicio(){
             this.$router.push({path: "/Usuario",})
         }       
    }
}

</script>
<style lang="">
    
</style>