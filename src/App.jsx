import { useRoutes } from 'react-router-dom'
import './App.css'
import Home from './routes/Home'
import Cart from './routes/Cart'
import Nav from './routes/Nav'

function App() {

  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
  ])
  return (
    <div>
      <Nav/>
      {routes}
    </div>
  )
}

export default App