import Nav from './components/NavTabs';
import Footer from './components/Footer';
import Form from './router/Form';
import { Outlet } from 'react-router-dom';

function App() {
  console.log('App.js is running');
    return (
        <>
            <Nav />
            <main>
            <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default App;