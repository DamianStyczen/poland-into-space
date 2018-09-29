import React from "react";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';
import TouristDetails from "../../components/TouristDetails/TouristDetails";
import TouristsList from "../../components/TouristsList/TouristsList";

class AppPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Poland Into Space!</h1>
        <HashRouter>
          <div>
            <Route exact path='/' component={TouristsList} />
            <Route path='/details/:id' component={TouristDetails} />
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default AppPage;