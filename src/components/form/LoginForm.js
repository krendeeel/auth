import React, { PureComponent } from "react";
import { Formik } from "formik";
import DisplayLoginForm from "./DisplayLoginForm";


const initialValues = {
  email: "",
  password: ""
};

export default class LoginForm extends PureComponent {
    handleSubmit = formProps => {
        const { email, password } = formProps;
        
        let data = {"login": email,"password": password}
        this.props.sent(data)
    };
  
    render = () => (
        <Formik
          initialValues={initialValues}
          onSubmit={this.handleSubmit}
          render={DisplayLoginForm}
        />  
    );
  }