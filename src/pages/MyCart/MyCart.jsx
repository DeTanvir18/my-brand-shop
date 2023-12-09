import { useLoaderData } from "react-router-dom";
import CartCarCard from "../CartCarCard/CartCarCard";
import NavBar from "../shared/NavBar/NavBar";
import { useState } from "react";

const MyCart = () => {
    const myCart = useLoaderData();
    const [cartCars, setCartCars] = useState(myCart);
    return (
        <div>
            <div>
                <NavBar></NavBar>
            </div>
            <div className="px-1">
                <div>
                    <div className="max-w-[850px] mx-auto text-center">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl text-center text-sky-500 font-extrabold py-2 mt-36 mb-1">Your Cart</h1>
                        <p className="text-[10px] md:text-[12px] font-medium mb-8">Explore the pinnacle of automotive luxury and performance at our world-renowned car dealership. As a global leader in car sales, we offer an unmatched selection of top-tier brands, setting the standard for quality and innovation. Our expert staff provides personalized service, guiding you to find the perfect vehicle that aligns with your lifestyle. Discover the epitome of driving excellence and unmatched customer satisfaction at our prestigious car dealership.
                            Explore the pinnacle of automotive luxury and performance at our world-renowned car dealership. As a global leader in car sales, we offer an unmatched selection of top-tier brands, setting the standard for quality and innovation.</p>
                    </div>
                </div>
                <div className="max-w-[600px] mx-auto mb-8">
                    {
                        cartCars.map(car => <CartCarCard
                            key={car._id}
                            car={car}
                            cartCars={cartCars}
                            setCartCars={setCartCars}
                        ></CartCarCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyCart;