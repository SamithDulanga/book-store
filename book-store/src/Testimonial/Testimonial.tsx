import "./Testimonial.css";
import React from "react";
import Slider from "react-slick";
import Person1 from "../assets/person1.jpg";
import Person2 from "../assets/person2.jpg";
import Person3 from "../assets/person3.jpg";
import Person4 from "../assets/person4.jpg";
import Person5 from "../assets/person5.jpg";
import Person6 from "../assets/person6.jpg";
import {FaStar} from "react-icons/fa";


const testimonialData= [
    {
        id:1,
        name:"Daniel Lawrence",
        position:"Student",
        text:"This is the best site I have ever visit.Because, books price are considerably lower than other selling platform and this helped me lot to shape up my future",
        img:Person1,
        date:"12/12/2023"
    },
    {
        id:2,
        name:"Emily Fernando",
        position:"Human Resource Manager",
        text:"All the books I wanted were in stock, ordering and payment was very straightforward. The books were dispatched very quickly. The only minor issue was with the Royal Mail delivery which was one day later than the original date communicated to me by Royal Mail but still within the time frame indicated by Bookshop. The items were well packaged and arrived in perfect condition. Great stuff.",
        img:Person2,
        date:"29/12/2023"
    },
    {
        id:3,
        name:"Jenny Wilson",
        position: "Teacher",
        text:"Your website and ordering process were easy to navigate. The books came when promised - in spite of the stormy weather! Books are in excellent condition. Very well packaged. Cats are enjoying the little box!",
        img:Person3,
        date:"23/12/2023"

    },
    {
        id:4,
        name:"Naoya Yamaguchi",
        position: "Entrepreneur",
        text:"I was very happy with my experience when I made my first order. I placed it late on a Saturday and chose next-day delivery. My order was dispatched on the Sunday and delivered the following Tuesday. It was securely packaged in fully recyclable packaging, and the books were in perfect condition. I'll certainly order again.",
        img:Person4,
        date:"19/12/2023"
    },
    {
        id:5,
        name:"Chris Woakes",
        position: "CEO of CW Holding",
        text:"Can't recommend here highly enough I bought pride and prejudice the complete novel with letters from the characters for my sister for Christmas safe to say she's extremely happy I can't wait to buy more from here.",
        img:Person5,
        date:"27/12/2023",
    },
    {
        id:6,
        name:"Sam Curren",
        position: "Fashion Designer",
        text:"The fact I was able to nominate my favourite bookshop in my town. Also the site was very easy to navigate, I had no problem choosing a book and I could spend my book token without issues or strings attached. I will deffinately be visiting the site again in future, thank you.",
        img:Person6
    },

];
export function Testimonial() {

        var settings = {
            dots: true,
            arrows:false,
            infinite: true,
            speed: 500,
            // slidesToShow: 3,
            slidesToScroll: 1,
            autoplay:true,
            autoplaySpeed:5000,
            cssEase:"linear",
            pauseOnHover:true,
            pauseOnFocus:true,
            responsive: [
                {
                    breakpoint: 10000,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                     breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
    return (
        <div>
            <div className="container">
                <div className="text-center max-w-[400px] mx-auto my-10">
                    <h1 className="text-5xl font-bold text-emerald-800">Testimonial</h1>
                    <p className="text-center text-2xl mt-3">What our customer says</p>

                </div>
                <div>
                    <Slider {...settings}>
                        {testimonialData.map((data)=>(
                            <div key={data.id}>
                                <div className="flex flex-col shadow-lg border-2 gap-4 py-8 px-6 mx-4 rounded-xl ">
                                    <div className="flex items-center gap-5">
                                        <img src={data.img} className="rounded-full w-20 h-20 object-cover"/>
                                        <div>
                                            <h1 className="text-xl font-bold text-black/70">{data.name}</h1>
                                            <h1>{data.position}</h1>
                                            <div className="flex items-center text-yellow-400">

                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </div>
                                        </div>
                                        {/*<p className=" font-serif text-gray-300 text-9xl">,,</p>*/}

                                    </div>
                                    <div>


                                        <div>
                                            <p className="text-gray-500">{data.text}</p>

                                        </div>

                                    </div>
                                </div>

                            </div>

                        ))}

                    </Slider>
                </div>

            </div>
        </div>
    );
}