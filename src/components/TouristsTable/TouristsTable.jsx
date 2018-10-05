import React from 'react';
import { Link } from 'react-router-dom';
import { HOST } from '../../constants';

export default class TouristsTable extends React.Component {

    onDelete = id => {
        fetch(`${HOST}/tourists/${id}`, {
            method: "DELETE"
        });

    }

    render() {
        const { tourists } = this.props;

        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Last name</th>
                        <th>First name</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tourists.map(tourist => (
                            <tr key={tourist.id}>
                                <td>{tourist.id}</td>
                                <td>{tourist.lastName}</td>
                                <td>{tourist.firstName}</td>
                                <td>
                                    <Link to={`/tourists/details/${tourist.id}`} className="btn btn-default btn-sm">
                                        <span className="glyphicon glyphicon-eye-open"></span> Details
                                    </Link>
                                    <Link to={`/tourists/edit/${tourist.id}`} className="btn btn-default btn-sm">
                                        <span className="glyphicon glyphicon-pencil"></span> Edit
                                    </Link>
                                    <button onClick={(e) => this.props.onDelete(tourist.id)} type="button" className="btn btn-default btn-sm">
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