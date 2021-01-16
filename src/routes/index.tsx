import React from 'react'
import { Redirect } from 'react-router-dom'
import Home from '../page/Home'
const routeList = [
  {
    path: '/',
    component: Home,
    route: [
      {
        path: '/',
        exact: true,
        render: () => {
          <Redirect to={'/recommend'} />
        }
      },
    ]
  }
]
export default routeList