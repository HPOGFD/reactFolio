import Nav from './components/NavTabs';
import { Outlet } from 'react-router-dom';

function App() {
  console.log('App.js is running');
    return (
        <>
            <Nav />
            <main>
            <Outlet />
            </main>
            
        </>
    );
}

export default App;