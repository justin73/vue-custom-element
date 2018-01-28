import DemoElement from './component/HiThere.vue';
import 'document-register-element/build/document-register-element'
import Vue from 'vue'
Vue.customElement('demo-basic', DemoElement);

class VueElement {
}

export default VueElement