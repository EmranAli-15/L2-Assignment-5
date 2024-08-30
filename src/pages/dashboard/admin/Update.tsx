import { useDeleteFacilityMutation, useGetAllFacilityQuery } from "../../../redux/features/facility/facilityApi";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin3Fill } from "react-icons/ri";
import Loader from "../../../ui/Loader";
import Error from "../../../ui/Error";
import { useEffect } from "react";
import Swal from "sweetalert2";

export default function Update() {

  const { data: facilities, isLoading, isError } = useGetAllFacilityQuery(undefined);
  const [deleteFacility, { isSuccess }] = useDeleteFacilityMutation();

  const handleDelete = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        deleteFacility(id)
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  };
  useEffect(() => {

  }, [isSuccess])




  let content = null;

  if (isLoading) {
    return content = <Loader></Loader>
  };
  if (!isError && isError) {
    return content = <Error></Error>
  }
  if (facilities.data && !isError && !isError) {
    content = facilities.data.map((facility: any) => {
      return <tr key={facility._id}>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="h-12 w-24 rounded-sm">
                <img
                  src={facility.image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{facility.name}</div>
              <div className="text-sm text-red-600 font-semibold">TK {facility.pricePerHour}</div>
            </div>
          </div>
        </td>
        <td className="flex flex-col gap-4">
          <button>
            <FaEdit className="text-blue-600 hover:text-blue-700 size-5"></FaEdit>
          </button>
          <button onClick={() => handleDelete(facility._id)}>
            <RiDeleteBin3Fill className="text-red-600 hover:text-red-700 size-5"></RiDeleteBin3Fill>
          </button>
        </td>
      </tr>
    })
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">

          <tbody>
            {content}
            {/* <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="h-12 w-24 rounded-sm">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm text-red-600 font-semibold">United States</div>
                  </div>
                </div>
              </td>
              <td className="flex flex-col gap-4">
                <button>
                  <FaEdit className="text-blue-600 hover:text-blue-700 size-5"></FaEdit>
                </button>
                <button>
                  <RiDeleteBin3Fill className="text-red-600 hover:text-red-700 size-5"></RiDeleteBin3Fill>
                </button>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
