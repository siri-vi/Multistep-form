import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Personal Details" />
          <TextField
            hintText="Enter your role"
            floatingLabelText="Role"
            onChange={handleChange("role")}
            defaultValue={values.role}
          />
          <br />
          <TextField
            hintText="Enter your Gender"
            floatingLabelText="Gender"
            onChange={handleChange("gender")}
            defaultValue={values.gender}
          />
          <br />
          <TextField
            hintText="Enter your Academic Details"
            floatingLabelText="Academic Details"
            onChange={handleChange("academicDetails")}
            defaultValue={values.academicDetails}
          />
          <br />
          <RaisedButton
            label="Back"
            primary={false}
            style={StyleSheet.button}
            onClick={this.back}
          />

          <RaisedButton
            label="Continue"
            primary={true}
            style={StyleSheet.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails;
