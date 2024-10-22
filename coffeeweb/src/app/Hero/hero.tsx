import Image from "next/image";
import bgc4 from "../Assests/bgc4.jpg"



const Hero = () => {
    return (
        <div >
           <div className="relative">
            
                {/* Image using Next.js Image component */}
                <div className="relative w-screen h-screen"> {/* Set a height for the image */}
                    <Image
                        src={bgc4}
                        alt="About Image"
                        layout="fill"
                        objectFit="cover" // Cover image nicely
                        className="rounded-lg w-screen h-screen "
                    />
                </div>

                {/* Overlay text */}
                <div className="absolute inset-0 items-center justify-center flex flex-wrap">
                    <p className="text-white text-lg font-bold bg-gray-900 bg-opacity-50 p-6 rounded-lg w-screen  max-w-2xl h-auto mt-20 mx-auto max-md:text-sm">Welcome to Coffee Shop Name where every cup is crafted with care to deliver the perfect blend of flavor and warmth. Discover a range of expertly brewed coffees and artisanal treats all served in an inviting atmosphere designed for both relaxation and connection.






</p>
                </div>
            </div>
            
        </div>
    );
}

export default Hero;
