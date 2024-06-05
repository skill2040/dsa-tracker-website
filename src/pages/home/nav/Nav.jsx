import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../auth/AuthContext';
import useSound from 'use-sound';
import loud_btn from '../components/sounds/loud_btn_clk.wav';
import './style.css';
import Login from '../../auth/Login';
import Signup from '../../auth/Signup';

function Nav() {
    const clientUrl = process.env.CLIENT_URL;
    const { currentUser, logout } = useAuth(); // Accessing currentUser and logout function from AuthProvider

    const [play] = useSound(loud_btn);
    const [showMenu, setShowMenu] = useState(false);
    const [showLoginModel, setShowLoginModel] = useState(false);
    const [showSignupModel, setShowSignupModel] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    // Function to toggle login modal
    const toggleLoginModal = () => {
        setShowLoginModel(prevState => !prevState);
    };

    // Function to toggle signup modal
    const toggleSignupModal = () => {
        setShowSignupModel(prevState => !prevState);
    };
    useEffect(() => {
        // Function to disable body scroll when modal is open
        const disableBodyScroll = () => {
            document.body.style.overflow = 'hidden';
        };

        // Function to enable body scroll when modal is closed
        const enableBodyScroll = () => {
            document.body.style.overflow = 'visible';
        };

        // Add event listener when component mounts
        if (showLoginModel || showSignupModel) {
            disableBodyScroll();
        } else {
            enableBodyScroll();
        }

        // Remove event listener when component unmounts
        return () => {
            enableBodyScroll();
        };
    }, [showLoginModel, showSignupModel]);
    return (
        <>
            <div className='navbar-container'>
                <div className="NavContainer">
                    <div className='logo'>
                        <img src="/images/nav/logo.jpg" alt="Logo"></img>
                        <h4>DSA-Tracker</h4>
                    </div>
                    <nav className='fill stroke'>
                        <li>
                            <Link to={clientUrl} className='active' onClick={play}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to={clientUrl} onClick={play}>
                                About
                            </Link>
                        </li>
                        <li className='dropdown'>
                            <Link to={clientUrl} onClick={play}>
                                LeaderBoard
                            </Link>
                        </li>
                        <li className='dropdown'>
                            <Link to={clientUrl} onClick={play}>
                                AlgoVisualizer
                            </Link>
                        </li>
                    </nav>
                    {currentUser ? (
                        <div className='profile' onClick={play}>
                            <span className='name'>{currentUser.displayName}</span>
                            <img src={currentUser.photoURL} alt="User Avatar"></img>
                            <button onClick={() => logout()}>Logout</button>
                        </div>
                    ) : (
                        <div className="login-signup-buttons">
                            <button onClick={toggleLoginModal}>Login</button>
                            <button onClick={toggleSignupModal}>Signup</button>
                        </div>
                    )}
                </div>
            </div>

            <nav className='nav-responsive'>
                {showMenu && (
                    <ul className='responsive-menu'>
                        <div className='tags show'>
                            <li>
                                <Link to={clientUrl} className='active' onClick={play}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to={clientUrl} onClick={play}>
                                    About
                                </Link>
                            </li>
                            <li className='dropdown'>
                                <Link to={clientUrl} onClick={play}>
                                    Services
                                </Link>
                            </li>
                            <li className='dropdown'>
                                <Link to={clientUrl} onClick={play}>
                                    CaseStudies
                                </Link>
                            </li>
                            <li>
                                <Link to={clientUrl} onClick={play}>
                                    Specialities
                                </Link>
                            </li>
                            <li>
                                <Link to={clientUrl} onClick={play}>
                                    Contact Us
                                </Link>
                            </li>
                        </div>
                    </ul>
                )}
            </nav>

            {/* Modal overlay for Login */}
            {showLoginModel && (
                <div className="modal-overlay" style={{zIndex:2}}>
                    <div className="modal" style={{overflowY: 'auto'}}>
                        <Login />
                        <button onClick={toggleLoginModal}>Close</button>
                    </div>
                </div>
            )}

            {/* Modal overlay for Signup */}
            {showSignupModel && (
                <div className="modal-overlay" style={{zIndex:2}}> 
                    <div className="modal" style={{overflowY: 'auto'}}>
                        <Signup />
                        <button onClick={toggleSignupModal}>Close</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Nav;
