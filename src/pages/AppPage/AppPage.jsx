import React from "react";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';
import TouristDetails from "../../pages/TouristDetails/TouristDetails";
import TouristsList from "../../pages/TouristsList/TouristsList";
import NewTourist from "../NewTourist/NewTourist";
import EditTourist from "../EditTourist/EditTourist";
import FlightsList from "../../pages/FlightsList/FlightsList";
import NavBar from "../../components/NavBar/NavBar";
import FlightDetails from "../../pages/FlightDetails/FlightDetails";
import EditFlight from "../../pages/EditFlight/EditFlight";
import NewFlight from "../NewFlight/NewFlight";

class AppPage extends React.Component {
  render() {
    return (
      <div className="container">
        <NavBar />
        <HashRouter>
          <div>
            <Route exact path='/' component={TouristsList} />
            <Route exact path='/tourists' component={TouristsList} />
            <Route path='/tourists/details/:id' component={TouristDetails} />
            <Route path='/tourists/create' component={NewTourist} />
            <Route path='/tourists/edit/:id' component={EditTourist} />
            <Route exact path='/flights' component={FlightsList} />
            <Route path='/flights/details/:id' component={FlightDetails} />
            <Route path='/flights/edit/:id' component={EditFlight} />
            <Route path='/flights/create' component={NewFlight} />
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default AppPage;