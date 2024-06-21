import { useEffect, useState } from "react";
import Blog from "./Blog";


const Blogs = () => {
    const [clients, setClient] = useState([]);
    useEffect(() => {
        fetch("client.json")
        .then(res => res.json())
        .then(data => {
            setClient(data);
        })
    },[])

    return (
        <div className="px-2 md:px-8 lg:px-20 font-inter mt-16">
            <div className="text-center">
                <h1 className="text-3xl font-bold leading-10 mb-5">Blogs writen by User about Drawing and painting</h1>
                <p className="w-[60vw] mx-auto text-lg font-medium">in this section we tried to make you get in touch with the basic knowledge about drawing . so our best user and client have written many article with there tremendous knowledge about drawing and painting so they are displayed here below</p>
            </div>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    clients.map((client, i) => <Blog key={i} client={client}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;