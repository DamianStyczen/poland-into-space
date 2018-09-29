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
                        <th>Last name</th>
                        <th>First name</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tourists.map(tourist => (
                            <tr key={tourist.id}>
                                <td>{tourist.lastName}</td>
                                <td>{tourist.firstName}</td>
                                <td>
                                    <button type="button" className="btn btn-default btn-sm">
                                        <span className="glyphicon glyphicon-eye-open"></span>
                                        <Link to={`/details/${tourist.id}`}> Details</Link>
                                    </button>
                                    <button type="button" className="btn btn-default btn-sm">
                                        <span className="glyphicon glyphicon-pencil"></span>
                                        <Link to={`/edit/${tourist.id}`}> Edit</Link>
                                    </button>
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