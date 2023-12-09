import NavBar from "../../shared/NavBar/NavBar";

const Banner = () => {
    return (
        <div>
            <div className="bg-[url('https://i.ibb.co/r450KNt/01banner.jpg')] bg-cover bg-center mt-1 rounded-sm">
                <div>
                    <div>
                        <NavBar></NavBar>
                    </div>
                    <div className="max-w-lg  text-white text-left pt-10 lg:pt-40 px-1 md:px-16">
                        <h1 className="mb-5 text-3xl md:text-4xl font-bold">Welcome to the World of <br /><span className="text-pink-600">Dream Cars</span></h1>
                        <p className="mb-5 text-xs md:text-sm lg:text-lg font-semibold">Welcome to Car Shop! Where dreams come to life. Let us create unforgettable moments together at your Dream Cars!</p>
                        <button className="btn btn-secondary btn-outline mb-16">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;