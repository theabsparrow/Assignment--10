import { Fade } from "react-awesome-reveal";

const Complain = () => {
    return (
        <Fade>
            <div className="px-2 md:px-8 lg:px-20 font-inter mt-16">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-semibold text-[#3b4144]">QNA with Complain box</h1>
                    <p className="font-medium text-[#3b4144CC] w-[90vw] lg:w-[60vw] mx-auto mt-4">Here we have kept a section so that you can contact with us for the purpose of asking us your valuable question. we are very concern about your question. and honestly we are very excited to make sure that you can get your answer</p>
                </div>
                <div className="flex flex-col lg:flex-row-reverse justify-center gap-4 lg:gap-8">
                    {/* left side */}
                    <div className="flex flex-col justify center border-[1px] border-[#6B6C6E] rounded-xl p-4 ">
                        <h1 className="text-2xl text-[#3b4144CC] font-semibold text-center"> The answer of popular question</h1>
                        <div className="join join-vertical w-[90vw] lg:w-[40vw] mt-4 mx-auto">

                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" defaultChecked />
                                <div className="collapse-title text-xl font-medium">
                                    <h1>Is CraftArt works only for art and craft field?</h1>
                                </div>
                                <div className="collapse-content">
                                    <p>Yes, CraftArt is dedicated for only art and Craft . but it has a plan to move and explore other options</p>
                                </div>
                            </div>

                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium">
                                    <h1>Is CraftArt work for only drawing and painting?</h1>
                                </div>
                                <div className="collapse-content">
                                    <p>No It is just a sector. in art and craft we have also other category such as Sculpture and Modeling, Textile Arts, Paper Crafts & Glass Art,Ceramics and Pottery etc
                                        ,</p>
                                </div>
                            </div>

                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium">
                                    <h1>Is CraftArt arrange any exhibiton where general people can show their talent? </h1>
                                </div>
                                <div className="collapse-content">
                                    <p>Yes we arrange about two exhibition for displaying our own painting but we give the chance to the other so that they can show their talent.</p>
                                </div>
                            </div>

                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium">
                                    Is CraftArt a Ecommarce company I mean Does CraftArt have any option that public can buy and sell their work through CraftArt
                                </div>
                                <div className="collapse-content">
                                    <p>No, still now CraftArt is not a proper eCommarce site. but through our website you can only buy our products</p>
                                </div>
                            </div>

                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium">
                                    <h1>Does CraftArt authority call any nillam to show and sell their most famous painting?</h1>
                                </div>
                                <div className="collapse-content">
                                    <p>No we have no option for making a nillam but We call nillam sometimes when we need to make our charity fund strong.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* right side */}
                    <div className="border-[1px] border-[#6B6C6E] rounded-xl">
                        <div className="text-center mt-4">
                            <h1 className="text-2xl text-[#3b4144CC] font-semibold">Complain Here</h1>
                            <p className="font-medium text-[#3b4144CC] w-[90vw] lg:w-[40vw] mx-auto mt-5 ">complain here without signUp or login. just submit here your Name, email and drop your complain . dont forget to send your feedback</p>
                        </div>
                        <div className="w-[90vw] lg:w-[45vw] px-8 py-[30px] rounded-xl mx-auto shadow-2xl mt-5">
                            <div className="text-center mb-5">
                                <h1 className="text-2xl text-[#3b4144CC] font-semibold">submit form</h1>
                            </div>
                            <form>

                                <div className="form-control">
                                    <input type="text" placeholder="Your Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-4">
                                    <input type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-4">
                                    <input type="text" placeholder="your complain" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-4">
                                    <input type="text" placeholder="Your feedback" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn bg-[#ef2853] text-white hover:bg-black font-medium">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default Complain;