<template lang="">
    <div>
         <h2>Usuário</h2>
         <hr>
         <router-view />
         <button sucesso @click="irParaInicio">Voltar</button>
    </div>
</template>
<script>
export default {
   
   
   
     methods: {
         irParaInicio(){
             //this.$router.push('/')
             console.log(this)
             //this.$router.push({path: '/'}) // aqui você pode também, enviar outros parâmtros
             this.$router.push({name: "usuarioEditar"})
         }
        }

}
</script>
<style lang="">
    
</style>