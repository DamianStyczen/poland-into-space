import React from 'react';
import { Link } from 'react-router-dom';

export default class TouristsTable extends React.Component {
    render() {
        const { tourists } = this.props;

        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Last name</th>
                        <th>First name</th>
                        <th> </th>
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
                                    <Link to={`/details/${tourist.id}`}>Details</Link>
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