import { FaQuoteLeft } from "react-icons/fa";

export default function Testimonial() {
    return (
        <div className="bgColor mt-20">
            <div className="max-w-7xl mx-auto py-10 px-2">
                <h1 className="text-blue-600 font-semibold uppercase">testimonial</h1>
                <h1 className="font-bold text-3xl md:text-5xl text-black">Satisfied Clients</h1>

                <div className="grid md:grid-cols-2 mt-5 md:pb-20">
                    <div className="md:relative">
                        <div>
                            <img className="h-[350px] w-full md:w-[35%] object-cover" src="https://img.freepik.com/free-photo/football-player-jugging-arena_23-2147644528.jpg?t=st=1724743394~exp=1724746994~hmac=5b2433994a2a719d41b65991fd7a7951d15c7520ea8a1fe485088f9f8e4471e7&w=740" alt="" />
                        </div>

                        <div className="hidden md:block md:absolute top-[50%] left-[40%]">
                            <img className="md:h-[250px]" src="https://img.freepik.com/free-photo/soccer-player-kicking-ball_176420-16470.jpg?t=st=1724743682~exp=1724747282~hmac=fbb44baf511065d50050dc4b69f258332fdb551483722eb0b4d5e55419282513&w=740" alt="" />
                        </div>

                        <div className="flex justify-center mt-2">
                            <div className="flex items-center px-8 py-2 gap-x-5 bg-white w-fit md:absolute z-10 md:top-[90%]">
                                <div className="size-[60px] rounded-full bg-blue-600 flex items-center justify-center text-white">
                                    <FaQuoteLeft size={25}></FaQuoteLeft>
                                </div>
                                <span className="text-[45px] text-blue-600 font-semibold">4.9</span>
                                <h1 className="myFont text-lg text-black">client satisfied</h1>
                            </div>
                        </div>
                    </div>


                    <div className="flex items-center justify-center">
                        <div>
                            <h1 className="font-bold text-center text-3xl md:text-5xl text-black">Satisfied Clients</h1>
                            <p className="text-justify text-xl mt-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, voluptates non deserunt minus blanditiis explicabo necessitatibus, architecto, molestias voluptatem obcaecati eligendi dolorum nostrum sit possimus fuga animi? Atque, rem, quas earum mollitia voluptas laboriosam impedit, quod possimus nostrum facere corporis.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
