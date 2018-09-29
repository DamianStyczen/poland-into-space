import React from "react";
import { HOST } from "../../constants";

export default class TouristDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tourist: {
        id: 0,
        firstName: "",
        lastName: "",
        gender: "",
        country: "",
        remarks: "",
        dateOfBirth: "",
        listOfFlights: ""
      }
    };
  }
  componentDidMount() {
    const { id } = this.props.match.params;

    fetch(`${HOST}/tourists/${id}`)
      .then(res => res.json())
      .then(tourist => {
        this.setState({ tourist });
      });
  }
  render() {
    const { firstName, lastName, gender, country, remarks, dateOfBirth, listOfFlights } = this.state.tourist;

    return (
      <div className="details">
        <div><span>Imie: {firstName}</span></div>
        <div><span>Imie: {lastName}</span></div>
        <div><span>Imie: {gender}</span></div>
        <div><span>Imie: {country}</span></div>
        <div><span>Imie: {firstName}</span></div>
        <div><span>Imie: {remarks}</span></div>
        <div><span>Imie: {dateOfBirth}</span></div>
        <div><span>Imie: {listOfFlights}</span></div>
      </div>
    );
  }
}