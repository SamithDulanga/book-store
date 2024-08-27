import "./TopContent.css";
import Vector from "../assets/background.jpg";
import Book1 from "../assets/book1.jpg";
import Book2 from "../assets/book2.jpg";
import Book3 from "../assets/book3.jpg";
import {useState} from "react";
import {BsRocketTakeoff} from "react-icons/bs";
export function TopContent() {
    const [imageId, setImageId] = useState(Book1);
    const [title, setTitle] = useState("The Secret");
    const [description, setDescription] = useState("Jack Reacher, " +
        "\"the coolest continuing series character\" (Stephen King), returns in a brand new, pulse-pounding read from Lee and Andrew Child.");
    const [author, setAuthor] = useState("Lee Child and Andrew Child");


    const imageList= [
        {
            id:1,
            img:Book1,
            author:"Lee Child and Andrew Child",
            title:"The Secret",
            description:"Jack Reacher, " +
                "\"the coolest continuing series character\" (Stephen King), returns in a brand new, pulse-pounding read from Lee and Andrew Child."
        },

        {
            id:2,
            img:Book2,
            author:"Rick Riordan",
            title:"The Chalice of the Gods",
            description:"The original heroes from The Lightning Thief are reunited for their biggest challenge yet: getting Percy to college when the gods are standing in his way."
        },
        {
            id:3,
            img:Book3,
            author:"Fleur Beale",
            title:"Once Upon a Wickedness",
            description:"An exciting adventure novel for contemporary kids with a fairytale setting, a daring hero and message that you’re never too young and powerless to stand up to tyrants!"
        }

    ]
    const bgImage = {
        backgroundImage: `url(${Vector})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize:"cover",
        width:"100%"

};
    return (
        <>
            <div className="main-container min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center " style={bgImage}>


                <div className="container pb-8 sm:pb-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div className="flex flex-col justify-center items-center text-center sm:text-left order-2 sm:order-1 gap-4 pt-12 ">
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold  flex gap-3 bg-gradient-to-r from-emerald-600 to-gray-400 text-white px-4 py-2 rounded-2xl drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] text-center mb-5">New Arrivals</h1>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-center ">{title}</h1>
                            <p className=" text-gray-900 font-bold">By {author}</p>
                            <p className="text-center">{description}</p>
                            <div>
                                <button className="text-center text-emerald-500
                                bg-white rounded-md px-4 py-2 mt-4 font-semibold bg-opacity-85 border-2 hover:bg-emerald-600 hover:text-white duration-500 hover:scale-110">
                                    Order Now
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-center items-center min-h-[450px] relative order-1 sm:order-2 gap-1">
                            <div className="flex justify-center items-center h-[300px] sm:h-[450px]">
                                <img src={imageId} className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] object-contain "/>
                            </div>

                            <div className="flex flex-col gap-4">
                                {
                                    imageList.map((data)=>(
                                        <img src={data.img} key={data.id} className="max-w-[130px] max-h-[130px] object-contain inline-block hover:scale-110
                                        duration-300" onClick={()=>{
                                            setImageId(
                                                data.id===1 ? Book1 : data.id===2 ? Book2:Book3
                                            );
                                            setTitle(data.title);
                                            setAuthor(data.author)
                                        }}/>
                                    ))
                                }

                            </div>

                        </div>


                    </div>

                </div>

            </div>
        </>
    );
}