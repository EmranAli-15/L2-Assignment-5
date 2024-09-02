import { useGetUserBookingsQuery } from "../../../redux/features/bookings/bookingsApi";
import Error from "../../../ui/Error";
import Loader from "../../../ui/Loader";

export default function MyBookings() {

    const { data: facilities, isLoading, isError } = useGetUserBookingsQuery(undefined);

    let content = null;

    if (isLoading) {
        return content = <Loader></Loader>
    };
    if (!isLoading && isError) {
        return content = <Error></Error>
    };
    if (!isError && !isLoading && facilities.data) {
        content = facilities.data.map((facility: any) => {
            return <tr key={facility._id}>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="h-12 w-24 rounded-md">
                                <img
                                    src={facility.facility.image}
                                    alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-semibold text-green-500">start : {facility.startTime}</div>
                            <div className="font-semibold text-red-500">end : {facility.endTime}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <span>date : {facility.date}</span>
                    <br />
                    <span className="font-semibold">Amount : {facility.payableAmount}</span>
                </td>
                <td>Location : {facility.facility.location}</td>
            </tr>
        })
    }

    return (
        <div>
            <div className="max-w-7xl mx-auto px-2 my-10">

                <div className="overflow-x-auto whitespace-nowrap overflow-hidden">
                    <table className="table w-full">
                        <tbody>
                            {content}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
}
