import React, { Component } from "react";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            rememberMe: false,
            errors: {},
        };
    }

    handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        const val = type === "checkbox" ? checked : value;

        this.setState({
            [name]: val,
            errors: {
                ...this.state.errors,
                [name]: "", // Clear the previous error when the field is updated
            },
        });
    };

    validateForm = () => {
        const { email, password } = this.state;
        const errors = {};

        if (!email.trim()) {
            errors.email = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            errors.email = "Invalid email address";
        }

        if (!password.trim()) {
            errors.password = "Password is required";
        }

        this.setState({ errors });
        return Object.keys(errors).length === 0;
    };

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.validateForm()) {
            // Your form submission logic here
            console.log("Form submitted successfully:", this.state);
        } else {
            console.log("Form validation failed");
        }
    };

    render() {
        const { errors } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Sign In</h3>

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
                    <div className="custom-control custom-checkbox">
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                            name="rememberMe"
                            onChange={this.handleChange}
                        />
                        <label className="custom-control-label" htmlFor="customCheck1">
                            Remember me
                        </label>
                    </div>
                </div>

                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>

                <p className="forgot-password text-right">
                    <a href="#">Forgot password?</a>
                </p>
            </form>
        );
    }
}
