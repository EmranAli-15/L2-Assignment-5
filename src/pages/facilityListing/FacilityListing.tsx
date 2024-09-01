import { Link } from "react-router-dom";
import { useGetAllFacilityQuery } from "../../redux/features/facility/facilityApi";
import Error from "../../ui/Error";
import Loader from "../../ui/Loader";

export default function FacilityListing() {

    const { data: facilities, isLoading, isError } = useGetAllFacilityQuery(undefined);

    let content = null;

    if (isLoading) {
        return content = <Loader></Loader>
    };
    if (!isLoading && isError) {
        return content = <Error></Error>
    };
    if (!isLoading && !isError && facilities.data) {
        content = facilities.data.map((facility: any) => {
            return <Link to={`/bookings/${facility._id}`} key={facility._id} className="border hover:scale-105 overflow-auto transition bg-white">
                <div className="h-52 object-contain overflow-hidden">
                    <img src={facility.image} alt="" />
                </div>
                <div className="px-2 my-3">
                    <h3 className="text-xl text-black font-semibold">{facility.name}</h3>
                    <p>{facility.description}</p>
                </div>
            </Link>
        })
    }

    return (
        <div>
            <div className="max-w-7xl mx-auto px-2 min-h-screen">
                <div className="grid md:grid-cols-4 gap-4 mt-5">


                    {content}


                    {/* <div className="border hover:scale-105 overflow-auto transition cursor-pointer bg-white">
                        <div className="h-52 object-cover overflow-hidden">
                            <img src="https://img.freepik.com/premium-photo/tennis-court-with-large-crowd-people-playing-tennis_1108514-170016.jpg?w=740" alt="" />
                        </div>
                        <div className="px-2 my-3">
                            <h3 className="text-xl text-black font-semibold">Facility Name</h3>
                            <p>There will be description of the facility</p>
                        </div>
                    </div> */}


                </div>
            </div>
        </div>
    );
}
