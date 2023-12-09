import { Link } from "react-router-dom";

// react star rating
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

import { BsInfoSquare } from 'react-icons/bs';
import { GrUpdate } from 'react-icons/Gr';

const CarCard = ({ car }) => {
    const { _id, image, name, brand, type, price, rating } = car;

    return (
        <div>
            <div>
                <div className="flex flex-col h-full shadow-xl rounded-lg">
                    <div className="flex flex-col h-full lg:flex-row">
                        <div>
                            <figure><img className="w-full rounded-t-lg  lg:rounded-tl-lg" src={image} alt="donation-img" /></figure>
                        </div>
                        <div className="mx-2 mt-5 space-y-3 p-2 md:p-4">
                            <h3 className="text-lg lg:text-xl text-amber-500 font-bold">{name}</h3>
                            <div className="mx-3">
                                <div className="flex flex-col md:flex-row gap-2">
                                    <div>
                                        <h3 className="text-sm md:text-lg  font-medium">{brand}</h3>
                                        <h3 className="text-lg font-semibold"><span className="text-amber-500">$</span>{price}</h3>
                                    </div>
                                    <div className="ms-3">
                                        <div><Rating style={{ maxWidth: 100 }} value={Math.round(rating || 0)} readOnly /></div>
                                        <h3 className="text-[13px] md:text-[16px]">{type}</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-1 md:gap-5">
                                <Link to={`/cardetails/${_id}`}>
                                    <button className="flex justify-center items-center gap-2 text-pink-500 font-medium px-2 py-1 border rounded"><BsInfoSquare></BsInfoSquare> Details</button>
                                </Link>
                                <Link to={`/updatecar/${_id}`}>
                                    <button className="flex justify-center items-center gap-2 text-sky-500 font-medium px-2 py-1 border rounded"><GrUpdate></GrUpdate> Update</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarCard;