import React from "react";
import { HOST } from "../../constants";
import { Link } from 'react-router-dom';

export default class FlightDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flight: {
                id: 0,
                departureDateAndTime: "",
                arrivalDateAndTime: "",
                noOfSeats: "",
                remarks: "",
                listOfTourists: [],
                ticketPrice: ""
            },
            listOfPassengers: []
        };
    }
    componentDidMount() {
        const { id } = this.props.match.params;
        fetch(`${HOST}/flights/${id}`)
            .then(res => res.json())
            .then(flight => {
                this.setState({ flight });
            }).then(() => {
                this.state.flight.listOfTourists.forEach(id => {
                    fetch(`${HOST}/tourists/${id}`)
                        .then(res => res.json())
                        .then(tourist => {
                            const newList = this.state.listOfPassengers;
                            newList.push(tourist);
                            this.setState({ listOfPassengers: newList });
                        })
                })
            })
    }
    onFlightDelete = id => {
        fetch(`${HOST}/flights/${id}`, {
            method: "DELETE"
        });

    }
    onPassengerDelete = id => {
        let newFlight = Object.assign({}, this.state.flight);
        newFlight.listOfTourists = newFlight.listOfTourists.filter(tourist => tourist !== id);
        this.setState({
            flight: newFlight,
            listOfPassengers: this.state.listOfPassengers.filter(passenger => passenger.id !== id)
        })
        fetch(`${HOST}/flights/${this.state.flight.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(newFlight)
        });




    }
    render() {
        const { id, departureDateAndTime, arrivalDateAndTime, noOfSeats, listOfTourists, ticketPrice } = this.state.flight;

        return (
            <div>


                <table className="table" style={{ maxWidth: 600 }}>
                    <thead>

                        <tr>
                            <th>Flight's details </th>
                            <th>
                                <Link to={`/flights/edit/${id}`} className="btn btn-default btn-sm">
                                    <span className="glyphicon glyphicon-pencil"></span> Edit
              </Link>
                                <button onClick={(e) => this.onFlightDelete(id)} type="button" className="btn btn-default btn-sm">
                                    <span className="glyphicon glyphicon-trash"></span> Delete
        </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>ID:</th>
                            <td>{id}</td>
                        </tr>
                        <tr>
                            <th>Departure:</th>
                            <td>{departureDateAndTime}</td>
                        </tr>
                        <tr>
                            <th>Arrival:</th>
                            <td>{arrivalDateAndTime}</td>
                        </tr>
                        <tr>
                            <th>Seats:</th>
                            <td>{noOfSeats}</td>
                        </tr>
                        <tr>
                            <th>Ticket Price:</th>
                            <td>{ticketPrice}</td>
                        </tr>
                        <tr>
                            <th>List of Tourists:</th>
                            <td>{listOfTourists}</td>
                        </tr>
                    </tbody>
                </table>


                <table className="table">
                    <thead>
                        <tr>
                            <th>List of Passengers</th>
                            <th><Link to='tourists/create' className="btn btn-default btn-sm">
                                <span className="glyphicon glyphicon-plus"></span> Add new passenger
                </Link></th>

                        </tr>
                        <tr>
                            <th>ID</th>
                            <th>Last Name</th>
                            <th>First Name</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.listOfPassengers.map(passenger => {
                            return (<tr>
                                <td>{passenger.id}</td>
                                <td>{passenger.lastName}</td>
                                <td>{passenger.firstName}</td>
                                <button onClick={(e) => this.onPassengerDelete(passenger.id)} type="button" className="btn btn-default btn-sm">
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