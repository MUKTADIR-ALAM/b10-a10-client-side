import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../provider/AuthProvider";

export default function AddCampaign() {
  const { user } = useContext(AuthContext);
  console.log(user);
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
    fetch("http://localhost:3000/addCampaign", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    e.target.reset();
    const notify = () => toast.success("Campaign created successfully");
    notify();
  };

  return (
    <div>
      {/* form */}
      <div className="card bg-base-100 w-full max-w-6xl shrink-0 shadow-2xl mx-auto">
        <form onSubmit={handleSubmit} className="card-body">
          <h2 className="text-center font-bold text-2xl">Add New Campaign</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image-URL</span>
            </label>
            <input
              type="text"
              name="image"
              placeholder="Enter image-URL"
              className="input input-bordered"
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
              Donate Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
