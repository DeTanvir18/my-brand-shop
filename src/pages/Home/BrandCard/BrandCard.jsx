import { Link } from "react-router-dom";

const BrandCard = ({ singleBrand }) => {
    const { name, image } = singleBrand;
    return (
        <div>
            <div className="flex flex-col rounded-lg text-center shadow-lg p-1 w-full max-w-[210px] mx-auto">
                <figure><img className="w-full max-w-[200px] rounded-lg" src={image} alt="brand-img" /></figure>
                <Link to={`/brands/${name}`}>
                    <h3 className="text-sm lg:text-lg text-red-500 font-semibold border-2 border-sky-50 mt-1">{name}</h3>
                </Link>
            </div>
        </div>
    );
};

export default BrandCard;