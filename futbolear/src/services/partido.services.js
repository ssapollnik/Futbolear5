import Vue from 'vue'

const BASE_URL = 'https://demo8070547.mockable.io/partido'

export default{
    find(){
        return Vue.axios.get(BASE_URL)
    }
}