import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import DonationCard from "../components/DonationCard";
import { AuthContext } from "../provider/AuthProvider";

export default function MyDonation() {
  // const donations = useLoaderData();
  const [loading, setLoading] = useState(true);
  const [donations, setDonations] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://crowdcube-server-nine.vercel.app/donate`)
      .then((res) => res.json())
      .then((data) => {
        setDonations(data);
        setLoading(false);
      });
  }, []);

  const myDonations = donations.filter((d) => d.user_email == user?.email);

  if (loading) {
    return (
      <div className="w-fit mx-auto">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="w-fit mx-auto">
      <h2 className="w-fit mx-auto my-3 text-2xl font-bold">
        All donation contribute
      </h2>
      {myDonations.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto">
          {myDonations.map((donate) => (
            <DonationCard donate={donate} key={donate._id} />
          ))}
        </div>
      ) : (
        <p className="w-fit mx-auto">You have no donation contribute</p>
      )}
    </div>
  );
}
