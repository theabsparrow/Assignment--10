import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { BsStopwatch } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import Swal from 'sweetalert2';

const MyDrawings = ({ myDrawing, drawingInfo, setDrawingInfo }) => {
    const { _id, photo, item, subCategory, detail, time, price, rating, customization, stockStatus } = myDrawing;

    const handleDelete = (_id) => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://art-and-craft-server-three.vercel.app/drawing/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                              Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });
                                const remaining = drawingInfo.filter((draw) => draw._id !== _id)
                                setDrawingInfo(remaining);
                        }
                    })
            }
        });
    }

    return (
        <div>
            <div className="border-[1px] border-[#403D3E] rounded-xl p-2 lg:p-4 font-inter">
                <div className="mb-4">
                    <h1 className="text-3xl font-semibold text-center"> Detail Info</h1>
                </div>
                <div className="flex flex-col lg:flex-row bg-[#e8f0feB0] rounded-xl rounded-l-xl p-0 lg:p-4">
                    <div className="p-2 lg:p-4 ">
                        <img className="w-[80vw] lg:w-[40vw] rounded-xl" src={photo} alt="image" />
                    </div>
                    <div className="p-1 lg:p-4">
                        <div className="border-b-[2px] border-dashed border-[#403D3E80] pb-4 px-4">
                            <h1 className="text-2xl font-semibold"><span className="text-black">Product Name:</span> {item}</h1>
                            <h1 className="text-xl font-semibold mt-4 "><span className="text-black">Sub-category Name:</span> <span className="font-medium">{subCategory}</span></h1>
                            <p className="text-lg font-medium mt-4 "><span className="text-black">Description:</span> <span className="font-normal ">{detail}</span></p>
                        </div>

                        <div className="mt-4 border-b-[2px] border-dashed border-[#403D3E80] pb-4 px-4">

                            <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between">
                                <h1 className="flex rounded-xl bg-[#ef28534D] items-center gap-1 text-lg font-semibold py-2 px-3"><BsStopwatch></BsStopwatch> <span className="text-black">Preparing Time:</span> <span className="font-medium">{time}</span></h1>

                                <h1 className="flex rounded-xl bg-[#ef285333] items-center gap-1 text-lg font-semibold py-2 px-3"> <span className="text-black">Price:</span> <span className="font-medium">{price}</span></h1>

                                <h1 className="flex rounded-xl bg-[#ef2853CC] items-center gap-1 text-lg font-semibold py-2 px-3"><span className="text-black">Rating:</span> <span className="font-medium">{rating}</span> <FaStar className="text-yellow-500"></FaStar></h1>
                            </div>

                            <div className="flex flex-col lg:flex-row justify-center gap-5 mt-5">
                                <h1 className="flex rounded-xl bg-[#ef285399] items-center gap-1 text-lg font-semibold py-2 px-3"> <span className="text-black">Customization:</span> <span className="font-medium">{customization}</span></h1>

                                <h1 className="flex rounded-xl bg-[#ef285366] items-center gap-1 text-lg font-semibold py-2 px-3"> <span className="text-black">Stock Status:</span> <span className="font-medium">{stockStatus}</span></h1>
                            </div>

                        </div>

                        <div className="flex items-center justify-between mt-4">
                            <Link to={`/updateInfo/${_id}`} className="bg-[#ef2853] hover:bg-black text-white rounded py-3 px-3 text-lg font-medium flex items-center gap-2"> <GrUpdate></GrUpdate> <span>Update Info</span></Link>
                            <Link onClick={() => { handleDelete(_id) }} className="bg-red-600 hover:bg-black text-white rounded py-3 px-3 text-lg font-medium flex items-center gap-1"> <MdDelete className='text-2xl'></MdDelete> <span>Delete Info</span></Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

MyDrawings.propTypes = {
    myDrawing: PropTypes.object,
  drawingInfo:PropTypes.array,
  setDrawingInfo:PropTypes.func
}
export default MyDrawings;