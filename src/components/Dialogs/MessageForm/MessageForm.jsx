import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";


const validationSchemaMessageForm = Yup.object().shape( {

   message: Yup.string()
      .min( 2, "Must be longer than 2 characters" )
      .max( 50, "Must be shorter than 5 characters" )
      .required( "Required value" )
} );

const MessageForm = (props) => {
	let addNewMessage = (values) => {
		props.onAddMessage( values);	
	}
   return (
      <div>
         <Formik
            initialValues={{
				message: ""
            }}
            validationSchema={validationSchemaMessageForm}
            onSubmit={(values,  {resetForm}) => {
               console.log( values )
			      addNewMessage(values.message)
               resetForm( {values: ''} );
            }}
         >
            {() => (
               <Form>
                  <div>
                     <Field name={'message'} placeholder={'message'} as="textarea"/>
                  </div>
                  <ErrorMessage name="message">
                     { msg => <div style={{ color: 'red' }}>{msg}</div> }
                  </ErrorMessage>
                  <button type={'submit'}>Add message</button>
               </Form>
            )}
         </Formik>

      </div>
   )
}

export default MessageForm;