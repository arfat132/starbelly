import React from 'react';

const OurGallery = () => {
    return (
        <section className="body-font">
            <div className="text-center">
                <h1 className='text-center font-mono font-bold text-2xl'>Our Colourful Gallery</h1>
                <p className='text-center text-gray-600 mt-2 mx-auto px-0 lg:px-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sint officiis animi, temporibus itaque molestias commodi ex quis harum voluptatum.</p>
            </div>
            <div className="container px-5 py-12 mx-auto flex flex-wrap">
                <div className="flex flex-wrap md:-m-2 -m-1">
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxvv3W2XcLvlRJL2hsD5FAldUHTqt45F54YUN5c5YNv9Ro0u0CMu9VCW8RdmDjTRTZ49U&usqp=CAU" />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://images.summitmedia-digital.com/esquiremagph/images/gallery/117/gallery-greenhouse-01.jpg" />
                        </div>
                        <div className="md:p-2 p-1 w-full">
                            <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://i0.wp.com/www.greencore.com/app/uploads/2015/08/hero-sandwich.jpg?fit=787%2C590&ssl=1" />
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-full">
                            <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://media2.miaminewtimes.com/mia/imager/u/slideshow/11324567/kyu_crab_buns.jpg" />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://www.willflyforfood.net/wp-content/uploads/2018/06/tasting-with-innovations12.jpg" />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://www.willflyforfood.net/wp-content/uploads/2018/06/tasting-with-innovations11.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurGallery;