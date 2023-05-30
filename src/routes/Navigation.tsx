import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link, NavLink, Navigate } from "react-router-dom";
import logo from '../logo.svg';
import { routes } from "./routes";

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav> 
                    <img src={logo} alt="" /> 
                    <ul>
                        {
                            routes.map(({to, name, path}) => (
                            <li key={path}>
                                <NavLink to={to} className={({isActive}) => isActive ? 'nav-active' : ''}>{name}</NavLink>
                            </li>
                            ))
                        }
                    </ul>
                </nav>
                <Routes>
                    {
                        routes.map(({path, Component}) => (
                            <Route key={path} path={path} element={<Component/>}/>
                        ))
                    }
                    <Route path="/*" element={<Navigate to={routes[0].to} replace />}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}