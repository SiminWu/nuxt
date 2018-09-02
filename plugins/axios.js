
import Vue from 'vue'
import api from './api'; // 公共请求/接口
import * as utils from './js/utils'; // 公共库
var common = {
    install(Vue){
        Vue.prototype.$api = api; // 公共请求
        Vue.prototype.$utils = utils;
    }
}

Vue.use(common);