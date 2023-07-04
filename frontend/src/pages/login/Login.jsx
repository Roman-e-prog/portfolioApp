import React,{useEffect} from 'react';
import './login.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {login, reset} from '../../features/auth/authSlice';
const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {user, isError, isSuccess, message} = useSelector((state)=>state.auth);
   
    useEffect(()=>{
      if(isError){
        window.alert(message);
      }
      if(user && user.isAdmin){
        navigate("/dashboard");
      }
      dispatch(reset());
    }, [ user, isError, isSuccess, message, navigate, dispatch]);
    const initialValues = {
        username:"",
        email:"",
        passwort:"", 
    }
    const LoginSchema = Yup.object().shape({
        username:Yup.string().required("Bitte gib deinen usernamen ein"),
        email: Yup.string().email('Invalid email').required('Required'),
        passwort:Yup.string().required("Bitte gib dein Passwort ein"),
    })
    const onSubmit = (values)=>{
        const loginData = {
            username:values.username,
            email:values.email,
            passwort:values.passwort,
        }
        dispatch(login(loginData))
    }
  return (
    <div className='login-container'>
        <div className="title-holder">
            <h3>Login</h3>
        </div>
        <div className="login-wrapper">
            <Formik 
            initialValues={initialValues}
            validationSchema={LoginSchema}
            onSubmit={onSubmit}
            >
               {({isSubmitting})=>(
                <Form id="form">
                    <div className="formGroup-login">
                        <label htmlFor='username'>Username</label>
                        <Field name='username' className="input"/>
                        <ErrorMessage name='username' content='div' className='error'/>
                    </div>
                    <div className="formGroup-login">
                        <label htmlFor='email'>Email</label>
                        <Field name='email' type="email" className="input"/>
                        <ErrorMessage name='email' content='div' className='error'/>
                    </div>
                    <div className="formGroup-login">
                        <label htmlFor='passwort'>Passwort</label>
                        <Field name='passwort' type="password" className="input"/>
                        <ErrorMessage name='passwort' content='div' className='error'/>
                    </div>
                    <button type='submit' disabled={isSubmitting}>Absenden</button>
                </Form>
               )}
            </Formik>
        </div>
      
    </div>
  )
}

export default Login

