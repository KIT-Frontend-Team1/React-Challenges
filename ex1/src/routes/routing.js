import { createBrowserRouter } from 'react-router-dom'
import Main from '../pages/main/Main'
import AppProfile from '../pages/yeseul/AppProfile'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />
  },
  {
    path: '/yeseul',
    element: <AppProfile />
  },
  {
    path: '/seungyong',
    element: <AppProfile />
  },
  {
    path: '/jaewon',
    element: <AppProfile />
  },
])

export default router