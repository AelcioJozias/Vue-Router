import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio.vue'
import Usuario from './components/usuario/Usuario.vue'
import UsuarioLista from './components/usuario/UsuarioLista.vue'
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe.vue'
import UsuarioEditar from './components/usuario/UsuarioEditar.vue'
import Menu from './components/template/Menu.vue';
import MenuAlt from './components/template/MenuAlt.vue';



Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            name: 'menu',
            path:'/',
            components :{ //o default é exibido na segunda order, primeiro ele exibe o comp
                // menu
                default: Inicio,
                menu: Menu,
            }
            //component: Inicio
        }, {
            path:'/usuario/',
            components:{
                default: Usuario, // aqui segue o mesmo padrão, primeiro aprensenta o comp, menu
                // e após renderiza a rota Usuario, segundo das suas filhas
                menu: MenuAlt,
                },
            props:true,
            children:[
                { path: '', component: UsuarioLista},
                { path: ':id', component: UsuarioDetalhe, props: true},
                { path: ':id/editar', component: UsuarioEditar, props: true,
                    name: 'editarUsuario'},
                
            ]
        },
        {
            path: '*',
            redirect: '/'
        }
    ]   
})
