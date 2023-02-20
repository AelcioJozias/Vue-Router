<template lang="">
    <div>
         <h2>Usuário</h2>
         <hr>
         <router-view />
         <button sucesso @click="irParaInicio">Início</button>
    </div>
</template>
<script>
export default {
     methods: {
         irParaInicio(){
             //this.$router.push('/')
             //this.$router.push({path: '/'}) // aqui você pode também, enviar outros parâmtros
             this.$router.push({name: "menu"})
         }
        }

}
</script>
<style lang="">
    
</style>