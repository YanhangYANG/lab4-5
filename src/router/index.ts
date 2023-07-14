import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import EventDetailView from '../views/event/EventDetailView.vue'
import EventLayoutView from '@/views/event/EventLayoutView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import NetworkErrorView from '@/views/NetworkErrorView.vue'
import AirlineDetailView from '@/views/event/AirlineDetailView.vue'
import AirlineLayoutView from '@/views/event/AirlineLayoutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'EventList',
      component: EventListView,
      props: (route) => ({
        page: parseInt((route.query?.page as string) || '1'),
        size: parseInt((route.query?.size as string) || '2')
      })
    },
    {
      path: '/airline/:id',
      name: 'airline-layout',
      component: AirlineLayoutView,
      props: true,
      children: [
        {
          path: '',
          name: 'airline-detail',
          component: AirlineDetailView,
          props: true
        }
      ]
    },
    {
      path: '/event/:id',
      name: 'event-layout',
      component: EventLayoutView,
      props: true,
      children: [
        {
          path: '',
          name: 'event-detail',
          component: EventDetailView,
          props: true
        }
      ]
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFoundView
    },
    {
      path: '/network-error',
      name: 'network-error',
      component: NetworkErrorView
    },
    {
      path: '/404/:resource',
      name: '404-resource',
      component: NotFoundView,
      props: true
    }
  ]
})

export default router
