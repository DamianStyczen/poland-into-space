import React from "react";
const TouristsList = require('../../components/TouristsList/TouristsList');

class AppPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Poland Into Space!</h1>
        <TouristsList />
      </div>
    );
  }
}

export default AppPage;