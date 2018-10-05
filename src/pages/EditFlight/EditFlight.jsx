import React from 'react';
import { HOST } from '../../constants';

export default class NewFlight extends React.Component {
    state = {
        departureDateAndTime: "",
        arrivalDateAndTime: "",
        noOfSeats: 0,
        ticketPrice: 0,
        listOfTourists: [],
    }

    componentDidMount() {
        const { id } = this.props.match.params;

        fetch(`${HOST}/flights/${id}`)
            .then(res => res.json())
            .then(flight => {
                this.setState({
                    departureDateAndTime: flight.departureDateAndTime,
                    arrivalDateAndTime: flight.arrivalDateAndTime,
                    noOfSeats: flight.noOfSeats,
                    ticketPrice: flight.ticketPrice,
                    listOfTourists: flight.listOfTourists,
                });
            });
    }
    onSubmit = e => {
        e.preventDefault();

        const { id } = this.props.match.params;

        fetch(`${HOST}/flights/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(this.state)
        }).then(() => {
            this.props.history.push('/flights')
        });

    }
    onChange = e => {
        const key = e.target.id;
        this.setState({ [key]: e.target.value });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} onChange={this.onChange}>
                <div className="form-group">
                    <label>Departure</label>
                    <input type="text" className="form-control" placeholder="Enter date and time (dd-mm-yyyy hh:mm)" id="departureDateAndTime" value={this.state.departureDateAndTime} />
                </div>
                <div className="form-group">
                    <label>Arrival</label>
                    <input type="text" className="form-control" placeholder="Enter date and time (dd-mm-yyyy hh:mm)" id="arrivalDateAndTime" value={this.state.arrivalDateAndTime} />
                </div>
                <div className="form-group">
                    <label>Number of Seats</label>
                    <input type="number" className="form-control" id="noOfSeats" placeholder="Enter number of seats" value={this.state.noOfSeats} />
                </div>
                <div className="form-group">
                    <label>Ticket Price</label>
                    <input type="number" className="form-control" id="ticketPrice" placeholder="Enter date of birth" value={this.state.ticketPrice} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}