import React from "react";

export default function DonationCard({ donate }) {
  const { campaign_title,campaign_type, user_name, donation_ammount, image } = donate;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Title: {campaign_title}</h2>
        <div className="badge badge-primary">{campaign_type}</div>
        <p>Donated by: {user_name}</p>
        <div className="card-actions">
          <div className="badge badge-outline">
            Donation Ammount: {donation_ammount}$
          </div>
        </div>
      </div>
    </div>
  );
}
