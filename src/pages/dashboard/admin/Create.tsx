import { FormEvent, useEffect, useState } from "react";
import { useAddFacilityMutation } from "../../../redux/features/facility/facilityApi";
import toast, { Toaster } from 'react-hot-toast';

export default function Create() {

  let toastId: string;

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");

  const [addFacility, { isLoading, isError, isSuccess }] = useAddFacilityMutation();

  const clearForm = () => {
    setName("");
    setDescription("");
    setPrice("");
    setLocation("");
    setImage("");
  }

  useEffect(() => {
    if (isSuccess) {
      toast.success('Your Facility Uploaded', {
        id: toastId,
      });
      clearForm();
    };
    if (isError) {
      toast.error('Something Went Wrong!', {
        id: toastId,
      });
    }
  }, [isError, isSuccess]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toastId = toast.loading('Uploading Your Facility...');
    const pricePerHour = parseFloat(parseFloat(price).toFixed(2));

    const data = {
      name,
      pricePerHour,
      description,
      location,
      image
    };

    addFacility(data);
  };

  return (
    <div>
      <Toaster toastOptions={{ duration: 3000 }} />

      <h1 className="myFont font-bold text-3xl md:text-5xl text-black text-center mb-10 mt-5 md:mt-0">CREATE A NEW FACILITY</h1>

      <form onSubmit={handleSubmit}>

        <div className="grid md:grid-cols-2 w-full gap-x-5">
          <div className="w-full max-w-sm min-w-full mt-4">
            <label className="block mb-1 text-sm text-slate-800">
              Facility Name
            </label>
            <input
              type="text"
              className="myInputFields" //Go to the index.css file for "myInputFields" styles
              placeholder="Enter facility name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="w-full max-w-sm min-w-full mt-4">
            <label className="block mb-1 text-sm text-slate-800">
              Facility Price
            </label>
            <input
              type="number"
              className="myInputFields" //Go to the index.css file for "myInputFields" styles
              placeholder="Enter facility price"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 w-full gap-x-5">
          <div className="w-full max-w-sm min-w-full mt-4">
            <label className="block mb-1 text-sm text-slate-800">
              Facility Description
            </label>
            <input
              type="text"
              className="myInputFields" //Go to the index.css file for "myInputFields" styles
              placeholder="Enter facility description"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="w-full max-w-sm min-w-full mt-4">
            <label className="block mb-1 text-sm text-slate-800">
              Facility Location
            </label>
            <input
              type="text"
              className="myInputFields" //Go to the index.css file for "myInputFields" styles
              placeholder="Enter facility location"
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>



        {/* This input type file field will be updated for choosing file from local device */}

        {/* file:h-full file:-ml-3 file:px-4 file:rounded-sm file:border-0 file:text-sm file:font-semibold file:bg-pink-50 file:text-pink-700 hover:file:bg-pink-100 */}

        <div className="grid md:grid-cols-2 w-full gap-x-5">
          <div className="w-full max-w-sm min-w-full mt-4">
            <label className="block mb-1 text-sm text-slate-800">
              Facility Image Link
            </label>
            <input
              type="text"
              className="myInputFields " //Go to the index.css file for "myInputFields" styles
              placeholder="https://example-image-link"
              required
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
        </div>

        <div className="w-full gap-x-5">
          <div className="w-full max-w-sm min-w-full mt-8">
            <input
              disabled={isLoading}
              type="submit"
              className="myInputFields text-center cursor-pointer" //Go to the index.css file for "myInputFields" styles
              placeholder="SUBMIT" />
          </div>
        </div>

      </form>

    </div>
  );
}
