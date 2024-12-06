import React from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

export default function CampaignDetails() {
  const campaign = useLoaderData();
  const {
    _id,
    image,
    campaign_title,
    campaign_type,
    description,
    donation_amount,
    deadline,
  } = campaign;

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.quantity.value = '';
    e.target.type.value = '';
    e.target.notes.value = '';
    e.target.location.value = '';
    const notify = () => toast.success('Thank you ! We will reach your destination soon');
    notify();
  };

  return (
    <div className="py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          {/* Image Section */}
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300 mb-4">
              <img
                className="w-full h-full object-cover"
                src={image}
                alt="donation"
              />
            </div>
          </div>
          {/* Product Info Section */}
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Title : {campaign_title}</h2>
            {/* <p className="text-gray-600 text-sm mb-4">
              {title}
            </p> */}
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700">Division: </span>
                <span className="text-gray-600">{campaign_type}</span>
              </div>
              <div>
                <span className="font-bold text-gray-700">Status: </span>
                <span className="text-gray-600">{donation_amount}</span>
              </div>
            </div>
            {/* Size Selection */}
            <div className="mb-4">
              <span className="font-bold text-gray-700">Contact Info:</span>
              <div className="flex items-center mt-2">
                {deadline}
              </div>
            </div>
            {/* Product Description */}
            <div>
              <span className="font-bold text-gray-700">Campaign Description:</span>
              <p className="text-gray-600 text-sm mt-2">
                {description}
              </p>
            </div>
          </div>
        </div>
        {/* form */}
      <div className="card bg-base-100 w-full max-w-6xl shrink-0 shadow-2xl mx-auto">
        <form onSubmit={handleSubmit} className="card-body">
        <h2 className="text-center font-bold text-2xl">Donation Form Field</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Quantity of items</span>
            </label>
            <input
              type="text"
              name="quantity"
              placeholder="e.g. 2 jackets, 3 blankets"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Item type</span>
            </label>
            <input
              type="text"
              name="type"
              placeholder="e.g., blanket, jacket, sweater"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Pickup location</span>
            </label>
            <input
              type="text"
              name="location"
              placeholder="e.g. House 12, Road 5, Dhanmondi, Dhaka"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Additional notes (optional)</span>
            </label>
            <input
              type="text"
              name="notes"
              placeholder="important instruction"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary bg-primary border-none">
              Donate Now
            </button>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
}
