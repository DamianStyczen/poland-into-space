import React from 'react';
import { HOST } from '../../constants';

export default class NewTourist extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        gender: "",
        country: "",
        remarks: "",
        dateOfBirth: ""
    }

    componentDidMount() {
        const { id } = this.props.match.params;

        fetch(`${HOST}/tourists/${id}`)
            .then(res => res.json())
            .then(tourist => {
                this.setState({
                    firstName: tourist.firstName,
                    lastName: tourist.lastName,
                    gender: tourist.gender,
                    country: tourist.country,
                    remarks: tourist.remarks,
                    dateOfBirth: tourist.dateOfBirth
                });
            });
    }
    onSubmit = e => {
        e.preventDefault();

        const { id } = this.props.match.params;

        fetch(`${HOST}/tourists/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(this.state)
        }).then(() => {
            this.props.history.push('/')
        });

    }
    onChange = e => {
        const key = e.target.id;

        if (e.target.type === 'radio') {
            return this.setState({ gender: e.target.id });
        }

        this.setState({ [key]: e.target.value });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} onChange={this.onChange}>
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" className="form-control" placeholder="Enter last name" id="lastName" value={this.state.lastName} />
                </div>
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" className="form-control" placeholder="Enter first name" id="firstName" value={this.state.firstName} />
                </div>
                <div className="form-group">
                    <div className="radio">
                        <label><input type="radio" id="male" name="gender" checked={this.state.gender === "male"} />Male</label>
                    </div>
                    <div className="radio">
                        <label><input type="radio" id="female" name="gender" checked={this.state.gender === "female"} />Female</label>
                    </div>
                </div>
                <div className="form-group">
                    <label>Country</label>
                    <input type="text" className="form-control" id="country" placeholder="Enter country" value={this.state.country} />
                </div>
                <div className="form-group">
                    <label>Date of Birth</label>
                    <input type="date" className="form-control" id="dateOfBirth" placeholder="Enter date of birth" value={this.state.dateOfBirth} />
                </div>
                <div className="form-group">
                    <label>Remarks</label>
                    <textarea className="form-control" id="remarks" rows="3" value={this.state.remarks}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}