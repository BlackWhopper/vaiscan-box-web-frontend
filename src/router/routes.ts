import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }]
  },
  {
    path: '/signup',
    component: () => import('layouts/LoginLayout.vue'),
    children: [{ path: '', component: () => import('pages/SignUpPage.vue') }]
  },
  {
    path: '/signin',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      {
        path: 'username',
        component: () => import('src/pages/SignInIDPage.vue')
      },
      {
        path: 'password',
        component: () => import('pages/SignInPasswordPage.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
];

export default routes;