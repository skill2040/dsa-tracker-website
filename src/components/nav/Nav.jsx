import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../pages/auth/AuthContext";
import useSound from "use-sound";
import { useCookies } from "react-cookie";
import loud_btn from "../sounds/loud_btn_clk.wav";
import "./style.css";
import Login from "../../pages/auth/Login";
import Signup from "../../pages/auth/Signup";



function Nav({ setIsLoginCompleted }) {
  const clientUrl = process.env.CLIENT_URL;
  const { currentUser, logout } = useAuth();
  const [play] = useSound(loud_btn);
  const [showMenu, setShowMenu] = useState(false);
  const [showLoginModel, setShowLoginModel] = useState(false);
  const [showSignupModel, setShowSignupModel] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['userToken']);
  const isModalOpen = showLoginModel || showSignupModel;
  const [username, setUsername] = useState("");
  const [photoURL, setphotoURL] = useState("");
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleLoginModal = () => {
    setShowLoginModel((prevState) => !prevState);
  };

  const toggleSignupModal = () => {
    setShowSignupModel((prevState) => !prevState);
  };

  const handleLogout = async () => {
    try {
      await logout();
      removeCookie('userToken', { path: '/' });
    } catch {
      console.error("Failed to log out");
    }
  };

  useEffect(() => {
    const disableBodyScroll = () => {
      document.body.style.overflow = "hidden";
    };

    const enableBodyScroll = () => {
      document.body.style.overflow = "visible";
    };

    if (showLoginModel || showSignupModel) {
      disableBodyScroll();
    } else {
      enableBodyScroll();
    }

    return () => {
      enableBodyScroll();
    };
  }, [showLoginModel, showSignupModel]);


  useEffect(() => {
    if (currentUser) {
      setShowLoginModel(false);
      setShowSignupModel(false);
      setUsername(currentUser.displayName);
      setphotoURL(currentUser.photoURL)
    }
  }, [currentUser]);



  return (
    <>
      <div className={`navbar-container ${isModalOpen ? "blur" : ""}`}>
        <div className="NavContainer">
          <div className="logo">
            <img src="/images/nav/logo.jpg" alt="Logo" />
            <h4>DSA-Tracker</h4>
          </div>
          <nav className="fill stroke">
            <li>
              <Link to={clientUrl} className="active" onClick={play}>
                Home
              </Link>
            </li>
            <li>
              <Link to={clientUrl} onClick={play}>
                About
              </Link>
            </li>
            <li className="dropdown">
              <Link to={clientUrl} onClick={play}>
                LeaderBoard
              </Link>
            </li>
            <li className="dropdown">
              <Link to={clientUrl} onClick={play}>
                AlgoVisualizer
              </Link>
            </li>
          </nav>
          {currentUser ? (
            <div className="profile" onClick={play}>
              <span className="name">{username}</span>
              <img src={photoURL}></img>
              {/* <img src={currentUser.photoURL} alt="User Avatar" /> */}
              <button className="Navbar-Logout-Btn" onClick={() => logout()}>

                <div className="Navbar-Logout-sign">
                  <svg viewBox="0 0 512 512">
                    <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                  </svg>
                </div>
                <div className="Navbar-Logout-text">Logout</div>
              </button>
            </div>
          ) : (
            <div className="login-signup-buttons">
              <button
                onClick={toggleLoginModal}
                className="login-signup-button-nav"
              >
                Login
              </button>
              <button
                onClick={toggleSignupModal}
                className="login-signup-button-nav"
              >
                Signup
              </button>
            </div>
          )}
        </div>
      </div>

      <nav className="nav-responsive">
        {showMenu && (
          <ul className="responsive-menu">
            <div className="tags show">
              <li>
                <Link to={clientUrl} className="active" onClick={play}>
                  Home
                </Link>
              </li>
              <li>
                <Link to={clientUrl} onClick={play}>
                  About
                </Link>
              </li>
              <li className="dropdown">
                <Link to={clientUrl} onClick={play}>
                  Services
                </Link>
              </li>
              <li className="dropdown">
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

      {showLoginModel && (
        <div className="modal-overlay">
          <div className="login-modal">
            <Login toggleLoginModal={toggleLoginModal} setIsLoginCompleted={setIsLoginCompleted} />
          </div>
        </div>
      )}

      {showSignupModel && (
        <div className="modal-overlay">
          <div className="signup-modal">
            <Signup toggleSignupModal={toggleSignupModal} />
          </div>
        </div>
      )}
    </>
  );
}

export default Nav;
