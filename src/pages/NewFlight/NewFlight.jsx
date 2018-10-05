import React from 'react';
import { HOST } from '../../constants';

export default class NewFlight extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        gender: "",
        country: "",
        remarks: "",
        dateOfBirth: ""
    }


    onSubmit = e => {
        e.preventDefault();


        fetch(`${HOST}/flights`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(this.state)
        }).then(() => {
            this.props.history.push('/')
        });

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