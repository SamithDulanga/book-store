import "./BestBooks.css";
import React from "react";
import Book1 from "../assets/book4.jpg";
import Book2 from "../assets/book5.jpg";
import Book3 from "../assets/book6.jpg";
import Book4 from "../assets/book7.jpg";
import Book5 from "../assets/book8.jpg";
import Book6 from "../assets/book9.jpg";
import {data} from "autoprefixer";
import {MdOutlineStar} from "react-icons/md";
import {FaStar} from "react-icons/fa";



export function BestBooks() {

    const booksData1= [
        {
            id:1,
            img:Book1,
            author:"Lisa Jewell",
            title:"None of This is True",
            description:"The story is about Alix, a popular podcaster, who recently helped develop a fictional " +
                "Netflix True Crime series called Hi! I'm Your Birthday Twin! based on her real-life experience with her birthday twin Josie."
        },

        {
            id: 2,
            img: Book2,
            author: "Emily Henry",
            title: "Happy Place",
            description: "Happy Place is a romantic comedy novel by Emily Henry about two friends who pretend to be in a relationship for one week. "
        },
        {
            id:3,
            img:Book3,
            author:"Michael Palin",
            title:"Great-Uncle Harry",
            description:"Great-Uncle Harry is an utterly compelling account of an ordinary man who led an extraordinary life. "
        },
        {
            id:4,
            img:Book4,
            author:" James Patterson and Mike Lupica",
            title:"12 Months to Live",
            description:"In “12 Months to Live,” criminal defense attorney and former police officer, Jane Smith, is deep in preparation for a high-profile triple-murder case, when she is diagnosed with cancer."
        },

        {
            id:5,
            img:Book5,
            author:"Fletcher McKenzie",
            title:"From the Pilot's Seat",
            description:"Enthralling tales from New Zealand pilots - both men and women - who fly a variety of aircraft" +
                " around the world in a range of situations, from the domestic to the heart-stopping."
        },
        {
            id:6,
            img:Book6,
            author:"James Patterson and Duane Swierczynski",
            title:"Lion and Lamb",
            description:"Cooper Lamb is a private investigator and Veena Lion is a prosecution attorney. They are both working on the same case to find out who killed Archie Hughes, the quarterback for the Philadelphia Eagles."
        }
        ]

    return (
        <>
            <div className="my-10 ">
                <div className="container flex flex-col justify-center items-center gap-5 ">
                    <div className="text-center mb-5 mx-auto">
                        <h1 className="text-5xl font-bold text-emerald-800">Most popular books in this month</h1>
                        <p className="text-2xl mt-5"><span className="text-red-600 ">*</span>Based on customer preference</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-5 max-w-[300px]  sm:max-w-[900px] sm:max-h-[1920px] object-contain " >
                        {booksData1.map((book)=>(
                            <div className="py-4 text-center border-2 px-4 rounded-2xl my-4  ">
                                <div className="">
                                    <img src={book.img}/>
                                </div>
                                <div className="font-bold mt-2">
                                    {book.title}
                                </div>
                                <div className="text-emerald-800 font-semibold">
                                   By {book.author}
                                </div>
                                <div className="flex items-center justify-center text-yellow-400">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <div className="flex items-center justify-center my-2">
                                    <button type="button" className="flex items-center gap-1 px-4 py-2  text-center text-white bg-emerald-500 hover:bg-emerald-600 rounded-lg
                             focus:ring-blue-300 duration-300 hover:scale-105 ">Order Now</button>
                                </div>
                            </div>
                        ))}


                    </div>



                </div>
            </div>
        </>
    );
}