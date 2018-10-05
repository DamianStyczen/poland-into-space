import React from "react";
import { Link } from 'react-router-dom';
import { HOST } from '../../constants';
import TouristsTable from "../../components/TouristsTable/TouristsTable";

export default class TouristsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tourists: []
        };
    }

    render() {
        return (
            <div>
                <Link to='tourists/create' className="btn btn-default btn-md">
                    <span className="glyphicon glyphicon-plus"></span> Add new tourist
                </Link>
                <TouristsTable tourists={this.state.tourists} onDelete={this.onDelete} />

            </div>
        );
    }
    onDelete = id => {
        fetch(`${HOST}/tourists/${id}`, {
            method: "DELETE"
        }).then(() => {
            this.setState({ tourists: this.state.tourists.filter(t => t.id !== id) });
        })

    }
    componentDidMount() {
        fetch(`${HOST}/tourists`)
            .then(resp => resp.json())
            .then(tourists => {
                console.log("Fetched tourists:", tourists);
                this.setState({ tourists });
            });
    }
}
