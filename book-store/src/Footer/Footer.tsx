import "./Footer.css";
import React from "react";
import {FaFacebookSquare} from "react-icons/fa";
import {FaLinkedin, FaSquareInstagram, FaSquareXTwitter} from "react-icons/fa6";
import {IoLogoLinkedin} from "react-icons/io";
import {BsYoutube} from "react-icons/bs";
import {SiLinkedin} from "react-icons/si";
import {ImLinkedin} from "react-icons/im";
export function Footer() {
    return (
        <div className="bg-emerald-700 text-white">
            <div className="container ">
                <div className="grid lg:grid-cols-2  py-5 mt-10  border-b-2 ">
                    <div className="py-8 px-4 w-full">
                        <h1 className="sm:text-3xl text-xl font-bold sm:text-left mb-3 px-20 ">
                            Books.
                        </h1>
                        <div className="flex justify-between px-20  ">
                            <div className="mx-10">
                                <h1 className="text-xl font-bold">Address:</h1>
                                <p>Books</p>
                                <p>Main Street</p>
                                <p>Galle Road</p>
                                <p>Colombo 05</p>

                                <h1 className="text-xl font-bold mt-5">Contact:</h1>
                                <p>+9411-1234567</p>
                            </div>
                            <div>
                                <h1 className="text-xl font-bold">More Information</h1>
                                <p>Customer Service</p>
                                <p>Find Nearest Books Branch</p>
                                <p>Social Activities</p>
                                <p>Guide To Be a Partner</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center text-3xl gap-2 mt-3">
                            <div><FaFacebookSquare /></div>
                            <div><FaSquareInstagram /></div>
                            <div><FaLinkedin /></div>
                            <div><FaSquareXTwitter /></div>

                        </div>

                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <h1 className="font-bold">Get the latest news about our books</h1>

                        <form className="rounded px-8 pt-3 pb-8 ">
                            <div className="flex justify-center items-center gap-3">
                                <input
                                    className="shadow border rounded  py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
                                    id="username" type="email" placeholder="Enter your e-mail in here "/>
                                <button type="button" className="border-2 px-3 py-1 rounded-lg bg-red-500 hover:bg-red-700 duration-300 text-white">SUBSCRIBE</button>

                            </div>
                        </form>
                        <div className="flex items-center  justify-center ">
                            <label className="md:w-2/3 block text-gray-500 font-bold">
                                <input className="mr-2 leading-tight" type="checkbox"/>
                                <span className="text-sm text-white">
                                             Send me more details about the promotions those are related to the our content
                                        </span>
                            </label>
                        </div>
                    </div>

                </div>
                <div className="py-3 flex justify-between items-center px-5">
                    <div className="px-5">
                        <h1>Copyright &copy; 2023 Books.All Rights Reserved. </h1>

                    </div>
                    <div  className="flex justify-center items-center gap-5 px-5" >
                    <h1>Terms & Conditions</h1>
                    <h1>Privacy Policy</h1>
                    <h1>Do Not Sell My Information </h1>
                    </div>

                </div>


            </div>
        </div>
    );
}