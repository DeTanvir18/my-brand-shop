import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ExtraOne = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


    return (
        <div>
            <div className="slider-container mt-2 max-w-[1200px] mx-auto">
                <div className="max-w-[700px] mx-auto text-center">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl text-center text-sky-500 font-extrabold py-2 mt-16 mb-1">New Collection 2023</h1>
                    <p className="text-[10px] md:text-[13px] font-medium mb-8">Explore our latest car collection, where innovation meets elegance. Discover cutting-edge technology, superior performance, and timeless design. Embrace the future of driving with our stunning and sophisticated new arrivals.</p>
                </div>
                <Slider {...settings}>
                    <div><img src="https://i.ibb.co/KKXgCGb/mercedesbenzglccoupe2020red1001x56561000x500.jpg" className="w-full rounded-sm" alt="slider-image" /></div>
                    <div><img src="https://i.ibb.co/GQZDCLh/2023bmwx7xdrive40i148641c5b429bee51000x500.jpg" className="w-full rounded-sm" alt="slider-image" /></div>
                    <div><img src="https://i.ibb.co/4FqgXzR/b655147690f84051843e7279c14d68ffteslamodelxlongrangeleasbarforlangdgaranti6sits1000x500.jpg" className="w-full rounded-sm" alt="slider-image" /></div>
                    <div><img src="https://i.ibb.co/c2KvyV8/pri151213s1000x500.jpg" className="w-full rounded-sm " alt="slider-image" /></div>
                    <div><img src="https://i.ibb.co/QNddcd7/Mitsubishi-Lancer-HLT2018-21000x500.jpg" className="w-full rounded-sm" alt="slider-image" /></div>
                    <div><img src="https://i.ibb.co/JCxPMmC/2016hondacivicexlcoupetestreviewcaranddriverphoto667350soriginal1000x500.jpg" className="w-full rounded-sm" alt="slider-image" /></div>
                    </Slider>
            </div>
        </div>
    );
};

export default ExtraOne;