import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <div className="bg-black text-white">
                <div className="p-2 lg:p-10 rounded-lg py-14 max-w-[1320px] mx-auto">
                    <div className='flex flex-col md:flex-row gap-4 lg:gap-10'>
                        <div>
                            <Link to="/"><h2 className="text-xl font-semibold">The Car Shop</h2></Link>
                            <div className="flex text-sm font-bold mb-2">
                                <Link to="/login"><button className="underline me-1">Log In</button></Link>
                                <p>/</p>
                                <Link to="/Signup"><button className="underline ms-1">Sign Up</button></Link>
                            </div>
                            <Link to="https://facebook.com/"><img src='https://i.postimg.cc/Dysx5LPP/Group-9969.png' /></Link>
                        </div>
                        <div>
                            <ul className="text-sm font-medium">
                                <li>Why Us?</li>
                                <li>Warranty Conditions</li>
                                <li>Terms</li>
                                <li>Contact</li>
                                <li>Social Media</li>
                            </ul>
                        </div>
                        <div>
                            <img src="https://i.postimg.cc/Pr4wtqXk/Frame-2.png" alt="" />
                            <div>
                                <p>019-4533-3555</p>
                                <p>017-3535-5345</p>
                            </div>
                        </div>
                        <div>
                            <img src="https://i.postimg.cc/hG7v74Bv/Frame-3.png" alt="" />
                            <div>
                                <p>car.shop@gmail.com</p>
                                <p>carshop.automobiles@gmail.com</p>
                            </div>
                        </div>
                        <div>
                            <img src="https://i.postimg.cc/wvfPFcYk/new.jpg" alt="" />
                            <div>
                                <p>333, Tejgaon,<br />Dhaka, Bangladesh</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-3/4 text-left">
                            <hr className="mt-4" />
                            <hr className="mb-4" />
                        </div>
                        <div className="flex flex-col md:flex-row gap-4">
                            <Link to="/"> <img src="https://i.ibb.co/b2czjwh/carlogo-1.png" alt="" /></Link>
                            <div>
                                <p className="font-bold">Car Shop Inc.<br />Providing reliable service since 1999</p>
                                <p className="font-semibold">© 2015 - 23 Car Shop Inc. All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;