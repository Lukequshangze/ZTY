import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

// 引入Goal
import Goal from "./components/travel/Goal"
// 引入Home
import Home from "./components/travel/Home"

// import Index from "./components/travel/Index"

// import Travel from "./components/travel/Travel"

// import Me from "./components/travel/Me"


Vue.use(Router)

export default new Router({
  routes: [
    // {path:"/Me",component:Me},
    // {path:"/Travel",component:Travel},
    // {path:"/Index",component:Index},
    {path:"/Goal",component:Goal},
    {path:"/Home",component:Home},
    {path:"/",component:Home},
  ]
})
