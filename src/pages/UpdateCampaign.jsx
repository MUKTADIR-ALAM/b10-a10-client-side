import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

export default function UpdateCampaign() {
  // const campaign = useLoaderData();
  const [loading, setLoading] = useState(true);
  const [campaign, setCampaign] = useState([]);
  const { user } = useContext(AuthContext);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://crowdcube-server-nine.vercel.app/campaignDetails/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCampaign(data);
        setLoading(false);
      });
  }, []);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const campaign_title = form.campaign_title.value;
    const campaign_type = form.campaign_type.value;
    const description = form.description.value;
    const minimum_donation = form.minimum_donation.value;
    const deadline = form.deadline.value;
    const user_email = form.user_email.value;
    const user_name = form.user_name.value;
    const data = {
      image,
      campaign_title,
      campaign_type,
      description,
      minimum_donation,
      deadline,
      user_email,
      user_name,
    };
    fetch(
      `https://crowdcube-server-nine.vercel.app/updateCampaign/${campaign._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((result) => toast.success("Successfully Updated!"));
    navigate(-1);
  };

  if (loading) {
    return (
      <div className="w-fit mx-auto">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  return (
    <div>
      {/* form */}
      <div className="card bg-base-100 w-full max-w-6xl shrink-0 shadow-2xl mx-auto">
        <form onSubmit={handleSubmit} className="card-body">
          <h2 className="text-center font-bold text-2xl">
            Update the Campaign
          </h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image-URL</span>
            </label>
            <input
              type="text"
              name="image"
              placeholder="Enter image-URL"
              className="input input-bordered"
              defaultValue={campaign?.image}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Campaign title</span>
            </label>
            <input
              type="text"
              name="campaign_title"
              placeholder="Enter Campaign title"
              className="input input-bordered"
              defaultValue={campaign?.campaign_title}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Campaign type</span>
            </label>
            <select
              className="input input-bordered "
              name="campaign_type"
              defaultValue={campaign?.campaign_type}
              required
            >
              <option value="personal_issue">personal issue</option>
              <option value="startup">startup</option>
              <option value="business">business</option>
              <option value="creative_ideas">creative ideas</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              name="description"
              placeholder="Enter Description"
              className="input input-bordered"
              defaultValue={campaign?.description}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Minimum donation amount $</span>
            </label>
            <input
              type="number"
              name="minimum_donation"
              min="1"
              defaultValue={campaign?.minimum_donation}
              placeholder="Minimum donationt ammount $"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Deadline (Date)</span>
            </label>
            <input
              type="date"
              name="deadline"
              defaultValue={campaign.deadline}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <input
              type="text"
              name="user_email"
              className="input input-bordered"
              readOnly
              defaultValue={user?.email}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <input
              type="text"
              name="user_name"
              className="input input-bordered"
              readOnly
              defaultValue={user?.displayName}
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary bg-primary border-none">
              Update campaign
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
