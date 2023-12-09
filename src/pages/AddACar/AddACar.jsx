import Swal from "sweetalert2";
import NavBar from "../shared/NavBar/NavBar";

const AddACar = () => {

    const handleAddACar = e => {
        e.preventDefault();

        const form = event.target;
        const image = form.image.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const short_description = form.short_des.value;
        const long_description = form.long_des.value;
        const rating = form.rating.value;
        const addCar = {
            name,
            image,
            brand,
            type,
            price,
            short_description,
            long_description,
            rating,
        }
        
        // app.post(sending data to backend for adding)
        fetch('https://brand-shop-server-apknkjf7e-detanvir.vercel.app/cars', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addCar)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Yay...',
                        text: 'Car Added Successfully.',
                    })
                }
            })
        e.target.reset();
    }

    return (
        <div>
            <div>
                <NavBar></NavBar>
            </div>
            <div className="bg-[url('https://i.ibb.co/LhSjGvk/lights-amg-coupe-mersedes-benz-wallpaper-preview.jpg')] bg-cover bg-center mt-1 py-6">
                <div className="max-w-[700px] mx-auto text-center">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl text-center text-sky-500 font-extrabold py-2 mt-20 mb-1">Add Your Car</h1>
                    <p className="text-[10px] md:text-[12px] text-white font-medium mb-8">Unlock endless possibilities for your car at our trusted online platform. Sell your vehicle hassle-free. Benefit from our extensive reach, seamless process, and fair pricing. Join our community of satisfied sellers and let us help you find the right buyer for your beloved car.</p>
                </div>
                <div className="bg-light-blue-50 md:w-1/3 mx-auto border rounded-lg p-12 my-4">
                    <form onSubmit={handleAddACar}>
                        <div className="">
                            <div className="form-control my-2">
                                <label className="label">
                                    <span className="label-text text-white font-bold">Car Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Car Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control my-2">
                                <label className="label">
                                    <span className="label-text text-white font-bold">Photo URL</span>
                                </label>
                                <input type="text" name="image" placeholder="Photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control my-2">
                                <label className="label">
                                    <span className="label-text text-white font-bold">Brand Name</span>
                                </label>
                                <input type="text" name="brand" placeholder="Brand Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control my-2">
                                <label className="label">
                                    <span className="label-text text-white font-bold">Price</span>
                                </label>
                                <input type="text" name="price" placeholder=" $ " className="input input-bordered" required />
                            </div>
                            <div className="form-control my-2">
                                <label className="label">
                                    <span className="label-text text-white font-bold">Type</span>
                                </label>
                                <input type="text" name="type" placeholder="Vehicle Type" className="input input-bordered" required />
                            </div>
                            <div className="form-control my-2">
                                <label className="label">
                                    <span className="label-text text-white font-bold">Short Description</span>
                                </label>
                                <input type="text" name="short_des" placeholder="Write a Brief Description" className="input input-bordered" required />
                            </div>
                            <div className="form-control my-2">
                                <label className="label">
                                    <span className="label-text text-white font-bold">Detailed Description</span>
                                </label>
                                <input type="text" name="long_des" placeholder="Write Description in Details" className="input input-bordered" required />
                            </div>
                            <div className="form-control my-2">
                                <label className="label">
                                    <span className="label-text text-white font-bold">Rating</span>
                                </label>
                                <input type="text" name="rating" placeholder=" ? star" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control  mt-6 my-4 w-2/3 mx-auto">
                            <input className="btn btn-primary btn-outline" type="submit" value="Confirm Add" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddACar;