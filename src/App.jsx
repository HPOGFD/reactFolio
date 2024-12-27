import Nav from './components/NavTabs';
import Footer from './components/Footer';
import Form from './router/Form';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function App() {
  console.log('App.js is running');
    return (
        <>
            <Header />
            <main>
            <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default App;