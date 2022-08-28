import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Label, Button } from '../../components'
import { AuthContext } from '../../contexts';

export const LoginPage = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const onLogin = (e) => {
        e.preventDefault();
        console.log('You clicked submit.');
        
        login('test@test.com', '1234');
        
        navigate('/');
    }

    return (
        <>
            <h2 className='text-2xl md:text-3xl font-bold'>Welcome Back</h2>
            <p className='text-sm text-gray-500 pb-6'>Please sign in to your account</p>
            <form className='space-y-7 text-left' onSubmit={onLogin}>
                <div>
                    <Label description="Email address" htmlFor='email' />
                    <Input
                        id='email'
                        sytles="block mt-2 w-full"
                        placeholder='Enter your email'
                        autoFocus={true}
                    />
                </div>
                <div>
                    <Label description="Password" htmlFor='password' />
                    <Input
                        id='password'
                        type="password"
                        sytles="block mt-2 w-full"
                        placeholder='Enter your password'
                    />
                </div>
                <div className='pt-4 flex justify-center'>
                    <Button name='Sing in' styles='w-3/5' />
                </div>
            </form>
        </>
    );
}
