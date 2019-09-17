// import router from './router';

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app/:id',
    props: true, // 将上面的:id 通过props传给component
    // props: {id: 456},
    // props: (route) => ({ id: route.query.b }),
    component: () => import('../views/todo/todo.vue'),
    // components: {
    //   default: () => import('../views/todo/todo.vue'),
    //   a: () => import('../views/login/login.vue')
    // },
    name: 'appp',
    meta: {
      title: 'this is app_title',
      description: 'sfsfsdf'
    },
    beforeEnter (to, from, next) {
      console.log('app route before enter')
      next()
    },
    children: [
      {
        path: 'test',
        component: () => import('../views/login/login.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../views/login/login.vue')
    // components: {
    //   default: () => import('../views/login/login.vue'),
    //   a: () => import('../views/todo/todo.vue')
    // }
  }
]
