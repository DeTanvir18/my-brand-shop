import { useEffect, useState } from "react";
import BrandCard from "../BrandCard/BrandCard";

const Brands = () => {
    const [brandNames, setBrandNames] = useState([]);

    useEffect(() => {
        fetch('https://brand-shop-server-apknkjf7e-detanvir.vercel.app/brands')
            .then(res => res.json())
            .then(data => setBrandNames(data))
    }, [])


    return (
        <div>
            <div className="max-w-[880px] mx-auto text-center px-2 lg:px-0">
                <div>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl text-center text-sky-500 font-extrabold py-2 mt-36 mb-1">World Famous Car Brands</h1>
                    <p className="text-[10px] md:text-[12px] font-medium mb-8">Welcome to our premier car brand shop, where automotive excellence meets unparalleled customer service. Step into a world of innovation and elegance, curated for car enthusiasts and connoisseurs alike. Our showroom boasts a meticulously selected range of the finest vehicles, representing the epitome of cutting-edge technology and timeless design. Each car on our floor tells a story of engineering marvel, performance, and style.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 max-w-[550px] mx-auto">
                    {
                        brandNames.map(singleBrand => <BrandCard
                            key={singleBrand._id}
                            singleBrand={singleBrand}
                        ></BrandCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Brands;