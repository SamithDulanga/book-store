import "./Categories.css";
import Category from "../assets/category.jpg";
import {FaAngleDoubleRight, FaHandPointRight} from "react-icons/fa";
import React from "react";
import {FcApproval} from "react-icons/fc";
import {HiHeart} from "react-icons/hi";
export function Categories() {

    const categories=[
        {
            id:1,
            name:"Romance",
        },
        {
            id:2,
            name:"Science fiction",
        },
        {
            id:3,
            name:"Adventure",
        },
        {
            id:4,
            name:"Horror",
        },
        {
            id:5,
            name:"Fantasy",
        },
    ]
    return (
        <>
            <div>
                <div className="container flex flex-col justify-center items-center py-5">
                    <h1 className="text-5xl text-center font-bold my-3 gap-2 text-emerald-800">Book Categories</h1>
                    <p className="text-2xl text-center my-3 gap-2 ">Click and search with your favourite category</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 my-5 gap-8" >
                        <div className="flex flex-col justify-center items-center sm:items-end ">
                            <img src={Category} className="max-w-[330px] w-full object-contain drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] my-3 "/>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-3 sm:items-start">
                            <div className="flex flex-col justify-center items-start gap-3">

                                {categories.map((category)=>(
                                    <div key={category.id} className="flex justify-start items-center gap-2 font-semibold text-gray-700 cursor-pointer hover:text-red-500 hover:scale-105 duration-300">
                                        <FcApproval className="text-3xl sm:text-4xl"/>
                                        <p className="text-2xl sm:text-3xl">{category.name}</p>
                                    </div>

                                ))}

                            </div>
                        </div>



                    </div>
                    <div className="flex flex-col items-center gap-4 lg:justify-center lg:items-center lg:flex-row">
                        <div className="flex flex-col items-center gap-4 md:justify-center md:items-center md:flex-row">
                            <p className="text-2xl flex justify-center items-center ">Do you </p>
                            <p><HiHeart  className="text-red-500 mx-2 text-4xl "/></p>
                            <p className="text-2xl flex justify-center items-center ">to view all the books in here</p>
                        </div>

                        <div className="flex justify-center items-center gap-4 sm:ml-4">
                            <p className="text-amber-500 text-4xl "><FaHandPointRight /></p>
                            <button type="button" className="flex items-center gap-1 px-4 py-2  text-center text-white bg-emerald-500 hover:bg-emerald-600 rounded-lg
                             focus:ring-blue-300 duration-300 ">View All Books</button>
                        </div>



                    </div>

                </div>
            </div>
        </>
    );
}