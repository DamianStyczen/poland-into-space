import React from 'react';
import { Link } from 'react-router-dom';
import { HOST } from '../../constants';

export default class FlightsTable extends React.Component {

    onDelete = id => {
        fetch(`${HOST}/flights/${id}`, {
            method: "DELETE"
        });

    }

    render() {
        const { flights } = this.props;

        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Departure</th>
                        <th>Arrival</th>
                        <th>Ticket price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        flights.map(flight => (
                            <tr key={flight.id}>
                                <td>{flight.departureDateAndTime}</td>
                                <td>{flight.arrivalDateAndTime}</td>
                                <td>
                                    <button type="button" className="btn btn-default btn-sm">
                                        <span className="glyphicon glyphicon-eye-open"></span>
                                        <Link to={`/flights/details/${flight.id}`}> Details</Link>
                                    </button>
                                    <button type="button" className="btn btn-default btn-sm">
                                        <span className="glyphicon glyphicon-pencil"></span>
                                        <Link to={`/flights/edit/${flight.id}`}> Edit</Link>
                                    </button>
                                    <button onClick={(e) => this.props.onDelete(flight.id)} type="button" className="btn btn-default btn-sm">
                                        <span className="glyphicon glyphicon-trash"></span> Delete
                                    </button>
                                </td>
                            </tr>
                        )
                        )
                    }
                </tbody>
            </table>
        )
    }
}