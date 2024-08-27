
export default function Facilities() {
    // #FAF7EF
    return (
        <div className="bgColor mt-20">

            <div className="max-w-7xl mx-auto px-2 md:px-0 py-10">
                <h1 className="text-blue-600 font-semibold uppercase">Popular Facilities</h1>
                <h1 className="font-bold text-3xl md:text-5xl text-black">We will continue to develop our facilities</h1>

                <div className="grid md:grid-cols-4 gap-2 mt-5">
                    {/* Data will be came from database */}

                    <div className="border hover:scale-105 overflow-auto transition cursor-pointer bg-white">
                        <div className="h-52 object-cover overflow-hidden">
                            <img src="https://img.freepik.com/premium-photo/tennis-court-with-large-crowd-people-playing-tennis_1108514-170016.jpg?w=740" alt="" />
                        </div>
                        <div className="px-2 my-3">
                            <h3 className="text-xl text-black font-semibold">Facility Name</h3>
                            <p>There will be description of the facility</p>
                        </div>
                    </div>
                    <div className="border hover:scale-105 overflow-auto transition cursor-pointer bg-white">
                        <div className="h-52 object-cover overflow-hidden">
                            <img src="https://img.freepik.com/premium-photo/tennis-court-with-large-crowd-people-playing-tennis_1108514-170016.jpg?w=740" alt="" />
                        </div>
                        <div className="px-2 my-3">
                            <h3 className="text-xl text-black font-semibold">Facility Name</h3>
                            <p>There will be description of the facility</p>
                        </div>
                    </div>
                    <div className="border hover:scale-105 overflow-auto transition cursor-pointer bg-white">
                        <div className="h-52 object-cover overflow-hidden">
                            <img src="https://img.freepik.com/premium-photo/tennis-court-with-large-crowd-people-playing-tennis_1108514-170016.jpg?w=740" alt="" />
                        </div>
                        <div className="px-2 my-3">
                            <h3 className="text-xl text-black font-semibold">Facility Name</h3>
                            <p>There will be description of the facility</p>
                        </div>
                    </div>
                    <div className="border hover:scale-105 overflow-auto transition cursor-pointer bg-white">
                        <div className="h-52 object-cover overflow-hidden">
                            <img src="https://img.freepik.com/premium-photo/tennis-court-with-large-crowd-people-playing-tennis_1108514-170016.jpg?w=740" alt="" />
                        </div>
                        <div className="px-2 my-3">
                            <h3 className="text-xl text-black font-semibold">Facility Name</h3>
                            <p>There will be description of the facility</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
