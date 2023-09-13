import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
    Home,
    Error,
    Register,
    Login,
    Verify,
    Dashboard,
    // ProtectedRoute,
    ForgotPassword,
    ResetPassword,
} from "./pages";
import Navbar from "./components/Navbar";
import { useGlobalContext } from "./context";

function App() {
    const { isLoading, user } = useGlobalContext();
    if (isLoading) {
        return (
            <section className='page page-center'>
                <div className='loading'></div>
            </section>
        );
    }

    const isAuthenticated = !!user;

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/forgot-password' element={<ForgotPassword />} />
                <Route path='/user/verify-email' element={<Verify />} />
                <Route
                    path='/user/reset-password'
                    element={<ResetPassword />}
                />

                {/* Protected Route */}
                {isAuthenticated ? (
                    <Route path='/dashboard' element={<Dashboard />} />
                ) : (
                    <Route to='/login' />
                )}

                {/* Error Route */}
                <Route path='*' element={<Error />} />
            </Routes>
        </Router>
    );
}

export default App;
