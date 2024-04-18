import Logo from "../assets/images/logo.svg";
import arrowUp from "../assets/images/icon-arrow-up.svg";
import arrowDown from "../assets/images/icon-arrow-down.svg";
import toDoList from "../assets/images/icon-todo.svg";
import Calender from "../assets/images/icon-calendar.svg";
import Reminder from "../assets/images/icon-reminders.svg";
import Planning from "../assets/images/icon-planning.svg";
import openMenuIcon from "../assets/images/icon-menu.svg";
import closeMenuIcon from "../assets/images/icon-close-menu.svg";

import { useState } from "react";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isAppear, setIsAppeared] = useState(false);

        const [isClicked, setIsClicked] = useState(false);
        const [elementClicked, setElementClicked] = useState(false);

    const [menuDisplay, setMenuDisplay] = useState(false);
    const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
    
    const handleToggle1 = () => {
        setIsOpen(!isOpen);
    };
    
    const handleToggle2 = () => {
        setIsAppeared(!isAppear);
    };

        const handleClick = (element) => {
            setIsClicked(!isClicked);
            setElementClicked(element);
        };
        
    const openMenu = () => {
        setMenuDisplay(true);
    }
    const closeMenu = () => {
        setMenuDisplay(false);
        console.log(deviceWidth);
    }


    return(
        <header>
            <div className="flex">
                <article>
                    <a href="/">
                        <img src={Logo} alt="logo" id="logo"/>
                    </a>
                    <aside id="desktop-nav-1">
                        <nav>
                            <ul className="flex">
                                <li id="dropdown-feature" onClick={handleToggle1}>
                                    <a href="#"
                                        onClick={() => handleClick("first")}>Features<img src={(isClicked && elementClicked === "first") ? arrowDown : arrowUp} alt="/" />
                                    </a>
                                {isOpen && (
                                    <article>
                                        <a href="/"><img src={toDoList} alt="todolist" />To Do List</a>
                                        <a href="/"><img src={Calender} alt="calender" />Calender</a>
                                        <a href="/"><img src={Reminder} alt="reminder" />Reminders</a>
                                        <a href="/"><img src={Planning} alt="planning" />Planning</a>
                                    </article>
                                )}
                                </li>
                                <li id="dropdown-company" onClick={handleToggle2}>
                                    <a href="#"
                                        onClick={() => handleClick("second")}>Company<img src={(isClicked && elementClicked === "second") ? arrowDown : arrowUp} alt="/" />
                                    </a>
                                {isAppear && (
                                    <article>
                                        <a href="/">History</a>
                                        <a href="/">Our Team</a>
                                        <a href="/">Blog</a>
                                    </article>
                                )}
                                </li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">About</a></li>
                            </ul>
                        </nav>
                    </aside>
                </article>
                <article id="desktop-nav-2">
                    <nav>
                        <ul className="flex">
                            <li><a href="#">Login</a></li>
                        </ul>
                    </nav>
                    <button>Register</button>
                </article>
            </div>
                    <img src={openMenuIcon} alt="openMenuIcon" id="openMenu" onClick={openMenu}/>
            <div className={(menuDisplay) ? "open" : "close"} id="mobile-nav-bar">
                    <img src={closeMenuIcon} alt="closeMenuIcon" id="closeMenu" onClick={closeMenu}/>
                <nav>
                    <ul>
                        <li onClick={handleToggle1}>
                            <a href="#"
                                onClick={() => handleClick("first")}>Features<img src={(isClicked && elementClicked === "first") ? arrowDown : arrowUp} alt="/" />
                            </a>
                            {isOpen && (
                            <article id="mobile-feature-dropdown">                                    
                                <a href="/"><img src={toDoList} alt="todolist" />To Do List</a>
                                <a href="/"><img src={Calender} alt="calender" />Calender</a>
                                <a href="/"><img src={Reminder} alt="reminder" />Reminders</a>
                                <a href="/"><img src={Planning} alt="planning" />Planning</a>
                            </article>
                            )}
                        </li>
                        <li onClick={handleToggle2}>
                            <a href="#"
                                onClick={() => handleClick("second")}>Company<img src={(isClicked && elementClicked === "second") ? arrowDown : arrowUp} alt="/" />
                            </a>
                            {isAppear && (
                            <article id="mobile-company-dropdown">
                                <a href="/">History</a>
                                <a href="/">Our Team</a>
                                <a href="/">Blog</a>
                            </article>
                            )}
                        </li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </nav>
                <a href="#"><p>Login</p></a><br/>
                <a href="#"><p id="register">Register</p></a>
            </div>
        </header>
    )
}

export default Header;