import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import CampaignCard from "../components/CampaignCard";

export default function MyCampaigns() {
  const { user } = useContext(AuthContext);
  const campaigns = useLoaderData();
  return (
    <div className="flex flex-col justify-center items-center my-8">
      <div className="mb-3 text-2xl font-bold">
        My Campaigns({campaigns?.length})
      </div>
      {campaigns.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {campaigns.map((campaign) => (
            <CampaignCard key={campaign._id} campaign={campaign} />
          ))}
        </div>
      ) : (
        <p>No campaigns runing</p>
      )}
    </div>
  );
}
