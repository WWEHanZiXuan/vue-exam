import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/Layout.vue'

Vue.use(VueRouter)

const routes = [{
        // redirect重定向
        path: '/',
        name: 'Layout',
        component: Layout,
        children: [{
            path: '/',
            name: 'Home',
            component: Home
        }, ]
    },
    {
        path: '/',
        name: 'Layout',
        component: Layout,
        redirect: '/index', // 设置默认打开的页面
        meta: {
            title: '超级管理员',
        },
        children: [{
                path: '/account',
                name: 'Account',
                component: () =>
                    import ('../components/superAdmin/account.vue')
            },
            {
                path: '/campus',
                name: 'Campus',
                component: () =>
                    import ('../components/superAdmin/campus.vue')
            },
            {
                path: '/students',
                name: 'Students',
                component: () =>
                    import ('../components/superAdmin/students.vue')
            },
            {
                path: '/index',
                name: 'Index',
                component: () =>
                    import ('../components/superAdmin/index.vue')
            },
        ]
    },
    {
        path: '/',
        name: 'Layout',
        component: Layout,
        meta: {
            title: '校区管理员',
        },
        children: [{
                path: '/school',
                name: 'School',
                component: () =>
                    import ('../components/schoolAdmin/school.vue')
            },
            {
                path: '/student',
                name: 'Student',
                component: () =>
                    import ('../components/schoolAdmin/student.vue')
            },
            {
                path: '/extend',
                name: 'Extend',
                component: () =>
                    import ('../components/schoolAdmin/extend.vue')
            },
            {
                path: '/data',
                name: 'Data',
                component: () =>
                    import ('../components/schoolAdmin/data.vue')
            },
            {
                path: '/drawings',
                name: 'Drawings',
                component: () =>
                    import ('../components/schoolAdmin/drawings.vue')
            },
        ]
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ('../views/About.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ('../components/login/login.vue'),
        meta: {
            title: '登录'
        }
    },
]

const isPro = process.env.NODE_ENV === 'production'

// 路由有三种模式 hash history abstrat(非浏览器环境)
// 什么时候用hash: 不需要任何操作
// 什么时候用history:如果上线部署时 后端没有做history模式的操作时 后端需要把所有的路径都重定向到index.html文件
// 如果后端没有做这个操作 所有的页面都是404
// 开发的时候用history 上线的时候用hash 
// 判断当前环境是开发还是生产
// const isPro = process.env.NODE_ENV === "production" 生产环境
const router = new VueRouter({
        mode: isPro ? 'hash' : 'history',
        base: process.env.BASE_URL,
        routes
    })
    // to和from等同于组件的$route
    // router.beforeEach((to, from, next) => {
    // document.title = to.meta.title
    //         let userName = localStorage.getItem('userName')
    //         if (to.path === '/login') {
    //             next()
    //         } else {
    //             userName ? next() : next('/login')
    //         }
    //     })
    // 前端权限设置
    // router.beforeEach((to, from, next) => {
    //     let user = null
    //     if (localStorage.user) {
    //         user = JSON.parse(localStorage.user)
    //     }
    //     if (to.path !== '/login') {
    //         if (user) {
    //             console.log(user)
    //             let role = user.role
    //             if (to.meta.roles.includes(role)) {
    //                 next()
    //             } else {
    //                 next("/403")
    //             }
    //         } else {
    //             next("/login")
    //         }
    //     } else {
    //         next()
    //     }
    // })
export default router