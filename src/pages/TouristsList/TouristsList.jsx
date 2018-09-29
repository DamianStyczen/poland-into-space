import React from "react";
import { Link } from 'react-router-dom';
import { HOST } from '../../constants';
import TouristsTable from "../../components/TouristsTable/ToursitsTable";

export default class TouristsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tourists: [],
            detailsWindow: false,
            detailsId: -1
        };
    }

    render() {
        return (
            <div>
                <Link to='/create'>Dodaj turystę</Link>
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
