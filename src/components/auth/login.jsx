/* eslint-disable no-unused-vars */
import React from 'react';
import { useState, useEffect } from "react";
import logoText from "../../assets/logoText.png";
import downAppStore from "../../assets/down1.png";
import downGooglePlay from "../../assets/down2.png";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/slices/usersSlice';
import { Link } from 'react-router-dom';

export default function Login () {

    const dispatch = useDispatch();
    
    const {error, currentUser} = useSelector((state) => state.user);

    const [user, setUser] = useState({
        username: "",
        password: "",
      });
    
      const handleInputChange = (e) => {
        setUser({
          ...user,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(loginUser(user));
      };

    return (
        <div className="flex items-center justify-center  h-full">
            <div className="flex flex-col items-center w-[390px] sm:w-[400px] md:m-[4rem] md:border-2 md:border-gray-200 md:my-[1rem] md:rounded-md">
                <div className="w-full px-[7rem] mt-[2rem]">
                    <img src={logoText} alt="logoText" />
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-full px-[4rem] mt-[1rem] gap-[0.35rem] md:px-[2.5rem]" >
                    <input
                        type="username"
                        name="username"
                        className="input"
                        placeholder="Username"
                        onChange={handleInputChange}
                    />
                    <input
                        type="password"
                        name="password"
                        className="input"
                        placeholder="Password"
                        onChange={handleInputChange}
                    />
                    {error && <p className="text-red-500">{error}</p>}
                    <div className="flex flex-col gap-4 mt-[0.8rem]">
                        <p className="text-xs text-center text-gray-500 w-full">People who use our service may have uploaded your contact information to Instagram. <span className="text-blue-800">Learn more</span></p>
                    </div>
                {currentUser.username !== "" ? (
                    <Link to="/home">
                    <button
                        className="w-full px-[5rem] py-[.5rem] mt-[1rem] text-white text-sm font-semibold bg-[#0095F6] rounded-lg"
                    >
                        Take me to homepage
                    </button>
                    </Link>
                ) : (
                    <button
                        type="submit"
                        className="w-full px-[5rem] py-[.5rem] mt-[1rem] text-white text-sm font-semibold bg-[#0095F6] rounded-lg"
                    >
                        Login
                    </button>
                )}
                </form>
                <div className="flex items-center justify-center w-full mt-[1rem]">
                    <div className="w-[30%] h-[1px] bg-gray-300"></div>
                    <div className="mx-[.5rem] text-gray-500 font-semibold text-sm">OR</div>
                    <div className="w-[30%] h-[1px] bg-gray-300"></div>
                </div>
                <div>
                    <button className="w-full px-[4rem] md:px-[5.5rem] py-[.5rem] mt-[1rem] text-white text-sm font-semibold bg-[#0095F6] rounded-lg">Log in with Facebook</button>
                </div>
                <div className="flex flex-col items-center justify-center w-full px-[4rem] gap-[0.35rem] mt-[4rem]">
                   <div className="flex items-center justify-center gap-2 text-gray-500">
                        Don't have an account?
                        <Link to="/" className="text-[#0095F6]">Sign up</Link>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center w-full px-[4rem] gap-[0.35rem] mt-[4rem]">
                </div>
                <div className="flex flex-col items-center justify-center w-full px-[4rem] mt-[2rem] gap-[0.35rem] md:mb-[3rem]">
                    <p className="text-sm text-center text-gray-800 w-full">Get the app.</p>
                    <div className="flex items-center justify-center gap-2 mt-[0.8rem]">
                        <img className="w-[50%]" src={downAppStore} alt="downAppStore" />
                        <img className="w-[50%]" src={downGooglePlay} alt="downGooglePlay" />
                    </div>
                </div>
            </div>
        </div>
    )
}