/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import logoText from "../../assets/logoText.png";
import downAppStore from "../../assets/down1.png";
import downGooglePlay from "../../assets/down2.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../redux/slices/usersSlice";

export default function SignUp(){

    const dispatch = useDispatch();
    const {user, error, successMessage } = useSelector((state) => state.user);

    const [formData, setFormData] = useState({
        username: "",
        password: "",
        fullName: "",
        email: "",
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createUser(formData));
    }

    return(
        <div className="flex items-center justify-center">
            <div className="flex flex-col items-center w-[390px] sm:w-[400px] md:m-[4rem] md:border-2 md:border-gray-200 md:my-[1rem] md:rounded-md">
                <div className="w-full px-[7rem] mt-[2rem]">
                    <img src={logoText} alt="logoText" />
                </div>
                <div>
                    <p className="px-[3rem] text-gray-500 font-semibold text-center text-[1.05rem]">Sign up to see photos and videos from your friends.</p>
                </div>
                <div>
                    <button className="w-full px-[4rem] py-[.5rem] mt-[1rem] text-white text-sm font-semibold bg-[#0095F6] rounded-lg">Log in with Facebook</button>
                </div>
                <div className="flex items-center justify-center w-full mt-[1rem]">
                    <div className="w-[30%] h-[1px] bg-gray-300"></div>
                    <div className="mx-[.5rem] text-gray-500 font-semibold text-sm">OR</div>
                    <div className="w-[30%] h-[1px] bg-gray-300"></div>
                </div>
                <form className="flex flex-col items-center justify-center w-full px-[4rem] mt-[1rem] gap-[0.35rem] md:px-[2.5rem]" onSubmit={handleSubmit} >
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="input"
                        placeholder="Email"
                    />
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="input"
                        placeholder="Full Name"
                    />
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        className="input"
                        placeholder="Username"
                    />
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="input"
                        placeholder="Password"
                    />
                    <div className="flex flex-col gap-4 mt-[0.8rem]">
                        <p className="text-xs text-center text-gray-500 w-full">People who use our service may have uploaded your contact information to Instagram. <span className="text-blue-800">Learn more</span></p>
                        <p className="text-xs text-center text-gray-500 w-full">By signing up, you agree to our <span className="text-blue-800">Terms , Data Policy</span> and <span className="text-blue-800">Cookies Policy</span> .</p>
                    </div>
                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                    {successMessage && <p className="text-green-500 text-sm mt-2">{successMessage}</p>}
                    <button type="submit" className="w-full px-[5rem] py-[.5rem] mt-[1rem] text-white text-sm font-semibold bg-[#0095F6] rounded-lg">Sign Up</button>
                </form>
                <div className="flex flex-col items-center justify-center w-full px-[4rem] gap-[0.35rem] mt-[4rem]">
                    <p className="text-sm text-center text-gray-800 w-full">Have an account? <Link to="/login" className="text-blue-800">Log in</Link></p>
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