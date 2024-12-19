import React, { useState, useEffect } from 'react';

const Slider = () => {
    const images = [
        {
            src: "/Images/slider/slide-1.jpg",
            headline: "Exceptional Craftsmanship for Every Project",
            subHeadline: "Where creativity meets precision to shape the future.",
        },
        {
            src: "/Images/slider/slide-2.jpg",
            headline: "Revolutionizing Fabrication in Odisha",
            subHeadline: "Innovative solutions tailored to your unique needs.",
        },
        {
            src: "/Images/slider/slide-3.jpg",
            headline: "Building Dreams, One Structure at a Time",
            subHeadline: "Experience quality and dedication like never before.",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="hero-section bg-gray-900 text-white min-h-screen w-full relative flex items-center justify-center overflow-hidden">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out transform scale-150 ${currentIndex === index ? "scale-150 opacity-100 z-10" : "scale-10 opacity-0 z-0"
                        }`}
                    style={{
                        backgroundImage: `url(${image.src})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                ></div>
            ))}

            <div className="hero-content z-20 text-center px-6 md:px-12 lg:px-24">
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
                    {images[currentIndex].headline}
                </h1>
                <p className="text-lg md:text-2xl mt-4 text-yellow-100 font-light drop-shadow-md">
                    {images[currentIndex].subHeadline}
                </p>
                <button
                    className="mt-8 px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-black font-semibold text-lg rounded-lg hover:scale-110 transition-transform duration-300 shadow-2xl"
                >
                    Book Now
                </button>
            </div>

            <div className="hero-overlay absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-10"></div>

            <div className="indicator-wrapper absolute bottom-8 flex space-x-3 z-20">
                {images.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${currentIndex === index ? "bg-yellow-400" : "bg-gray-600"
                            }`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
