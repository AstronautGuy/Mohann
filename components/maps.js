import React from 'react';

const MapSection = () => {
    const mapSrc1 =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.8266429088235!2d73.1660816!3d22.3601737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc93bdda8bfe3%3A0x3de51cfb63f2a313!2sMohann%20Engineers!5e0!3m2!1sen!2sin!4v1740462458117!5m2!1sen!2sin";
    const mapSrc2 =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117865.74541424458!2d72.83236169726563!3d22.605099999999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4f291ed27daf%3A0xc8033742c3e625e3!2sAnand%20By%20Pass%20Express%20Highway!5e0!3m2!1sen!2sin!4v1741191025126!5m2!1sen!2sin"

    return (
        <section className="flex md:flex-row flex-col justify-between space-x-4 filter grayscale transition duration-500 ease-in-out transform hover:grayscale-0 p-5">
            <div className="w-full md:w-1/2 p-2 md:p-0 rounded-lg overflow-hidden shadow-md transition duration-500 ease-in-out transform hover:scale-[1.02]">
                <iframe
                    src={mapSrc1}
                    className="w-full h-[450px] border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className="w-full md:w-1/2 p-2 md:p-0 rounded-lg overflow-hidden shadow-md transition duration-500 ease-in-out transform hover:scale-[1.02]">
                <iframe
                    src={mapSrc2}
                    className="w-full h-[450px] border-0 "
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    );
};

export default MapSection;