
import Image from "next/image";
import Link from "next/link";
import logo from "../Assests/logo.png"
const Navbar = () => {
    // const  [mobileFun.setMobile()]= useEffect()
    // setMobile()
    return (
        <div className="flex justify-between bg-amber-700  h-16 pb-2 text-yellow-200 pl-5 w-screen fixed flex-wrap-reverse z-10 ">
            <Image className="sm:w-40 sm: rounded-xl h-12" src={logo} alt="" />
            <div className="hidden md:block pt-3  ">
                <ul className="outline-none  flex gap-12 pr-20 ">

                    <li ><Link className="hover:underline hover:bg-slate-700" href={"/"}>Home</Link></li>
                    <li><Link className="hover:underline hover:bg-slate-700" href={"/About"}>About</Link></li>
                    <li><Link className="hover:underline hover:bg-slate-700" href={"/Products"}>Product</Link></li>
                    <li><Link className="hover:underline hover:bg-slate-700" href={"/Contact"}>Contact</Link></li>
                </ul>
                           </div>
                           <div className="md:hidden  ">
                           <a className="text-4xl " href="#">&#8801;</a>
                           </div>
        </div>
    );
}

export default Navbar;
