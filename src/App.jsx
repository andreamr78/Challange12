import TopNav from './components/TopNav';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import './styles/globalStyles.css'

function App() {

  return (
    <>
      <TopNav/>
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer/>
    </>
  )
}

export default App
