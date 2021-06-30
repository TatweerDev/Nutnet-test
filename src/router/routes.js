
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/about', component: () => import('pages/AboutPage.vue') },
      { path: '/expertise', component: () => import('pages/ExpertisePage.vue') },
      { path: '/team', component: () => import('pages/TeamPage.vue') },
      { path: '/works', component: () => import('pages/WorksPage.vue') },
      { path: '/ps', component: () => import('pages/PeopleSayPage.vue') },
      { path: '/contact', component: () => import('pages/ContactPage.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
