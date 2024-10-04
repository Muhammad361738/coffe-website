

import Link from "next/link";

const Navbar = () => {
    // const  [mobileFun.setMobile()]= useEffect()
    // setMobile()
    return (
        <div className="flex justify-between bg-amber-900 h-16 pb-2 text-yellow-200 pl-5 w-screen fixed flex-wrap-reverse z-10 ">
            <img className="sm:w-40 sm: rounded-xl h-12" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgnwiaYKEn0Ezbu2GTqYNJAlZYYzxMn3zFbQ&s" alt="" />
            <div className="hidden md:block pt-3 ">
                <ul className="outline-none  flex gap-12 pr-20 ">

                    <li ><Link className="hover:bg-red-800" href={"/"}>Home</Link></li>
                    <li><Link className="hover:bg-red-800" href={"/About"}>About</Link></li>
                    <li><Link className="hover:bg-red-800" href={"/Products"}>Product</Link></li>
                    <li><Link className="hover:bg-red-800" href={"/Contact"}>Contact</Link></li>
                </ul>
                           </div>
                           <div className="md:hidden  ">
                           <a className="text-4xl " href="#">&#8801;</a>
                           </div>
        </div>
    );
}

export default Navbar;
