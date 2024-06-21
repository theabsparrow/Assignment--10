import { useContext } from "react";
import { GlobalContex } from "../components/authProvider/AuthProvider";
import { Link, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";


const UpdateInfo = () => {

    const { drawings, user } = useContext(GlobalContex);
    const { id } = useParams()
    const drawingInfo = drawings.find((drawingInfo) => drawingInfo._id === id)
    const { item, photo, subCategory, time, price, rating, customization, stockStatus, detail, name, email, _id } = drawingInfo;

    const handleUpdateForm = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const item = e.target.item.value;
        const subCategory = e.target.subCategory.value;
        const photo = e.target.photo.value;
        const time = e.target.time.value;
        const price = e.target.price.value;
        const rating = e.target.rating.value;
        const customization = e.target.customization.value;
        const stockStatus = e.target.stockStatus.value;
        const detail = e.target.detail.value;
        const userEmail = user.email;
        const updateNewInfo = { name, email, item, subCategory, photo, time, price, rating, customization, stockStatus, detail, userEmail, }
        console.log(updateNewInfo);

        if (email !== userEmail) {
            toast.error("please use your current email address")
            return;
        }

        fetch(`https://art-and-craft-server-three.vercel.app/drawing/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(updateNewInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success("updated info successfully")
                }

            })
    }

    return (
        <div className="px-2 md:px-8 lg:px-20 font-inter mt-8">
             <Helmet>
                <title>Update info | CraftArt</title>
            </Helmet>
            <div className="w-full flex justify-center">

                <div className="w-[90vw] shadow-xl px-8 py-4 rounded-xl border-[1px] border-[#ef2853]">
                    <div className="mt-4 lg:mt-0">
                        <h1 className="text-5xl lg:text-3xl font-semibold text-[#ef2853] text-center">Update your product info</h1>
                    </div>

                    <form onSubmit={handleUpdateForm} className="mt-8 lg:mt-4">

                        {/* first row */}
                        <div className="flex flex-col lg:flex-row w-full justify-between items-center">
                            <div className="form-control w-full lg:w-[49%]">
                                <label className="label">
                                    <span className="label-text text-xl lg:text-base font-semibold lg:font-medium">User Name:</span>
                                </label>
                                <input type="text" placeholder="Enter your name" name="name" defaultValue={name} className="input input-bordered " />
                            </div>

                            <div className="form-control w-full lg:w-[49%]">
                                <label className="label">
                                    <span className="label-text text-xl lg:text-base font-semibold lg:font-medium">User Email:</span>
                                </label>
                                <input type="email" placeholder="your email" name="email" defaultValue={email} className="input input-bordered" />
                            </div>
                        </div>

                        {/* second row */}
                        <div className="flex flex-col lg:flex-row w-full justify-between items-center">
                            <div className="form-control w-full lg:w-[49%]">
                                <label className="label">
                                    <span className="label-text text-xl lg:text-base font-semibold lg:font-medium">Item Name:</span>
                                </label>
                                <input type="text" placeholder="your item name" name="item" defaultValue={item} className="input input-bordered " />
                            </div>

                            <div className="form-control w-full lg:w-[49%]">
                                <label className="label">
                                    <span className="label-text text-xl lg:text-base font-semibold lg:font-medium">Sub-category Name:</span>
                                </label>
                                <select className="py-3 px-3 outline-none border-[1px] rounded-xl border-[#736F70]" name="subCategory" defaultValue={subCategory} id="subCategory">
                                    <option value="landscape">Landscape Painting</option>
                                    <option value="potrait">Portrait Drawing</option>
                                    <option value="waterColor">Watercolour Painting</option>
                                    <option value="oilPainting">Oil Painting</option>
                                    <option value="charcoal">Charcoal Sketching</option>
                                    <option value="cartoon">Cartoon Drawing</option>
                                </select>
                            </div>
                        </div>

                        {/* third row */}
                        <div className="flex flex-col lg:flex-row w-full justify-between items-center">
                            <div className="form-control w-full lg:w-[49%]">
                                <label className="label">
                                    <span className="label-text text-xl lg:text-base font-semibold lg:font-medium">Photo URL:</span>
                                </label>
                                <input type="text" placeholder="Photo URL" name="photo" defaultValue={photo} className="input input-bordered" />
                            </div>

                            <div className="form-control w-full lg:w-[49%]">
                                <label className="label">
                                    <span className="label-text text-xl lg:text-base font-semibold lg:font-medium">Processing Time:</span>
                                </label>
                                <input type="text" placeholder="Processing time" name="time" defaultValue={time} className="input input-bordered" />
                            </div>
                        </div>

                        {/* fourth row */}
                        <div className="flex flex-col lg:flex-row w-full justify-between items-center">
                            <div className="form-control w-full lg:w-[49%]">
                                <label className="label">
                                    <span className="label-text text-xl lg:text-base font-semibold lg:font-medium">Price:</span>
                                </label>
                                <input type="text" placeholder="Price" name="price" defaultValue={price} className="input input-bordered" />
                            </div>

                            <div className="form-control w-full lg:w-[49%]">
                                <label className="label">
                                    <span className="label-text text-xl lg:text-base font-semibold lg:font-medium">Rating:</span>
                                </label>
                                <input type="text" placeholder="Rating" name="rating" defaultValue={rating} className="input input-bordered" />
                            </div>
                        </div>

                        {/* fifth row */}
                        <div className="flex flex-col lg:flex-row w-full justify-between items-center">
                            <div className="form-control w-full lg:w-[49%]">
                                <label className="label">
                                    <span className="label-text text-xl lg:text-base font-semibold lg:font-medium">Customization</span>
                                </label>
                                <select className="py-3 px-3 outline-none border-[1px] rounded-xl border-[#736F70]" name="customization" defaultValue={customization} id="customization">
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>

                            <div className="form-control w-full lg:w-[49%]">
                                <label className="label">
                                    <span className="label-text text-xl lg:text-base font-semibold lg:font-medium">Stock Status</span>
                                </label>
                                <select className="py-3 px-3 border-[1px] border-[#736F70] rounded-xl outline-none" name="stockStatus" defaultValue={stockStatus} id="stockStatus">
                                    <option value="inStock">In Stock</option>
                                    <option value="Made To Order">Made to Order</option>
                                </select>
                            </div>
                        </div>

                        {/* sixth row */}
                        <div className="form-control w-full lg:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl lg:text-base font-semibold lg:font-medium">Details about the Product:</span>
                            </label>
                            <textarea placeholder="write about your product detail" className="outline-none border-[1px] border-[#736F70] rounded-xl px-4 py-3" name="detail" defaultValue={detail} id="details" cols="10" rows="2"></textarea>
                        </div>

                        {/* seventh row */}
                        <div className="form-control mt-6">
                            <input className="bg-[#ef2853] w-full text-white text-lg font-medium py-2 rounded-xl hover:bg-black" type="submit" value="Update the Product info" />
                        </div>
                        
                    </form>

                </div>
            </div>
        </div>
    );
};

export default UpdateInfo;