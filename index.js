import DemoElement from './component/HiThere.vue';
import DemoElement2 from './component/SecondComponent.vue';
import 'document-register-element/build/document-register-element'
import Vue from 'vue'
// include vue-custom-element plugin to Vue
import VueCustomElement from 'vue-custom-element'
Vue.use(VueCustomElement)
Vue.customElement('demo-basic', DemoElement);
Vue.customElement('second-component', DemoElement2);
class VueElement {
}

export default VueElement