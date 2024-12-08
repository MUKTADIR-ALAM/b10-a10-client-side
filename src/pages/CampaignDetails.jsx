import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

export default function CampaignDetails() {
  // const campaign = useLoaderData();
  const [loading, setLoading] = useState(true);
  const [campaign, setCampaign] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://crowdcube-server-nine.vercel.app/campaignDetails/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCampaign(data);
        setLoading(false);
      });
  }, []);

  const today = new Date().toISOString().split("T")[0];
  const {
    _id,
    image,
    campaign_title,
    campaign_type,
    description,
    minimum_donation,
    deadline,
  } = campaign;

  const handleSubmit = (e) => {
    e.preventDefault();
    const donation_ammount = e.target.donation_ammount.value;
    const user_email = user.email;
    const user_name = user.displayName;
    const data = {
      image,
      campaign_title,
      campaign_type,
      description,
      minimum_donation,
      deadline,
      user_email,
      user_name,
      donation_ammount,
    };
    fetch(`https://crowdcube-server-nine.vercel.app/donate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        const notify = () => toast.success("Thanks for your donation");
        notify();
      });
    navigate("/myDonations");
  };

  if (loading) {
    return (
      <div className="w-fit mx-auto">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="py-8 text">
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
            <h2 className="text-2xl font-bold mb-2">
              Title : {campaign_title}
            </h2>
            {/* <p className="text-gray-600 text-sm mb-4">
              {title}
            </p> */}
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold">Campaign Type: </span>
                <span className="">{campaign_type}</span>
              </div>
              <div>
                <span className="font-bold ">Status: </span>
                <span className="">
                  {today > deadline ? "passed" : "active"}
                </span>
              </div>
            </div>
            {/* Size Selection */}
            <div className="mb-4">
              <span className="font-bold ">Last Date:</span>
              <div className="flex items-center mt-2">{deadline}</div>
            </div>
            {/* Product Description */}
            <div>
              <span className="font-bold ">Campaign Description:</span>
              <p className=" text-sm mt-2">{description}</p>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">
                      Minimum donation Ammount {minimum_donation} $
                    </span>
                  </label>
                  <input
                    type="number"
                    min={minimum_donation}
                    name="donation_ammount"
                    placeholder="enter donation ammount"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  {today > deadline ? (
                    <button
                      disabled
                      className="btn btn-primary bg-primary border-none "
                    >
                      Deadline is Passed
                    </button>
                  ) : (
                    <button className="btn btn-primary bg-primary border-none">
                      Donate Now
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* form */}
        <div className="card bg-base-100 w-full max-w-6xl shrink-0 shadow-2xl mx-auto"></div>
      </div>
    </div>
  );
}
