import { useContext } from "react";
import { GlobalContex } from "../components/authProvider/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";


const AllArtAndCraft = () => {
    const { drawings } = useContext(GlobalContex);

    return (
        <div className="px-2 md:px-8 lg:px-20 mt-8 font-inter text-center">
             <Helmet>
                <title>All art and craft | CraftArt</title>
            </Helmet>
            <h1 className="text-3xl font-semibold ">All the added items are listed here</h1>
            <div className="mt-6 w-full">
                <table className="border w-full">
                    <thead className="border-[2px] border-[#ef2853] bg-[#e8f0feB0] ">
                        <tr className="lg:text-2xl">
                            <th className="border-[1px] border-[#ef2853] hidden lg:flex justify-center"> Id </th>
                            <th className="border-[1px] border-[#ef2853]"> Name</th>
                            <th className="border-[1px] border-[#ef2853]">Category</th>
                            <th className="border-[1px] border-[#ef2853]">Price</th>
                            <th className="border-[1px] border-[#ef2853]">Customization</th>
                            <th className="border-[1px] border-[#ef2853]">button</th>
                        </tr>
                    </thead>
                    <tbody className="lg:text-xl lg:font-medium">
                        {drawings.map((drawing) => <tr key={drawing._id}> <td className="border-[1px] border-[#ef2853] py-3 hidden lg:flex"> {drawing._id}</td> <td className="border-[1px] border-[#ef2853]">{drawing.item}</td> <td className="border-[1px] border-[#ef2853]">{drawing.subCategory}</td> <td className="border-[1px] border-[#ef2853]">{drawing.price}</td> <td className="border-[1px] border-[#ef2853]">{drawing.customization}</td> <td className="border-[1px] border-[#ef2853]"><Link to={`/cardDetail/${drawing._id}`} className="bg-[#ef2853] hidden lg:flex lg:py-2 lg:px-2 rounded-xl text-white hover:bg-black">View Details</Link>
                        <Link to={`/cardDetail/${drawing._id}`} className="bg-[#ef2853] lg:py-2 lg:hidden lg:px-2 rounded-xl text-white hover:bg-black">View</Link>
                        </td> </tr>)}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllArtAndCraft;