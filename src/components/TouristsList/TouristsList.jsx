import React from "react";
import DetailsWindow from "./detailsWindow.jsx";

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
                {
                    this.state.detailsWindow &&
                    <DetailsWindow
                        item={this.state.tourists.find(
                            element => element.id == this.state.detailsId
                        )}
                    />
                }
                <table className="touristsTable">
                    <thead>
                        <tr>
                            <th>Last name</th>
                            <th>First name</th>
                            <th> </th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tourists.map(element => {
                            return (
                                <tr key={element.id}>
                                    <td>{element.lastName}</td>
                                    <td>{element.firstName}</td>
                                    <td>
                                        <button onClick={(e) => this.handleClick(e, element.id)}>Details</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
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
        fetch("http://localhost:3000/tourists")
            .then(resp => resp.json())
            .then(result => {
                console.log("Fetched tourists:", result);
                this.setState({ items: result });
            });
    }
}
