import { Tooltip } from 'react-tooltip'

const SubCategories = () => {

    const handlesubCategories = e => {
        e.target.value
    }

    return (
        <div className="px-2 md:px-8 lg:px-20 mt-10 font-inter">
            <div className="text-center mb-6">
                <h1 className="text-4xl font-semibold leading-10">SubCategories with dropdown menu</h1>
                <p className="w-[90vw] lg:w-[60vw] mx-auto mt-5 text-lg font-medium">here we are going to implement an section where you can find your favorite subcategories itemsby checking this dropdown menu. here we are making this with a dropdown menu. check it out</p>
            </div>
            <div className="flex justify-center">
                <select onChange={handlesubCategories} id="my-anchor-element-id" className="outline-none bg-[#ef2853] py-3 px-3 rounded-lg text-white hover:bg-black" name="subcategories">
                    <option value="select one">Select One</option>
                    <option value="landscape">landscape</option>
                    <option value="Portrait Drawing">Portrait Drawing</option>
                    <option value="Watercolour Painting">Watercolour Painting</option>
                    <option value="Oil Painting">Oil Painting</option>
                    <option value="Charcoal Sketching">Charcoal Sketching</option>
                    <option value="Cartoon Drawing">Cartoon Drawing</option>
                </select>
                <Tooltip
                    // Don't forget the `#`!
                    anchorSelect="#my-anchor-element-id"
                    content="click here to open the dropdown menu"
                />
            </div>
        </div>
    );
};

export default SubCategories;