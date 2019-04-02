import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMessages from 'vue-message'
import App from '@/pages/container.vue'
import {store} from '@/store/store.js'
import * as filter from './common/scripts/filters' //引入filter函数
import * as Actions from '@/store/constants.js'
import routes from '@/router/router.js' // 导入路由路径配置
import btn from '@/components/button.vue'
import navBar from '@/pages/nav/navBar.vue'
import toast from '@/components/toast.vue'
import myInput from '@/components/input.vue'
import tabs from '@/components/tab.vue'
import '@/config/assets/fonts/iconfont.css'
import _ from 'lodash' ;
// register vueRouter
Vue.use(VueRouter);
Vue.use(VueMessages);

// 注册全局的过滤方法.
Object.keys(filter).forEach(key => {
    Vue.filter(key, filter[key])
});

const router = new VueRouter({
    mode:'hash',
    base: '/',
    routes: routes
});
let component = [
    {name: 'btn', component: btn},
    {name: 'navBar', component: navBar},
    {name: 'toast', component: toast},
    {name: 'myInput', component: myInput},
    {name: 'tabs', component: tabs},
];
component.map(component => {
    Vue.component(component.name, component.component);
});
Vue.config.productionTip = false
 /*实例化root_Vue实例*/
new Vue({
    el: '#ekt',
    router,
    store,
    template: '<App/>',
    components: {App}
});
