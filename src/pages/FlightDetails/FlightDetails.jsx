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
            }
        };
    }
    componentDidMount() {
        const { id } = this.props.match.params;

        fetch(`${HOST}/flights/${id}`)
            .then(res => res.json())
            .then(flight => {
                this.setState({ flight });
            });
    }
    onDelete = id => {
        fetch(`${HOST}/flights/${id}`, {
            method: "DELETE"
        });

    }
    render() {
        const { id, departureDateAndTime, arrivalDateAndTime, noOfSeats, listOfTourists, ticketPrice } = this.state.flight;

        return (
            <div>


                <table className="table" style={{ maxWidth: 400 }}>
                    <thead>
                        <th>Flight's details</th>
                        <th>
                            <Link to={`/flights/edit/${id}`} className="btn btn-default btn-sm">
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
            </div>
        );
    }
}