import React, { useEffect, useState } from "react";
import CampaignCard from "../CampaignCard";

export default function RunningCampaign() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/campaigns`)
      .then((res) => res.json())
      .then((result) => {
        const deadline = result[0].deadline;
        const today = new Date().toISOString().split("T")[0];
        const remaning = result.filter(res=>res.deadline>=today)
        console.log(remaning);
        // console.log(`deadline ${deadline}`);
        // console.log(`today${today}`)
        // console.log(today>deadline);
        setCampaigns(remaning.slice(0,6));
      });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center my-8">
      <div className="mb-3 text-2xl font-bold">
        Running Campaigns({campaigns?.length})
      </div>
      {
      campaigns.length ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {campaigns.map((campaign) => (
        <CampaignCard key={campaign._id} campaign={campaign} />
      ))}
    </div> : <p>No campaigns runing</p>
      }
    </div>
  );
}
