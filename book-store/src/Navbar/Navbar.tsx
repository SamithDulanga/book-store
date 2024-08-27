import Logo from "../assets/logo.ico";
import {FaCaretDown} from "react-icons/fa";
import {MdOutlineShoppingCart} from "react-icons/md";


const Menu = [
    {
        id:1,
        name:"Home",
        link:"/#"
    },
    {
        id:2,
        name: "Best Seller",
        link: "/#services"
    }

];

const DropDownLink = [
    {
        id:1,
        name:"Popular Books",
        link:"#/"
    },
    {
        id:2,
        name:"Best Selling",
        link:"#/"
    },
    {
        id:3,
        name: "Categories",
        link: "#/"
    }
]
export function Navbar() {
    return (
        <>
            <div className="shadow-lg">
                <div className="container py-3 sm:py-0">
                    <div className="flex justify-between items-center">
                        <div>
                            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                                <img src={Logo} alt="" className="w-10"/>
                                Books
                            </a>

                        </div>
                        <div className="flex items-center gap-4">
                            <ul className="items-center gap-4 hidden sm:flex">
                                {
                                    Menu.map((menu)=>(
                                        <li key={menu.id}>
                                            <a href={menu.link}  className="inline-block py-4 px-4
                                            hover:text-emerald-500 duration-200">
                                                {menu.name}
                                            </a>
                                        </li>
                                    ))
                                }
                                <li className="group relative cursor-pointer hover:text-emerald-500 duration-200 ">
                                    <a href="#" className="flex h-[72px] items-center gap[2px]">
                                        Quick Links
                                        <span>
                                        <FaCaretDown className="transition duration-300 group-hover:rotate-180"/>
                                        </span>
                                    </a>

                                    <div className="absolute -left-9 z-[10] hidden group-hover:block bg-white shadow-md text-black ">
                                        <ul>
                                            {
                                                DropDownLink.map((links)=>(
                                                    <li key={links.id}>
                                                        <a href={links.link} className="inline-block w-full p-2
                                                        hover:bg-emerald-500 hover:text-white ">
                                                            {links.name}
                                                        </a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </li>

                            </ul>
                            <button type="button" className="flex items-center gap-1 px-4 py-2  text-center text-white bg-emerald-500 hover:bg-emerald-600 rounded-lg
                             focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 duration-300 ">
                                Cart
                                <MdOutlineShoppingCart className="drop-shadow-md cursor-pointer"/>

                            </button>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}