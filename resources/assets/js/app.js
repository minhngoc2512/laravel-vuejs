
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', require('./components/Example.vue'));
Vue.component('demo',require('./components/demo.vue'));
Vue.component('demo2',require('./components/demo2.vue'));
Vue.component('class_style',require('./components/class_style.vue'));
Vue.component('list_render',require('./components/list.vue'));
Vue.component('event_handling',require('./components/Event_handling.vue'));
Vue.component('form_input',require('./components/form_input.vue'));
const app = new Vue({
    el: '#app',
    data:{
        minh:'minh'

    }
});

