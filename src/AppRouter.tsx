import { Route, Routes } from 'react-router-dom';
import { LoginContainer } from './features/auth/login-container';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginContainer />} />
        </Routes>
    );
};
