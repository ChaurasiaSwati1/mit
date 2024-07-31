import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <main className="App">
            {/* <section>
                <nav>
                    <ul>
                        <li>
                            <Link to="/login" className="navbar-title">
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link to="/signup" className="navbar-title">
                                Signup
                            </Link>
                        </li>
                        <li>
                            <Link to="/forgot" className="navbar-title">
                                Forgot
                            </Link>
                        </li>
                        <li>
                            <Link to="/reset" className="navbar-title">
                                Reset
                            </Link>
                        </li>
                    </ul>
                </nav>
            </section> */}
            {/* <Header /> */}
            <Outlet />
            {/* <Footer /> */}
        </main>
    );
};

export default Layout;
