// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'

// Vue.config.productionTip = false

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')

// import Vue from 'vue'
// import App from './App.vue'
console.log('main-start')
import axios from 'axios'
import axios1 from '../../axios-0.24.0/src/axios-1'
import axios2 from '../../axios-0.24.0/src/axios-2'
import axios3 from '../../axios-0.23.0/src/axios-1'
import axios4 from '../../axios-0.23.0/src/axios-2'
import axios5 from '../../axios-0.21.1/src/axios-1'
import axios6 from '../../axios-0.21.1/src/axios-2'
import axios7 from '../../axios-0.21.0/src/axios-1'
import axios8 from '../../axios-0.21.0/src/axios-2'
import axios9 from '../../axios-no/src/axios-1'
import axios10 from '../../axios-no/src/axios-2'
// import stringExport from './export-string'
// import {a as stringExportA} from './export-string'
// console.log(stringExportA)

// console.log([
     axios1('https://www.lilnong.top/cors/axios1?axios=true&v='+axios1.VERSION).then(v=>v.data).then(console.log);//,
//   axios2,
     axios3('https://www.lilnong.top/cors/axios3?axios=true&v='+axios3.VERSION).then(v=>v.data).then(console.log);//,
//   axios4,
     axios5('https://www.lilnong.top/cors/axios5?axios=true&v='+axios5.VERSION).then(v=>v.data).then(console.log);//,
//   axios6,
     axios7('https://www.lilnong.top/cors/axios7?axios=true&v='+axios7.VERSION).then(v=>v.data).then(console.log);//,
//   axios8,
     axios9('https://www.lilnong.top/cors/axios9?axios=true&v='+axios9.VERSION).then(v=>v.data).then(console.log);//,
//   axios10
// ])
// Vue.config.productionTip = false
console.log('main-end');
// new Vue({
//   render: function (h) { return h(App) },
// }).$mount('#app')
