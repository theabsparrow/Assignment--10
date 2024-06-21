import { useContext } from "react";
import { GlobalContex } from "../components/authProvider/AuthProvider";
import { CgProfile } from "react-icons/cg";
import { Helmet } from "react-helmet";


const Profile = () => {
    const {user} = useContext(GlobalContex);
    

   return (
        <div className="px-2 md:px-8 lg:px-20 mt-4 font-inter">
             <Helmet>
                <title>Profile | CraftArt</title>
            </Helmet>
            <div className="border p-5">
                <div className="flex flex-col items-center">
                    <div>
                        {
                            user.photoURL? <img className="w-[50vw] lg:w-[20vw] rounded-full" src={user.photoURL} alt="" />: <CgProfile className="text-4xl"></CgProfile>
                        }
                        
                    </div>
                    <div className="mt-4 text-center">
                        <h1 className="text-4xl font-semibold">{user.displayName? user.displayName : <span> display name not available</span>}</h1>
                        <h1 className="text-2xl font-semibold mt-3">{user.email? user.email : <span> no email available now</span>}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;