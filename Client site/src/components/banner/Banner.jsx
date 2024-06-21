import { useContext } from "react";
import { GlobalContex } from "../authProvider/AuthProvider";
import BannerSlide from "../bannerSlide/BannerSlide";


const Banner = () => {
    const {drawings} = useContext(GlobalContex);
   const bannerSlides = drawings.slice(0,6)

    return (
        <div className="px-2 md:px-8 lg:px-20 mt-24">
            <BannerSlide bannerSlides={bannerSlides}></BannerSlide>
        </div>
    );
};

export default Banner;