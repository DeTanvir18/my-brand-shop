
const ExtraTwo = () => {
    return (
        <div className="px-1">
            <div className="flex flex-col md:flex-row my-14 border rounded-2xl shadow-2xl p-2">
                <div className="flex justify-center items-center md:w-1/2 bg-[url('https://i.ibb.co/LhSjGvk/lights-amg-coupe-mersedes-benz-wallpaper-preview.jpg')] bg-cover bg-center text-white rounded-2xl py-32">
                    <h3 className="text-7xl text-white font-bold">FAQ?</h3>
                </div>
                <div className="md:w-1/2">
                    <div className="collapse collapse-arrow bg-transparent">
                        <input type="radio" name="my-accordion-2" checked="checked" />
                        <div className="collapse-title text-xl text-sky-400 font-medium">
                            How is the Warranty Policy?
                        </div>
                        <div className="collapse-content">
                            <p>Enjoy peace of mind with our comprehensive warranty: reliable coverage, quick claims, and exceptional support for your vehicle protection.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-transparent">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl text-sky-400 font-medium">
                            Can I buy online?
                        </div>
                        <div className="collapse-content">
                            <p>Simple online car buying: browse, choose, pay securely. Hassle-free delivery, transparent process. Your dream car, just a click away.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-transparent">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl text-sky-400 font-medium">
                            Do you have loan policy?
                        </div>
                        <div className="collapse-content">
                            <p>Flexible car loans tailored to your needs. Low interest rates, easy application, fast approval. Drive home your dream car today.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraTwo;