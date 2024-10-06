import React from 'react';
import ProfileImage from '../assets/ProfileImage.jpeg'; // Adjust the path as necessary

const Hero = () => {
    return (
        <section className="hero-section bg-lightTheme-bg dark:bg-darkTheme-bg p-8 text-center flex flex-col lg:flex-row justify-around items-center my-20 space-y-8 lg:space-y-0 lg:space-x-12 animate-fadeIn">
            {/* Profile Image Section */}
            <div className="animate-slideInUp lg:animate-none transition duration-1000 ease-in-out">
                <img
                    src={ProfileImage}
                    alt="Urooj Fatima"
                    className="w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-full border-4 border-white dark:shadow-lg dark:shadow-darkTheme-accent shadow-lightTheme-accent shadow-md"
                />
            </div>

            {/* Text and Buttons Section */}
            <div className='flex flex-col gap-3 text-center lg:text-left animate-slideInRight transition duration-1000 ease-in-out'>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-lightTheme-text dark:text-darkTheme-text">
                    Urooj Fatima
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300">
                    WordPress Developer
                </p>
                
                <div className="text-sm sm:text-base lg:text-lg">
                    <p><strong>AGE:</strong> 19</p>
                    <p><strong>ADDRESS:</strong> Karachi</p>
                    <p><strong>E-MAIL:</strong> eshalmerab1@gmail.com</p>
                    <p><strong>PHONE:</strong> +92 344 8302253</p>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center lg:justify-start space-x-4 mt-4">
                    <button className="border-2 border-black dark:border-white bg-yellow-500 text-white w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full hover:opacity-80 transition transform hover:scale-105">
                        Resume
                    </button>
                    <button className="border-2 border-black dark:border-white bg-orange-500 text-white w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full hover:opacity-80 transition transform hover:scale-105">
                        Portfolio
                    </button>
                    <button className="border-2 border-black dark:border-white bg-teal-500 text-white w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full hover:opacity-80 transition transform hover:scale-105">
                        Services
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
