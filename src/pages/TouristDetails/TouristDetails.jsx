import React from "react";
import { HOST } from "../../constants";
import { Link } from 'react-router-dom';

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
        listOfFlights: []
      },
      listOfFlights: []
    };
  }
  componentDidMount() {
    const { id } = this.props.match.params;

    fetch(`${HOST}/tourists/${id}`)
      .then(res => res.json())
      .then(tourist => {
        this.setState({ tourist });
      }).then(() => {
        this.state.tourist.listOfFlights.forEach(f => {
          fetch(`${HOST}/flights/${f}`)
            .then(res => res.json())
            .then(flight => {
              console.log(flight);
              const newList = this.state.listOfFlights;
              newList.push(flight);
              this.setState({ listOfFlights: newList });
            })
        })
      })
  }
  onDelete = id => {
    fetch(`${HOST}/tourists/${id}`, {
      method: "DELETE"
    });

  }
  render() {
    const { id, firstName, lastName, gender, country, remarks, dateOfBirth, listOfFlights } = this.state.tourist;

    return (
      <div className="align-items-center">


        <table className="table" style={{ maxWidth: 600 }}>
          <thead>
            <th>Tourist's details</th>
            <th>
              <Link to={`/tourists/edit/${id}`} className="btn btn-default btn-sm">
                <span className="glyphicon glyphicon-pencil"></span> Edit
              </Link>
              <button onClick={(e) => this.onDelete(id)} type="button" className="btn btn-default btn-sm">
                <span className="glyphicon glyphicon-trash"></span> Delete
        </button>
            </th>
          </thead>
          <tbody>
            <tr>
              <th>ID:</th>
              <td>{id}</td>
            </tr>
            <tr>
              <th>First Name:</th>
              <td>{firstName}</td>
            </tr>
            <tr>
              <th>Last Name:</th>
              <td>{lastName}</td>
            </tr>
            <tr>
              <th>Gender:</th>
              <td>{gender}</td>
            </tr>
            <tr>
              <th>Country:</th>
              <td>{country}</td>
            </tr>
            <tr>
              <th>Date of Birth:</th>
              <td>{dateOfBirth}</td>
            </tr>
            <tr>
              <th>Remarks:</th>
              <td>{remarks}</td>
            </tr>
          </tbody>
        </table>

        <table className="table">
          <thead>
            <tr>
              <th>List of Flights</th>
              <th>
                <Link to='flight/create' className="btn btn-default btn-sm">
                  <span className="glyphicon glyphicon-plus"></span> Add new flight
                </Link>
              </th>

            </tr>
            <tr>
              <th>ID</th>
              <th>Departure</th>
              <th>Arrival</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.listOfFlights.map(flight => {
              return (<tr>
                <td>{flight.id}</td>
                <td>{flight.departureDateAndTime}</td>
                <td>{flight.arrivalDateAndTime}</td>
                <button onClick={(e) => this.onFlightDelete(flights.id)} type="button" className="btn btn-default btn-sm">
                  <span className="glyphicon glyphicon-trash"></span> Delete
                                    </button>
              </tr>)
            })}
          </tbody>

        </table>
      </div>
    );
  }
}