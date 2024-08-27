import landingBanner from "../../../assets/landingBanner.jpg"

export default function Banner() {
    return (
        <div>
            <div className="bg-gradient-to-r from-slate-600 to-white relative text-white">
                <img className="mix-blend-multiply h-[80vh] md:w-screen md:h-[85vh] object-cover" src={landingBanner} alt="" />

                <div className="max-w-7xl mx-auto">
                    <div className="absolute top-[20%] md:top-0 md:translate-y-1/2 px-2 md:px-0">
                        <p className="font-semibold">WELCOME TO MENERA</p>

                        <h1 className="my-4 md:my-6 text-4xl md:text-5xl font-bold myFont">International <br /> Standard Futsal <br /> Field</h1>

                        <p className="mb-7 md:mb-9">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nostrum pariatur nisi repellat ea odio!</p>

                        <div className="md:flex items-center gap-x-5">
                            <button className="primaryBtn md:h-9 my-4 md:my-6">Book Now</button>

                            <button className="secondaryBtn md:h-9">Reservation Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
