import React from 'react'
import { Switch, Route } from 'react-router-dom'

import {
  Home,
  Favourites,
  Wishlist,
  Stopwatch
} from './routes'
import AppLayout from 'components/AppLayout'

export const routes = [
  {
    exact: true,
    path: '/',
    component: Home
  },
  {
    exact: true,
    path: '/favourites',
    component: Favourites
  },
  {
    exact: true,
    path: '/wishlist',
    component: Wishlist
  },
  {
    exact: true,
    path: '/stopwatch',
    component: Stopwatch
  }
]

export default () => (
  <Switch>
    <AppLayout>
      {routes.map((route, i) => (
        <Route {...route} key={`r-${i}`} />
      ))}
    </AppLayout>
  </Switch>
)
