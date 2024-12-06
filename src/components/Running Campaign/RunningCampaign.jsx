import React, { useEffect, useState } from "react";
import CampaignCard from "../CampaignCard";

export default function RunningCampaign() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/campaigns`)
      .then((res) => res.json())
      .then((result) => {
        const deadline = result[0].deadline;
        console.log(deadline);
        const date = new Date();
        const today = date.toISOString().split("T")[0];
        console.log(`today${today}`)
        console.log(today>deadline);
        setCampaigns(result);
      });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center my-8">
      <div className="mb-3 text-2xl font-bold">
        Campaigns({campaigns?.length})
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {campaigns.map((campaign) => (
          <CampaignCard key={campaign._id} campaign={campaign} />
        ))}
      </div>
    </div>
  );
}
