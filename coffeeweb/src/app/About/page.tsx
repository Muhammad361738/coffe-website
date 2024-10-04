
import Image from 'next/image';
import about from '../Assests/about.jpg';
// import Button from '../Button/page';

const About = () => {
    return (
        <div>
            {/* Title */}
            <div className="relative">
                <h2 className='text-center bg-amber-700 h-14 pt-2 shadow-xl shadow-amber-800 text-3xl font-serif font-bold'>
                    About Us
                </h2>

                {/* Image using Next.js Image component */}
                <div className="relative w-screen h-screen"> {/* Set a height for the image */}
                    <Image
                        src={about}
                        alt="About Image"
                        layout="fill"
                        objectFit="cover" // Cover image nicely
                        className="rounded-lg w-screen h-screen"
                    />
                </div>

                {/* Overlay text */}
                <div className="absolute inset-0 flex items-center justify-center ">
                    <p className="text-white text-lg font-bold bg-black bg-opacity-50 p-6 rounded-lg w-screen  max-w-2xl h-auto mt-20 mx-auto max-md:text-sm">
                        At Your Coffee Brand we believe that coffee is more than just a beverage—its an experience that brings people together. Every cup we craft is filled with passion from the carefully sourced beans grown by dedicated farmers to the artisanal roasting process that unlocks their unique flavors. We are committed to sustainability quality and community ensuring that every sip you take not only tastes exceptional but also supports ethical practices. Whether you are enjoying a quiet moment alone or sharing laughter with friends we are here to make your coffee moments unforgettable.
                    </p>
                </div>
            </div>
            
        </div>
    );
}

export default About;
