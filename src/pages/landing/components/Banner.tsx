import landingBanner from "../../../assets/landingBanner.jpg"

export default function Banner() {
    return (
        <div>
            <div className="bg-gray-500 relative text-white">
                <img className="mix-blend-multiply h-[80vh] md:w-screen md:h-[85vh] object-cover" src={landingBanner} alt="" />

                <div className="absolute top-[20%] px-5 md:px-10">
                    <p>WELCOME TO ME<span className="text-blue-600">NE</span>RA</p>

                    <h1 className="my-4 md:my-6 text-4xl font-semibold">International <br /> Standard Futsal <br /> Field</h1>

                    <p className="mb-7 md:mb-9">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nostrum pariatur nisi repellat ea odio!</p>

                    <div className="md:flex items-center gap-x-5">
                        <button className="primaryBtn md:h-9 my-4 md:my-6">Get Started</button>

                        <button className="secondaryBtn md:h-9">Reservation Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
