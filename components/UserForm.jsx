import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import FormLocationDetails from "./FormLocationDetails";

export class UserForm extends Component {
  state = {
    step: 1,
    name: "",
    email: "",
    phone: "",
    role: "",
    gender: "",
    academicDetails: "",
    location: "",
    hometown: "",
    country: "",
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      name,
      email,
      phone,
      role,
      gender,
      academicDetails,
      location,
      hometown,
      country,
    } = this.state;
    const values = {
      name,
      email,
      phone,
      role,
      gender,
      academicDetails,
      location,
      hometown,
      country,
    };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <FormLocationDetails
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return <h1>Details successfully added </h1>;
    }
    return <div>UserForm</div>;
  }
}

export default UserForm;
