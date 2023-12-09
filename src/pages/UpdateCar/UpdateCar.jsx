import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import NavBar from "../shared/NavBar/NavBar";

const UpdateCar = () => {
    const car = useLoaderData();
    const { _id, image, name, brand, type, price, short_description, long_description, rating } = car;

    const handleUpdateCar = e => {
        e.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const short_des = form.short_des.value;
        const long_des = form.long_des.value;
        const photo = form.photo.value;
        const rating = form.rating.value;

        const updatedCar = { photo, name, brand, type, price, short_des, long_des, rating }

        // send data to the server
        fetch(`https://brand-shop-server-apknkjf7e-detanvir.vercel.app/cars/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCar)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Car Info Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
        e.target.reset();
    }

    return (
        <div>
            <div className="bg-[url('https://i.ibb.co/LhSjGvk/lights-amg-coupe-mersedes-benz-wallpaper-preview.jpg')] bg-cover bg-center mt-1 py-6">
                <div>
                    <NavBar></NavBar>
                </div>
                <div className="bg-transparent p-4 flex flex-col items-center border">
                    <div className="max-w-[700px] mx-auto text-center">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl text-center text-sky-500 font-extrabold py-2 mt-20 mb-1">{name}</h1>
                        <p className="text-[10px] md:text-[13px] text-white font-medium mb-8">{long_description}</p>
                    </div>
                    <form onSubmit={handleUpdateCar}>
                        {/* form name and brand row */}
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/3">
                                <label className="label">
                                    <span className="label-text text-white font-bold">Car Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="name" defaultValue={name} placeholder="Car Name" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/3 ml-4">
                                <label className="label">
                                    <span className="label-text text-white font-bold">Brand</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="brand" defaultValue={brand} placeholder="Brand" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        {/* form type and price row */}
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/3">
                                <label className="label">
                                    <span className="label-text text-white font-bold">Vehicle Type</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="type" defaultValue={type} placeholder="Vehicle Type" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/3 ml-4">
                                <label className="label">
                                    <span className="label-text text-white font-bold">Price</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        {/* form descriptions row */}
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/3 ml-4">
                                <label className="label">
                                    <span className="label-text text-white font-bold">Short Description</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="short_des" defaultValue={short_description} placeholder="Short Description" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/3 ml-4">
                                <label className="label">
                                    <span className="label-text text-white font-bold">Detailed Description</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="long_des" defaultValue={long_description} placeholder="Detailed Description" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        {/* form Photo url and rating row */}
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/3 ml-4">
                                <label className="label">
                                    <span className="label-text text-white font-bold">Photo URL</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="photo" defaultValue={image} placeholder="Photo URL" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/3 ml-4">
                                <label className="label">
                                    <span className="label-text text-white font-bold">Rating</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="rating" defaultValue={rating} placeholder="Rating" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <div className="text-center">
                            <input type="submit" value="Update Car" className="btn btn-secondary btn-outline w-2/3 md:w-1/3" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateCar;