import React, { useState } from 'react'
import axios from 'axios';

function Login() {

    const [userDetails, setuserDetails] = useState({
        email: "", password: ""
    })

    let name, value;

    const handleInput = (e) => {
        name = e.target.name;
        value = e.target.value;

        setuserDetails({ ...userDetails, [name]: value });
    }

    const PostData = async (e) => {
        e.preventDefault();

        const { email, password } = userDetails;

        const res = await axios.post("/api/auth/login", { email, password }).
            then(function (response) {
                console.log(response.status);
            }).catch(function (error) {
                console.log(error);
            });
            
    }

    return (
        <>
            <>
                <div className='w-full h-screen flex justify-center items-center shadow-xl'>
                    <div className='w-[30%] rounded-xl bg-white p-14'>
                        <div className='text-xl border-b pb-5 border-slate-300'>
                            Log In
                        </div>

                        <form className='pt-5'>

                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email address</label>
                                <input type="email" name='email' id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required onChange={handleInput} />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                <input type="password" name='password' id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required onChange={handleInput} />
                            </div>

                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={PostData}>Log In</button>
                        </form>
                    </div>
                </div>
            </>
        </>
    )
}

export default Login
