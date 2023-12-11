import React, { Component } from 'react';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            selectedFile: null,
            errors: {},
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleFileChange = (event) => {
        this.setState({ selectedFile: event.target.files[0] });
    };

    validateForm = () => {
        const { firstName, lastName, email, password, selectedFile } = this.state;
        const errors = {};

        if (!firstName.trim()) {
            errors.firstName = 'First name is required';
        }

        if (!lastName.trim()) {
            errors.lastName = 'Last name is required';
        }

        if (!email.trim()) {
            errors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            errors.email = 'Invalid email address';
        }

        if (!password.trim()) {
            errors.password = 'Password is required';
        }

        if (!selectedFile) {
            errors.selectedFile = 'CV upload is required';
        }

        this.setState({ errors });

        return Object.keys(errors).length === 0; // Form is valid if there are no errors
    };

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.validateForm()) {
            // Your form submission logic here
            console.log('Form submitted successfully:', this.state);
        } else {
            console.log('Form validation failed');
        }
    };

    render() {
        const { errors } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Sign Up</h3>

                <div className="mb-3">
                    <label>First name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                        name="firstName"
                        onChange={this.handleChange}
                    />
                    {errors.firstName && <div className="text-danger">{errors.firstName}</div>}
                </div>

                <div className="mb-3">
                    <label>Last name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Last name"
                        name="lastName"
                        onChange={this.handleChange}
                    />
                    {errors.lastName && <div className="text-danger">{errors.lastName}</div>}
                </div>

                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        name="email"
                        onChange={this.handleChange}
                    />
                    {errors.email && <div className="text-danger">{errors.email}</div>}
                </div>

                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        name="password"
                        onChange={this.handleChange}
                    />
                    {errors.password && <div className="text-danger">{errors.password}</div>}
                </div>

                <div className="mb-3">
                    <label>Upload your CV</label>
                    <input
                        type="file"
                        accept=".pdf"
                        onChange={this.handleFileChange}
                    />
                    {errors.selectedFile && <div className="text-danger">{errors.selectedFile}</div>}
                </div>

                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Sign Up
                    </button>
                </div>

                <p className="forgot-password text-right">
                    Already registered <a href="/signin">sign in?</a>
                </p>
            </form>
        );
    }
}
