import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './AppRouter';
import AppHeader from './components/header/AppHeader';
import { httpClient } from './utilities';

const App = () => {
    // useEffect(() => {
    //     httpClient
    //         .post('/login', {
    //             username: '+912222222222',
    //             password: '222@222',
    //             role: 'driver',
    //         })
    //         .then((d: any) => {
    //             console.log('data ', d);
    //             httpClient
    //                 .get('/profile', {
    //                     headers: {
    //                         Authorization: `Bearer ${d.access_token}`,
    //                     },
    //                 })
    //                 .then(
    //                     (d) => {
    //                         console.log('profile ', d);
    //                     },
    //                     (err) => {
    //                         console.log('err ', err);
    //                     },
    //                 );
    //         });
    // }, []);
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
