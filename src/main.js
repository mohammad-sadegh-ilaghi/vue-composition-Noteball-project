import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import './assets/main.css'
import ViewNotes from '@/views/ViewNodes.vue'
import ViewStats from '@/views/ViewStats.vue'
const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            path:'/',
            name: 'notes',
            component: ViewNotes
        },
        {
            path: '/stats',
            name: 'stats',
            component: ViewStats
        }
    ]
})
createApp(App)
    .use(router)
    .mount('#app')
