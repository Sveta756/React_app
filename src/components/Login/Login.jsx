import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import { connect } from 'react-redux';
import {login} from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';


const validateLoginForm = values => {
   const errors = {};
   if (!values.email) {
      errors.email = 'Required value';
   } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test( values.email )
   ) {
      errors.email = 'Invalid email address';
   }
   return errors;
};

const validationSchemaLoginForm = Yup.object().shape( {

   password: Yup.string()
      .min( 2, "Must be longer than 2 characters" )
      .max( 20, "Must be shorter than 20 characters" )
      .required( "Required value" )
} );


const Login = (props) => {

   if(props.isAuth) {
      return <Redirect to={"/profile"}/>
   }

   return (
      <div>
         <h2>Login</h2>

         <Formik
            initialValues={{
               email: "",
               password: "",
               rememberMe: false
            }}
            validate={validateLoginForm}
            validationSchema={validationSchemaLoginForm}
            onSubmit={(values, {setSubmitting, setStatus}) => {
               props.login(values.email, values.password, values.rememberMe, setStatus);
               setSubmitting(false);
            }}
         >
            {({ status }) => (
               <Form>
                  <div>
                     <Field
                        name={'email'}
                        type={'text'}
                        placeholder={'e-mail'} />
                  </div>
                   <ErrorMessage name="email">
                     { msg => <div style={{ color: 'red' }}>{msg}</div> }
                  </ErrorMessage>

                  <div>
                     <Field
                        name={'password'}
                        type={'password'}
                        placeholder={'password'} />
                  </div>
                  {/* <ErrorMessage name="password" component="div" /> */}
                  <ErrorMessage name="password">
                     { msg => <div style={{ color: 'red' }}>{msg}</div> }
                  </ErrorMessage>

                  <div>
                     <Field
                        type={'checkbox'}
                        name={'rememberMe'}
                        id='rememberMe' />
                     <label htmlFor={'rememberMe'}> remember me </label>
                  </div>
                  <div>{status}</div>

                  <button type={'submit'}>Login</button>
               </Form>
            )}
         </Formik>

      </div>
   )
}
const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);