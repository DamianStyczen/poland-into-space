import React from 'react';
import { Link } from 'react-router-dom';
import { HOST } from '../../constants';

export default class NavBar extends React.Component {

    render() {
        return (<nav className="navbar navbar-expand-xl navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Poland Into Space!</a>

            <div>
                <ul className="nav navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#/tourists">Tourists</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#/flights">Flights</a>
                    </li>
                </ul>
            </div>
        </nav>)
    }
}