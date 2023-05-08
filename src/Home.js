import React, { useEffect } from 'react';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Home(){
	const logout = () => {
		sessionStorage.removeItem('Auth Token')
		navigate("/login")
	}
	let navigate = useNavigate();

	useEffect(() => {
		let authToken = sessionStorage.getItem('Auth Token')
		console.log(authToken)

		if(authToken)
		{
			navigate('/home')
		}
		if(!authToken)
		{
			navigate('/login')
		}
	}, [])

	// join functionality
	const [link, setLink] = useState('');
	const handleLinkChange = (event) => {
		setLink(event.target.value);
	  };
	
	  const handleOpenLink = () => {
		window.open(link);
	  };

	  //--------------------

	const redirectRoom = () => {
		navigate('/room')
		window.location.reload()
	}

	return(
		<section class="text-gray-600 body-font">
			<button onClick={logout} class="inline-flex text-white bg-purple-500 hover:bg-red-600 border-0 py-2 px-6 focus:outline-none rounded text-lg m-3 float-right justify-end">Logout</button>
			<div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
			<div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
				<h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">VMeet Video Conference Anywhere
				<br class="hidden lg:inline-block"/>Create / Join Meeting Rooms
				</h1>

				<div class="mb-4">
					<input class="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline max-w-md" id="username" type="text" placeholder="Enter Link" value={link} onChange={handleLinkChange}/>
				</div>

				<div class="flex justify-center">
					<button class="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg" onClick={redirectRoom}>Create</button>
					<button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg" onClick={handleOpenLink}>Join</button>
				</div>
			</div>

			<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
				<img class="object-cover object-center rounded" alt="hero" src="https://img.freepik.com/free-vector/online-meetup-abstract-concept-vector-illustration-conference-call-join-meetup-group-video-call-online-service-distance-communication-informal-meeting-members-networking-abstract-metaphor_335657-2920.jpg?w=2000"/>
			</div>
			
			</div>
	  </section>
	)
}

export default Home;