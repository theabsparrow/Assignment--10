import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="px-1 md:px-[20px] lg:px-[70px] bg-white h-screen">
             <Helmet>
                <title>Error !!! | CraftArt</title>
            </Helmet>
        <div className="text-center">
            <h1 className="text-[200px] font-bold font-Poppins text-red-500">Oops!</h1>
            <h1 className="text-[100px] font-semibold font-Poppins text-[#3b4144]">404 - Page Not Found</h1>
            <p className="text-4xl font-semibold font-Poppins text-[#3b4144] mt-4">The page you are looking for might have been removed or it has changed its name or the page is temporary unavailable</p>
        </div>
        <div className="flex justify-center mt-5">
            <Link className="px-3 py-3 bg-[#ef2853] text-white rounded-xl font-medium text-lg font-Poppins hover:bg-black hover:text-[#ef2853]" to="/">Go to Homepage</Link>
        </div>
    </div>
    );
};

export default ErrorPage;