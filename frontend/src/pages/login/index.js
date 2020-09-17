import React, {useState, useEffect} from 'react'
import {
	useHistory
} from 'react-router-dom';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import {
    SignInContainer,
    MainContainer,
    SignInTitle,
    ButtonsBarContainer
  } from './login.styles';


const Login = () => {
    const history = useHistory();
    
    const [userData , setUserData] = useState({
        email : "",
        password : "",
        successMessage: null
    })
    useEffect(() => {
		if(localStorage.getItem('isAuthenticated')) {
			return history.push('/dashboard');
		}
	}, []);
    const handleChange = event => {
		setUserData({
			...userData,
			[event.target.name]: event.target.value
		});
    }
    
    const handleSubmit = event => {
		event.preventDefault();
        if(userData.username === '' || userData.password === '') {
            setUserData({
                successMessage: "No se pudo loguear"
            });
            return;
        }
        localStorage.setItem('isAuthenticated', true)
		localStorage.setItem('user', JSON.stringify(userData));
        //history.push('/dashboard');
        window.location = '/dashboard';
	}
    return (
        <SignInContainer>
            <MainContainer>
                <SignInTitle>Bienvendios</SignInTitle>
                <form onSubmit={handleSubmit}>
                    <FormInput
                        name='email'
                        type='text'
                        handleChange={handleChange}
                        value={userData.email}
                        label='username'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={userData.password}
                        handleChange={handleChange}
                        label='password'
                        required
                    />
                    <ButtonsBarContainer>
                        <CustomButton type='submit'> Ingresar</CustomButton>
                    </ButtonsBarContainer>
                </form>
            </MainContainer>
        </SignInContainer>
    )
}

export default Login
