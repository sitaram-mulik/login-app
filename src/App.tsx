import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './AppRouter';
import AppHeader from './components/header/AppHeader';

const App = () => {
    useEffect(() => {
        console.log('Modified');
    }, []);
    return (
        <div className="main-container">
            <BrowserRouter>
                <AppHeader />
                <AppRouter />
            </BrowserRouter>
        </div>
    );
};

export default App;
