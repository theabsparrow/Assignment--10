import { useContext } from "react";
import { GlobalContex } from "../components/authProvider/AuthProvider";
import { Link, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { BsStopwatch } from "react-icons/bs";
import { Helmet } from "react-helmet";

const CardDetail = () => {
    const { drawings } = useContext(GlobalContex);
    const { id } = useParams()
    const drawingInfo = drawings.find((drawingInfo) => drawingInfo._id === id)
    const { item, photo, subCategory, time, price, rating, customization, stockStatus, detail, } = drawingInfo;

    return (
        <div className="px-2 md:px-8 lg:px-20 mt-8 font-inter">
             <Helmet>
                <title>{item} | CraftArt</title>
            </Helmet>
            <div className="border-[1px] border-[#403D3E] rounded-xl p-4">
                <div className="mb-4">
                    <h1 className="text-3xl font-semibold text-center"> Detail Info</h1>
                </div>
                <div className="flex bg-[#e8f0feB0] rounded-xl rounded-l-xl p-4">
                    <div className="p-4 ">
                        <img className="w-[40vw] rounded-xl" src={photo} alt="image" />
                    </div>
                    <div className="p-4">
                        <div className="border-b-[2px] border-dashed border-[#403D3E80] pb-4 px-4">
                            <h1 className="text-2xl font-semibold"><span className="text-black">Product Name:</span> {item}</h1>
                            <h1 className="text-xl font-semibold mt-4 "><span className="text-black">Sub-category Name:</span> <span className="font-medium">{subCategory}</span></h1>
                            <p className="text-lg font-medium mt-4 "><span className="text-black">Description:</span> <span className="font-normal ">{detail}</span></p>
                        </div>

                        <div className="mt-4 border-b-[2px] border-dashed border-[#403D3E80] pb-4 px-4">

                            <div className="flex justify-between">
                                <h1 className="flex rounded-xl bg-[#ef28534D] items-center gap-1 text-lg font-semibold py-2 px-3"><BsStopwatch></BsStopwatch> <span className="text-black">Preparing Time:</span> <span className="font-medium">{time}</span></h1>

                                <h1 className="flex rounded-xl bg-[#ef285333] items-center gap-1 text-lg font-semibold py-2 px-3"> <span className="text-black">Price:</span> <span className="font-medium">{price}</span></h1>

                                <h1 className="flex rounded-xl bg-[#ef2853CC] items-center gap-1 text-lg font-semibold py-2 px-3"><span className="text-black">Rating:</span> <span className="font-medium">{rating}</span> <FaStar className="text-yellow-500"></FaStar></h1>
                            </div>

                            <div className="flex justify-center gap-5 mt-5">
                                <h1 className="flex rounded-xl bg-[#ef285399] items-center gap-1 text-lg font-semibold py-2 px-3"> <span className="text-black">Customization:</span> <span className="font-medium">{customization}</span></h1>

                                <h1 className="flex rounded-xl bg-[#ef285366] items-center gap-1 text-lg font-semibold py-2 px-3"> <span className="text-black">Stock Status:</span> <span className="font-medium">{stockStatus}</span></h1>
                            </div>

                        </div>

                        <div className="flex items-center justify-between mt-4">
                            <Link to='/addCardItems' className="bg-[#ef2853] hover:bg-black text-white rounded py-3 px-3 text-lg font-medium"> Add Item</Link>
                            <Link to='/mycraftList' className="bg-[#ef2853] hover:bg-black text-white rounded py-3 px-3 text-lg font-medium"> My Cart</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CardDetail;