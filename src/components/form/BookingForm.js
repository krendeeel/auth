import React, { PureComponent } from "react";
import { Formik } from "formik";
import DisplayBookingForm from "./DisplayBookingForm";


const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: ''
};

export default class BookingForm extends PureComponent {
  handleSubmit = formProps => {
    const { firstName, lastName, email, password } = formProps;
    let data = {
            firstname: firstName,
            lastname: lastName,
            login: email,
            password: password
    }
    this.props.sent(data)
  };

  render = () => (
    <Formik
      initialValues={initialValues}
      onSubmit={this.handleSubmit}
      render={DisplayBookingForm}
    />
  );
}


