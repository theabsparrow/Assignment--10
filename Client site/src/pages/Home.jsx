import { Helmet } from "react-helmet";
import Banner from "../components/banner/Banner";
import Blogs from "../components/blogs/Blogs";
import Complain from "../components/complain/Complain";
import DrawingCards from "../components/drawingCards/DrawingCards";
import SubCategories from "../components/subCategories/SubCategories";


const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Home | CraftArt</title>
            </Helmet>
           <Banner></Banner>
           <DrawingCards></DrawingCards>
           <SubCategories></SubCategories>
           <Blogs></Blogs>
           <Complain></Complain>
        </div>
    );
};

export default Home;