import React from "react";
import TouristsTable from "../TouristsTable/ToursitsTable";
import { HOST } from '../../constants';

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
                <TouristsTable tourists={this.state.tourists} />

            </div>
        );
    }
    handleClick = (event, id) => {
        console.log("clicked", id);
        this.setState({
            detailsId: id,
            detailsWindow: true
        });
    };
    componentDidMount() {
        fetch(`${HOST}/tourists`)
            .then(resp => resp.json())
            .then(tourists => {
                console.log("Fetched tourists:", tourists);
                this.setState({ tourists });
            });
    }
}
