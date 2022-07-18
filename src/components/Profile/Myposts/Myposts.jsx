import s from './Myposts.module.css'
import Post from './Post/Post';
import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";

const validationSchemaPostForm = Yup.object().shape( {

	post: Yup.string()
	   .min( 2, "Must be longer than 2 characters" )
	   .max( 50, "Must be shorter than 5 characters" )
	   .required( "Required value" )
 } );
 
export const PostForm = (props) => {
	 let addNewPost = (values) => {
		 props.onAddPost( values);	
	 }
	return (
	   <div>
		  <Formik
			 initialValues={{
				post: ""
			 }}
			 validationSchema={validationSchemaPostForm}
			 onSubmit={(values,  {resetForm}) => {
				console.log( values )
				addNewPost(values.post)
				resetForm( {values: ''} );
			 }}
		  >
			 {() => (
				<Form>
				   <div>
					  <Field name={'post'} placeholder={'post'} as="textarea"/>
				   </div>
				   <ErrorMessage name="post">
						{ msg => <div style={{ color: 'red' }}>{msg}</div> }
					</ErrorMessage>
				   <button type={'submit'}>Add post</button>
				</Form>
			 )}
		  </Formik>
 
	   </div>
	)
 }

const Myposts = (props) => {

	let postsElement = props.posts.map(p => <Post key={p.id} message={p.message} like={p.likesCount}/>);

	return (
		<div className={s.descriptionBlock}>
			<h2>my posts</h2>
			<PostForm onAddPost={props.addPost}/>
			<div className={s.posts}>
				{postsElement}
			</div>
		</div>
	)
}

export default Myposts;