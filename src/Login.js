import React, { useState, useEffect } from 'react';
import './App.css';
import {  signInWithEmailAndPassword, signInWithPopup } from './firebase/auth';
import { NavLink, useNavigate } from 'react-router-dom'
import Home from './Home';
import {auth, provider} from './config'


function Login() {
	const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/home")
			sessionStorage.setItem('Auth Token', userCredential._tokenResponse.refreshToken)
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }

	// const [value, setValue] = useState('')
    // const handleClick = () => {
    //     signInWithPopup(auth, provider).then((data) => {
    //         setValue(data.user.email)
    //         localStorage.setItem("email", data.user.email)
	// 		navigate("/home")
    //     })
    // }

    // useEffect(() => {
    //     setValue(localStorage.getItem('email'))
    // })

	useEffect(() => {
		let authToken = sessionStorage.getItem('Auth Token')

		if(authToken)
		{
			navigate('/home')
		}
	}, [])

	return (
		<div class="h-screen md:flex">
		<div
			class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-purple-800 to-purple-900 i justify-around items-center hidden">
			<div>
				<h1 class="text-white font-bold text-4xl font-sans">VMeet</h1>
				<p class="text-white mt-1">Video Conferencing Anywhere</p>
				
			</div>
			<div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
			<div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
			<div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
			<div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		</div>
		<div class="flex md:w-1/2 justify-center py-5 items-center bg-white" id='boxcontain'>
			<form class="bg-white">
				<h1 class="text-gray-800 font-bold text-2xl mb-1">Hello!</h1>
				<p class="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
				
					
						<div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none"
								viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
							</svg>
							<div>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"                                    
                                    required                                                                                
                                    placeholder="Email address"
                                    onChange={(e)=>setEmail(e.target.value)}
									className='pl-2 outline-none border-none'
                                />
                            </div>
							{/* <input class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Email Address" /> */}
		</div>
							<div class="flex items-center border-2 py-2 px-3 rounded-2xl">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
									fill="currentColor">
									<path fill-rule="evenodd"
										d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
										clip-rule="evenodd" />
								</svg>
								<input
                                    id="password"
                                    name="password"
                                    type="password"                                    
                                    required                                                                                
                                    placeholder="Password"
                                    onChange={(e)=>setPassword(e.target.value)}
									className='pl-2 outline-none border-none'
                                />
								{/* <input class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Password" /> */}
		</div>
								<button type="submit" class="block w-full bg-purple-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2" onClick={onLogin}>Login</button>
								<p className="text-sm text-white text-center"></p>

								{/* <div>
            						<div class="flex items-center border-2 py-0 px-3 rounded-2xl mb-4 "> <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" preserveAspectRatio="none" viewBox="0 0 150 150"> <path fill="#4280ef" d="M120 76.1c0-3.1-.3-6.3-.8-9.3H75.9v17.7h24.8c-1 5.7-4.3 10.7-9.2 13.9l14.8 11.5C115 101.8 120 90 120 76.1z"/><path fill="#34a353" d="M75.9 120.9c12.4 0 22.8-4.1 30.4-11.1L91.5 98.4c-4.1 2.8-9.4 4.4-15.6 4.4-12 0-22.1-8.1-25.8-18.9L34.9 95.6c7.8 15.5 23.6 25.3 41 25.3z"/><path fill="#f6b704" d="M50.1 83.8c-1.9-5.7-1.9-11.9 0-17.6L34.9 54.4c-6.5 13-6.5 28.3 0 41.2l15.2-11.8z"/><path fill="#e54335" d="M75.9 47.3c6.5-.1 12.9 2.4 17.6 6.9L106.6 41c-8.3-7.8-19.3-12-30.7-11.9-17.4 0-33.2 9.8-41 25.3l15.2 11.8c3.7-10.9 13.8-18.9 25.8-18.9z"/></svg><button type="submit"  class=" text-gray-400" onClick={handleClick}>Sign in with Google</button></div>
								</div> */}

								<span class="text-sm ml-2 text-purple-900 hover:text-black-500 cursor-pointer font-semibold mb-2">                            
									No account yet? {' '}
									<NavLink to="/signup">
										Sign up
									</NavLink>
								</span>
				</form>
			</div>
		</div>
  );
}

export default Login;

  