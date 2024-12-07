import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import DonationCard from "../components/DonationCard";
import { AuthContext } from "../provider/AuthProvider";

export default function MyDonation() {
  const donations = useLoaderData();
  const { user } = useContext(AuthContext);
  const myDonations = donations.filter((d) => d.user_email == user?.email);
  return (
    <div className="w-fit mx-auto">
      <h2 className="w-fit mx-auto my-3 text-2xl font-bold">
        All donation contribute
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto">
        {myDonations.map((donate) => (
          <DonationCard donate={donate} key={donate._id} />
        ))}
      </div>
    </div>
  );
}
