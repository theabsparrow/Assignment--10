import { useContext } from "react";
import { GlobalContex } from "../authProvider/AuthProvider";
import DrawingCard from "../drawingCard/DrawingCard";


const DrawingCards = () => {
    const {drawings} = useContext(GlobalContex);
    const sixDrawings = drawings.slice(2,8);

    return (
        <div className="px-2 md:px-8 lg:px-20 mt-10 font-inter">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-[#403D3E] leading-10">See a fiew <span className="text-[#ef2853]">CraftArt's</span> collection here</h1>
                <p className="text-lg font-medium text-[#403D3E] w-[90vw] lg:w-[50vw] mx-auto mt-6">we the CraftArt community are displaying here some of our collection here. regularly we arrange an exhibition to show our new collection. here are some of the new collection on your viewing purpose</p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    sixDrawings.map((drawing) => <DrawingCard key={drawing._id} drawing={drawing}></DrawingCard>)
                }
            </div>
        </div>
    );
};

export default DrawingCards;