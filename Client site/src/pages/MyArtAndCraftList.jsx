import { useContext, useEffect, useState } from "react";
import { GlobalContex } from "../components/authProvider/AuthProvider";
import MyDrawings from "../components/myDrawing/MyDrawings";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";


const MyArtAndCraftList = () => {
    const [sort, setSort] = useState("all");
    const [drawingInfo, setDrawingInfo] = useState([])
    const { drawings, user } = useContext(GlobalContex)
    const myDrawings = drawings.filter((drawing) => drawing.email === user.email)


    useEffect(() => {
        let output = [...myDrawings];
        if (sort === "all") {
            setDrawingInfo(output)
        }
        if (sort === "yes") {
            const data = output.filter((item) => item.customization === sort)
            setDrawingInfo(data)

        }
        if (sort === "no") {
            const data = output.filter((item) => item.customization === sort)
            setDrawingInfo(data)
        }

    }, [sort])

    useEffect(() => {

    }, [drawingInfo])
    // console.log(drawingInfo)
    const handleSorting = (e) => {

        setSort(e.target.value);
    }

    return (
        <div className="px-2 md:px-8 lg:px-20 mt-6 font-inter" >
             <Helmet>
                <title>My art | CraftArt</title>
            </Helmet>

            <div>
                <h1 className="text-4xl font-semibold text-center">Products added by you</h1>
                <h1 className="text-xl font-semibold text-center mt-5">email: {user?.email ? <span className="text-[#ef2853CC]">{user.email}</span> : <span>No email adress available</span>}</h1>
            </div>

            <div className="flex justify-center">
                <select onChange={handleSorting} className="bg-[#ef2853CC] px-3 py-3 text-white text-lg font-medium outline-none rounded-lg" name="sorting" id="sorting">
                    <option value="all">All</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>

            <div>
                {
                    drawingInfo.length > 1 ? <div className="mt-5 space-y-6">
                        {
                            drawingInfo.map((myDrawing) => <MyDrawings key={myDrawing._id}
                                myDrawing={myDrawing}
                                drawingInfo={drawingInfo}
                                setDrawingInfo={setDrawingInfo}
                            ></MyDrawings>)
                        }
                    </div> : <div className="mt-5">
                        <h1 className="text-lg font-medium text-center"> you didn't add any item yet. please  <Link className="text-blue-600 hover:text-[#ef2853]" to='/addCardItems'>add item</Link></h1>
                    </div>
                }
            </div>
        </div>
    );
};

export default MyArtAndCraftList;