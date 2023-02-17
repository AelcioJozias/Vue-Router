<template lang="">
<nav class="menu">
    <ul> 
        <!-- active-class: -->
        <!-- exact: diz que deve ser renderizada exatamente o que está na propriedade to -->
        <router-link to="/" tag="li" active-class="active" exact ><a>Inicio</a></router-link>
        <router-link to="/Usuario" tag="li" active-class="active"><a>Usuário</a></router-link>
    </ul>
</nav>
</template>

<script>
export default {

}
</script>
<style lang="">
    
</style>