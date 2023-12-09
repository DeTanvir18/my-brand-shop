import { useLoaderData } from "react-router-dom";
import CarCard from "../CarCard/CarCard";
import NavBar from "../../shared/NavBar/NavBar";


const CarsByBrand = () => {
    const filteredBrandCars = useLoaderData();


    return (
        <div>
            <div>
                <NavBar></NavBar>
            </div>
            <div className="px-1 md:px-2 lg:px-0">
                <div>
                    <div>
                        <div className="carousel w-full h-[500px] md:h-[650px] lg:h-[625px] py-7 px-0 mx-0 ">
                            <div id="slide1" className="carousel-item relative w-full">
                                <img src="https://i.ibb.co/0nbSmQW/2023-Hyundai-Kona-Web-Banner1800x675oct1200x700.jpg" className="w-full rounded-xl" />
                                <div className="absolute flex top-0 h-full rounded-xl bg-gradient-to-r from-[#201d1d] to-[rgba(21, 21, 21, 0)]">
                                    <div className='text-white md:w-1/2 space-y-7  pl-4 md:pl-24 pt-28 md:pt-40'>
                                        <h2 className='text-3xl md:text-6xl font-bold'>Once in a lifetime Offer.</h2>
                                        <p className='text-xs md:text-sm lg:text-[18px] text-sky-400'>Discover a wide range of top-quality vehicles at our trusted car shop. Competitive prices, exceptional service, and expert advice for your perfect car-buying experience.</p>
                                        <div>
                                            <button className="btn btn-outline btn-accent mr-5">Book Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                                    <a href="#slide2" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide2" className="carousel-item relative w-full">
                                <img src="https://i.ibb.co/VBZrmNj/Rick-Hendrick-Buick-GMCDuluth2021-Clearance-Sales-Event-Banner1200x700.jpg" className="w-full rounded-xl" />
                                <div className="absolute flex top-0 h-full rounded-xl">
                                    <div className='text-white md:w-1/2 space-y-7 pl-4 md:pl-24 pt-28 md:pt-40'>
                                        <h2 className='text-3xl md:text-6xl font-bold'>Once in a lifetime Offer.</h2>
                                        <p className='text-xs md:text-sm lg:text-[18px] text-sky-400'>Discover a wide range of top-quality vehicles at our trusted car shop. Competitive prices, exceptional service, and expert advice for your perfect car-buying experience.</p>
                                        <div>
                                            <button className="btn btn-outline btn-accent mr-5">Book Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                                    <a href="#slide1" className="btn btn-circle">❮</a>
                                    <a href="#slide3" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide3" className="carousel-item relative w-full">
                                <img src="https://i.ibb.co/XbymF03/newcarsalebannerdesigntemplate949cd518a2e4d5582a6cf399b4dbae1fscreen1200x700.jpgg" className="w-full rounded-xl" />
                                <div className="absolute flex top-0 h-full rounded-xl">
                                    <div className='text-white md:w-1/2 space-y-7  pl-4 md:pl-24 pt-28 md:pt-40'>
                                        <h2 className='text-3xl md:text-6xl font-bold'>Once in a lifetime Offer.</h2>
                                        <p className='text-xs md:text-sm lg:text-[18px] text-sky-400'>Discover a wide range of top-quality vehicles at our trusted car shop. Competitive prices, exceptional service, and expert advice for your perfect car-buying experience.</p>
                                        <div>
                                            <button className="btn btn-outline btn-accent mr-5">Book Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                                    <a href="#slide2" className="btn btn-circle">❮</a>
                                    <a href="#slide1" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* display cars here */}
                <div>
                    <div>
                        <div>
                            <div className="text-center">
                                <h1 className="text-2xl md:text-3xl lg:text-4xl text-center text-sky-500 font-extrabold py-2 mt-20 mb-1">Latest Models & Top Brands</h1>
                                <p className="text-[10px] md:text-[12px] font-medium mb-8">Explore the pinnacle of automotive luxury and performance at our world-renowned car dealership. As a global leader in car sales, we offer an unmatched selection of top-tier brands, setting the standard for quality and innovation. Our expert staff provides personalized service, guiding you to find the perfect vehicle that aligns with your lifestyle. Discover the epitome of driving excellence and unmatched customer satisfaction at our prestigious car dealership.
                                    Explore the pinnacle of automotive luxury and performance at our world-renowned car dealership. As a global leader in car sales, we offer an unmatched selection of top-tier brands, setting the standard for quality and innovation.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto my-20">
                                {filteredBrandCars.length > 0 &&
                                    filteredBrandCars.map(car => <CarCard
                                        key={car._id}
                                        car={car}
                                    ></CarCard>)
                                }
                            </div>
                            {
                                filteredBrandCars.length === 0 && <>
                                    <h3 className="my-16 text-center text-2xl text-pink-500 font-bold">No Car To Display for This Brand</h3>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarsByBrand;