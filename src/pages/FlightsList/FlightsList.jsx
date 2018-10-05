import React from "react";
import { Link } from 'react-router-dom';
import { HOST } from '../../constants';
import FlightsTable from "../../components/FlightsTable/FlightsTable";

export default class FligthsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flights: []
        };
    }

    render() {
        return (
            <div>
                <Link to='flights/create' className="btn btn-default btn-md">
                    <span className="glyphicon glyphicon-plus"></span> Add new flight
                </Link>
                <FlightsTable flights={this.state.flights} onDelete={this.onDelete} />

            </div>
        );
    }
    onDelete = id => {
        fetch(`${HOST}/flights/${id}`, {
            method: "DELETE"
        }).then(() => {
            this.setState({ flights: this.state.flights.filter(f => f.id !== id) });
        })

    }
    componentDidMount() {
        fetch(`${HOST}/flights`)
            .then(resp => resp.json())
            .then(flights => {
                this.setState({ flights });
            });
    }
}
