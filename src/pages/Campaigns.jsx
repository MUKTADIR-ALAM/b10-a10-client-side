import { useLoaderData } from "react-router-dom";
import CampaignCard from "../components/CampaignCard";
import { useState } from "react";

export default function Campaigns() {
  const data = useLoaderData();
  const [campaigns,setCampaigns] = useState(data);
  console.log(campaigns);
  return (
    <div className="flex flex-col justify-center items-center my-8">
      <div className="mb-3 text-2xl font-bold">
        Campaigns({campaigns?.length})
      </div>
      {
      campaigns.length ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {campaigns.map((campaign) => (
        <CampaignCard key={campaign._id} campaign={campaign} campaigns={campaigns} setCampaigns={setCampaigns} />
      ))}
    </div> : <p>No campaigns runing</p>
      }
      
    </div>
  );
}
