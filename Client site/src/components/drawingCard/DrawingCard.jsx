import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";

const DrawingCard = ({ drawing }) => {
    return (
        <Fade>
            <div className='border-[1px] border-[#403D3E80] p-2 rounded-xl'>
                <div style={{ backgroundImage: `url(${drawing.photo})` }} className='bg-no-repeat h-[40vh] lg:h-auto bg-center bg-cover py-5 px-5 rounded-xl'>

                    <div className='flex justify-between items-center lg:mt-44'>
                        <h1 className='bg-[#D7D2D3B3] px-4 py-3 text-black text-xl font-semibold rounded-xl'>Price: <span className='text-[#ef2853]'>{drawing.price} TK</span></h1>
                        <h1 className='bg-[#D7D2D3B3] px-4 py-3 text-black text-xl font-semibold rounded-xl'>Rating: <span className='text-[#ef2853]'> {drawing.rating}</span></h1>
                    </div>

                </div>
                <div className='flex justify-between mt-5'>
                    <h1 className='bg-[#e8f0fe] px-3 py-2 text-[#403D3E] rounded-xl'>Customization: {drawing.customization}</h1>
                    <h1 className='bg-[#e8f0fe] px-3 py-2 text-[#403D3E] rounded-xl'>Stock Status: {drawing.stockStatus}</h1>
                </div>
                <div className='mt-6 flex justify-center'>
                    <Link to={`/cardDetail/${drawing._id}`} className="bg-[#ef2853] hover:bg-black text-white text-lg font-medium py-3 px-3 rounded-lg w-full text-center">View Detail</Link>
                </div>
            </div>
        </Fade>
    );
};

DrawingCard.propTypes = {
    drawing: PropTypes.object
}
export default DrawingCard;