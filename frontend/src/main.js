import './index.css'
import 'bootstrap/dist/css/bootstrap.css'

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

import {
  Button,
  Card,
  Input,
  setConfig,
  frappeRequest,
  resourcesPlugin,
} from 'frappe-ui'

import { library  } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faExclamation} from '@fortawesome/free-solid-svg-icons'

library.add(faExclamation)

let app = createApp(App)

setConfig('resourceFetcher', frappeRequest)

app.use(router)
app.use(resourcesPlugin)

app.component('Button', Button)
app.component('Card', Card)
app.component('Input', Input)
app.component('font-awesome-icon', FontAwesomeIcon)
// app.use(createPinia())
app.use(router)

app.mount('#app')
