import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class FormLocationDetails extends Component {
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
          <AppBar title="Enter Location Details" />
          <TextField
            hintText="Enter your location"
            floatingLabelText="Location"
            onChange={handleChange("location")}
            defaultValue={values.location}
          />
          <br />
          <TextField
            hintText="Enter your hometown"
            floatingLabelText="Hometown"
            onChange={handleChange("hometown")}
            defaultValue={values.hometown}
          />
          <br />
          <TextField
            hintText="Enter your country"
            floatingLabelText="Country"
            onChange={handleChange("country")}
            defaultValue={values.country}
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

export default FormLocationDetails;
