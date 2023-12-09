// react star rating
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { BsInfoSquare } from 'react-icons/bs';
import Swal from 'sweetalert2';


const CartCarCard = ({ car, cartCars, setCartCars }) => {
    const { _id, image, name, brand, type, price, rating } = car;

    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://brand-shop-server-apknkjf7e-detanvir.vercel.app/cart/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Car has been deleted from Cart.',
                                'success'
                            )
                            const remainingCars = cartCars.filter(car => car._id !== _id);
                            setCartCars(remainingCars);
                        }
                    })

            }
        })
    }

    return (
        <div>
            <div className="shadow-xl rounded-lg my-4">
                <div className="flex flex-col lg:flex-row">
                    <div>
                        <figure><img className="w-full lg:max-w-[350px] h-full rounded-l-lg" src={image} alt="donation-img" /></figure>
                    </div>
                    <div className="mx-2 mt-5 space-y-3">
                        <h3 className="text-lg lg:text-xl text-amber-500 font-bold">{name}</h3>
                        <div className="mx-3">
                            <div className="flex flex-col md:flex-row gap-2  mb-2">
                                <div>
                                    <h3 className="text-sm md:text-lg  font-medium">{brand}</h3>
                                    <h3 className="text-lg font-semibold"><span className="text-amber-500">$</span>{price}</h3>
                                </div>
                                <div className="ms-2">
                                    <div><Rating style={{ maxWidth: 100 }} value={Math.round(rating || 0)} readOnly /></div>
                                    <h3 className="text-[13px] md:text-[16px]">{type}</h3>
                                </div>
                                <button onClick={() => handleDelete(_id)} className="flex justify-center items-center gap-2 text-pink-500 font-medium px-2 py-1 border rounded"><BsInfoSquare></BsInfoSquare> Delete</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CartCarCard;