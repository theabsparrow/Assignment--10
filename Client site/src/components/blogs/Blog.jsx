import PropTypes from 'prop-types';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip'

const Blog = ({ client }) => {

    const { name, bloger_photo, category, photo, blog } = client;

    return (
        <Fade>
            <div className=" border p-4 rounded-xl">
                <div className='relative'>
                    <img className='rounded-xl' src={photo} alt="" />
                    <h1 className='absolute top-4 left-4 bg-[#D5D7DACC] py-2 px-4 rounded-xl'>{category}</h1>
                </div>
                <div className='mt-4 flex justify-between items-center'>
                    <div>
                        <img className='w-[25vw] lg:w-[6vw] rounded-full' src={bloger_photo} alt="" />
                    </div>
                    <div>
                        <h1 className='text-2xl font-medium'>{name}</h1>
                    </div>
                </div>
                <div className='mt-3'>
                    <h1>{blog.split("").slice(0,150)}
                        <Link id="my-anchor-element-id" className='text-blue-600'>read more</Link>
                        <Tooltip
                            // Don't forget the `#`!
                            anchorSelect="#my-anchor-element-id"
                            content="You cant't click here"
                        />
                    </h1>
                </div>
            </div>
        </Fade>
    );
};

Blog.propTypes = {
    client: PropTypes.object
}
export default Blog;