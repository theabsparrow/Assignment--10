import { useContext } from "react";
import { GlobalContex } from "../components/authProvider/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";


const AddCraftItems = () => {

    const {user} = useContext(GlobalContex)

    const handleAddForm = (e) => {
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
        const newInfo = {name, email, item, subCategory, photo, time, price, rating, customization, stockStatus, detail, userEmail,}
        console.log(newInfo);
        
        if(email !== userEmail){
            toast.error("please use your current email address")
            return;
        }


        fetch("https://art-and-craft-server-three.vercel.app/drawing", {
            method: "POST",
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(newInfo)
        })
        .then( res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                toast.success("drwaing added successfully")
            }
            e.target.reset()
        })
    }

    return (
        <div className="px-2 md:px-8 lg:px-20 font-inter mt-8">
             <Helmet>
                <title>Add art | CraftArt</title>
            </Helmet>
            <div className="w-full flex justify-center">

                <div className="w-[90vw] shadow-xl px-8 py-4 rounded-xl border-[1px] border-[#ef2853]">
                    <div className="mt-4 lg:mt-0">
                        <h1 className="text-5xl lg:text-3xl font-semibold text-[#ef2853] text-center">Add your products</h1>
                    </div>

                    <form onSubmit={handleAddForm} className="mt-8 lg:mt-4">

                        {/* first row */}
                        <div className="flex flex-col lg:flex-row w-full justify-between items-center">
                            <div className="form-control w-full lg:w-[49%]">
                                <label className="label">
                                    <span className="label-text text-xl lg:text-base font-semibold lg:font-medium">User Name:</span>
                                </label>
                                <input type="text" placeholder="Enter your name" name="name" className="input input-bordered " required />
                            </div>

                            <div className="form-control w-full lg:w-[49%]">
                                <label className="label">
                                    <span className="label-text text-xl lg:text-base font-semibold lg:font-medium">User Email:</span>
                                </label>
                                <input type="email" placeholder="your email" name="email" className="input input-bordered" required />
                            </div>
                        </div>

                        {/* second row */}
                        <div className="flex flex-col lg:flex-row w-full justify-between items-center">
                            <div className="form-control w-full lg:w-[49%]">
                                <label className="label">
                                    <span className="label-text text-xl lg:text-base font-semibold lg:font-medium">Item Name:</span>
                                </label>
                                <input type="text" placeholder="your item name" name="item" className="input input-bordered " required />
                            </div>

                            <div className="form-control w-full lg:w-[49%]">
                                <label className="label">
                                    <span className="label-text text-xl lg:text-base font-semibold lg:font-medium">Sub-category Name:</span>
                                </label>
                                <select className="py-3 px-3 outline-none border-[1px] rounded-xl border-[#736F70]" name="subCategory" id="subCategory" required>
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
                                <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required/>
                            </div>

                            <div className="form-control w-full lg:w-[49%]">
                                <label className="label">
                                    <span className="label-text text-xl lg:text-base font-semibold lg:font-medium">Processing Time:</span>
                                </label>
                                <input type="text" placeholder="Processing time" name="time" className="input input-bordered" required/>
                            </div>
                        </div>

                        {/* fourth row */}
                        <div className="flex flex-col lg:flex-row w-full justify-between items-center">
                            <div className="form-control w-full lg:w-[49%]">
                                <label className="label">
                                    <span className="label-text text-xl lg:text-base font-semibold lg:font-medium">Price:</span>
                                </label>
                                <input type="text" placeholder="Price" name="price" className="input input-bordered" required/>
                            </div>

                            <div className="form-control w-full lg:w-[49%]">
                                <label className="label">
                                    <span className="label-text text-xl lg:text-base font-semibold lg:font-medium">Rating:</span>
                                </label>
                                <input type="text" placeholder="Rating" name="rating" className="input input-bordered" required/>
                            </div>
                        </div>

                        {/* fifth row */}
                        <div className="flex flex-col lg:flex-row w-full justify-between items-center">
                            <div className="form-control w-full lg:w-[49%]">
                                <label className="label">
                                    <span className="label-text text-xl lg:text-base font-semibold lg:font-medium">Customization</span>
                                </label>
                                <select className="py-3 px-3 outline-none border-[1px] rounded-xl border-[#736F70]" name="customization" id="customization" required>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>

                            <div className="form-control w-full lg:w-[49%]">
                                <label className="label">
                                    <span className="label-text text-xl lg:text-base font-semibold lg:font-medium">Stock Status</span>
                                </label>
                                <select className="py-3 px-3 border-[1px] border-[#736F70] rounded-xl outline-none" name="stockStatus" id="stockStatus" required>
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
                            <textarea placeholder="write about your product detail" className="outline-none border-[1px] border-[#736F70] rounded-xl px-4 py-3" name="detail" id="details" cols="10" rows="2" required></textarea>
                        </div>

                        {/* seventh row */}
                        <div className="form-control mt-6">
                            <button type="submit" className="bg-[#ef2853] text-white text-lg font-medium py-2 rounded-xl hover:bg-black">Add the Product</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddCraftItems;