// import { Container } from '@mui/material';
// import ResponsiveAppBar from './ResponsiveAppBar';
import Navbar from './navbar/Navbar';
import { Container } from '@mui/material'
// import TableBebidas from './TableBebidas';
import Home from './pages/Home'
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'
import Bodegas from './pages/Bodegas';
import Cargamentos from './pages/Cargamentos';
import Egresos from './pages/Egresos';
import Traspasos from './pages/Traspasos';
import InboxIcon from '@mui/icons-material/Inbox'
import DraftsIcon from '@mui/icons-material/Drafts'
import Bebidas from './pages/Bebidas';
const navArrayLinks = [
  {
    title: "Home", path: "/", icon: <InboxIcon/>
  },
  {
    title: "Bebidas", path: "/Bebidas", icon: <DraftsIcon/>
  },
  {
    title: "Bodegas", path: "/Bodegas", icon: <DraftsIcon/>
  },
  {
    title: "Cargamentos", path: '/cargamentos', icon: <InboxIcon/>
  },
  {
    title: "Egresos", path: '/egresos', icon: <InboxIcon/>
  },
  {
    title: "traspasos", path: '/traspasos', icon: <InboxIcon/>
  }
];

function App() {

  return (
    <>
        <Navbar navArrayLinks={navArrayLinks}/>
        <Container sx={{ mt:5 }}>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Bebidas' element={<Bebidas/>}/>
            <Route path='/Bodegas' element={<Bodegas/>}/>
            <Route path='/cargamentos' element={<Cargamentos/>}/>
            <Route path='/egresos' element={<Egresos/>}/>
            <Route path='/traspasos' element={<Traspasos/>}/>


          </Routes>
        </Container>
    </>
  )
}

export default App
