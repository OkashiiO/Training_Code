import Vue from 'vue'
import Router from 'vue-router'
import layoutmain from '@/components/layoutmain'
import A from '@/components/A'
import B from '@/components/B'
import C from '@/components/C'
import D from '@/components/D'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layoutmain',
      component: layoutmain,
      children:[
        {
          path:'/A',
          name:'A',
          component: A,
          children:[
            {
              path:'/B',
              name:'B',
              component: B,
              children:[
                {
                  path:'C',
                  name:'C',
                  component: C,
                },
                {
                  path:'D',
                  name:'D',
                  component: D,
                }
              ]
            }
          ]
        },
      ]
    }
  ]
})
