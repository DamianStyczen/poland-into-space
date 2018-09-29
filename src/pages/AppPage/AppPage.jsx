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

class AppPage extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Poland Into Space!</h1>
        <HashRouter>
          <div>
            <Route exact path='/' component={TouristsList} />
            <Route path='/details/:id' component={TouristDetails} />
            <Route path='/create' component={NewTourist} />
            <Route path='/edit/:id' component={EditTourist} />
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default AppPage;