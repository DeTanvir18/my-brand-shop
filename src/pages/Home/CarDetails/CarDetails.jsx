import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";
import NavBar from "../../shared/NavBar/NavBar";
// react star rating
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

import { BsFillCartCheckFill } from "react-icons/bs";


const CarDetails = () => {
    const cardetails = useLoaderData();
    const { user } = useContext(AuthContext);
    const { image, name, brand, type, price, short_description, long_description, rating } = cardetails;
    const carToCart = { image, name, brand, type, price, short_description, long_description, rating, email: user?.email };

    const addCarToCart = () => {
        fetch('https://brand-shop-server-apknkjf7e-detanvir.vercel.app/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(carToCart)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Yay...',
                        text: 'Car Successfully Added to the cart.',
                    })
                }
            })
    }

    return (
        <div>
            <div>
                <NavBar></NavBar>
            </div>
            <div className="mt-10 md:mt-20 mb-96 max-w-[820px] mx-auto px-1">
                <div className="w-full shadow rounded-lg ms-1 md:ms-0">
                    <img className="w-full rounded-lg" src={image} alt="donation-img" />
                    <div className="flex p-2 md:p-4 rounded-b-lg space-x-4">
                        <button onClick={addCarToCart} className="flex justify-center items-center gap-2 text-pink-500 font-medium px-2 py-1 border rounded"><BsFillCartCheckFill></BsFillCartCheckFill> Add to Cart</button>
                        <Link to={`/`}><button className="flex justify-center items-center gap-2 text-sky-500 font-medium px-2 py-1 border rounded">Home</button></Link>
                    </div>
                </div>
                <div className="ps-2">
                    <div className="mx-2 mt-5 space-y-3">
                        <h3 className="mt-8 mb-2 text-2xl md:3xl text-amber-500 md:text-[40px] font-bold">{name}</h3>
                        <div>
                            <div className="flex flex-col md:flex-row lg:items-center gap-2">
                                <div className="ms-1 md:ms-2 space-y-3">
                                    <p className="text-xl text-sky-500 font-semibold"><span className="text-black">From:</span> {brand}</p>
                                    <p className="text-xl text-sky-700 font-bold"><span className="text-black">Cost:</span> <span className="text-amber-500">$</span>{price}</p>
                                </div>
                                <div className="ms-3 mt-2">
                                    <div><Rating style={{ maxWidth: 100 }} value={Math.round(rating || 0)} readOnly /></div>
                                    <h3 className="text-xl text-pink-500 font-bold">{type}</h3>
                                </div>
                            </div>
                            <p className="ms-2 font-medium">Booking: <span className="text-sky-700">Available</span> </p>
                        </div>
                    </div>
                    <p className="border border-sky-100 font-medium p-3">{short_description}<br />{long_description}</p>
                </div>
            </div>
        </div>
    );
};

export default CarDetails;