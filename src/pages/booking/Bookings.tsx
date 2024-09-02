import { useParams } from "react-router-dom";
import { useGetAFacilityQuery } from "../../redux/features/facility/facilityApi";
import { useEffect, useState } from "react";
import { HiSelector } from "react-icons/hi";
import Loader from "../../ui/Loader";
import Error from "../../ui/Error";
import { availabilityApi, useAvailabilityQuery } from "../../redux/features/availability/availability";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useCreateBookingMutation } from "../../redux/features/bookings/bookingsApi";
import toast, { Toaster } from "react-hot-toast";

export default function Bookings() {
    const dispatch = useAppDispatch();
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [slotTimes, setSlotTimes] = useState([]);

    const { user } = useAppSelector(state => state.auth);

    const { id } = useParams();
    useEffect(() => {
        const getDate = new Date().toJSON().slice(0, 10);
        setDate(getDate);
    }, [])

    const { data: facility, isLoading: isFacilityLoading, isError: isFacilityError } = useGetAFacilityQuery(id);
    const { data: availability, isLoading: isAvailabilityLoading, isError: isAvailabilityError, } = useAvailabilityQuery(date);
    const [createBooking, { isLoading: loadingBooking, isError: errorBooking, isSuccess: successBooking }] = useCreateBookingMutation();

    useEffect(() => {
        if (!isAvailabilityLoading && !isAvailabilityError && availability.data) {
            setSlotTimes(availability.data);
        }
    }, [availability])

    const handleGetAvailability = async () => {
        const available = await dispatch(availabilityApi.endpoints.availability.initiate(date)).unwrap();
        setSlotTimes(available.data)

    };

    useEffect(() => {
        if (loadingBooking) {
            toast.loading("Booking, Please wait");
        };
        if (successBooking) {
            toast.success("Your booking is success");
        };
        if (errorBooking) {
            toast.error("Something went wrong!");
        }
    }, [loadingBooking, errorBooking, successBooking])

    const handleBooking = () => {
        const timeSlot = time.split('||');
        const startTime = timeSlot[0];
        const endTime = timeSlot[1];

        const data = {
            facility: id,
            date,
            startTime,
            endTime,
        };

        if (!user) {
            return toast.error("Please Login First.")
        } else {
            createBooking(data);
        }
    }



    let content = null;
    if (isFacilityLoading) {
        content = <Loader></Loader>
    };
    if (!isFacilityLoading && isFacilityError) {
        content = <Error></Error>
    };
    if (!isFacilityLoading && !isFacilityError && facility?.data) {

        content = <div>
            <div>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="h-24 w-48 rounded-sm">
                            <img
                                src={facility?.data?.image}
                                alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{facility?.data?.name}</div>
                        <div className="text-sm text-red-600 font-semibold">TK {facility?.data?.pricePerHour}</div>
                    </div>
                </div>
            </div>
        </div>
    }

    return (
        <div>
            <div className="max-w-7xl mx-auto px-2 min-h-[70vh]">
                <Toaster toastOptions={{ duration: 3000 }}></Toaster>
                <div className="my-10 flex justify-center">
                    {content}
                </div>

                <div className="md:flex gap-x-10 items-center justify-center">
                    <div className="flex justify-center">
                        <input onChange={(e) => setDate(e.target.value)} type="date" name="" id="" />
                    </div>

                    <div className="w-full max-w-sm min-w-[200px]">
                        <label className="block mb-1 text-sm text-slate-800">
                            Available Slot
                        </label>
                        <div className="relative">
                            <select
                                onChange={(e) => setTime(e.target.value)}
                                className="w-full h-10 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
                            >
                                <option value="Select a time">Select date and time</option>
                                {slotTimes?.map((time: any, index) => (
                                    <option key={index} value={`${time.startTime}||${time.endTime}`}>
                                        Start: {time.startTime} End: {time.endTime}
                                    </option>
                                ))}
                            </select>
                            <span className="absolute top-3 right-2">
                                <HiSelector></HiSelector>
                            </span>
                        </div>
                    </div>

                </div>

                <div className="flex justify-center my-10">
                    <button className="primaryBtn md:h-9 md:gap-x-3" onClick={handleGetAvailability} >Check Slot</button>
                </div>


                <div className="flex justify-center my-10">
                    <button disabled={!time || loadingBooking} className="primaryBtn h-9 md:h-9 md:gap-x-3" onClick={handleBooking} >
                        {!time ? "Select Time" : 'Book Now'}
                    </button>
                </div>
            </div>
        </div>
    );
}
