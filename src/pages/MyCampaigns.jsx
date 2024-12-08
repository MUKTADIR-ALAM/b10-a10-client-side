import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { RxUpdate } from "react-icons/rx";
import { MdDeleteForever } from "react-icons/md";
import { FaDonate } from "react-icons/fa";
import Swal from "sweetalert2";

export default function MyCampaigns() {
  const { user } = useContext(AuthContext);
  const { email } = useParams();
  // const data = useLoaderData();

  // const [data,setData] = useState();
  const [loading, setLoading] = useState(true);
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetch(`https://crowdcube-server-nine.vercel.app/myCampaigns/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setCampaigns(data);
        setLoading(false);
      });
  }, []);

  const today = new Date().toISOString().split("T")[0];
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });

        fetch(`https://crowdcube-server-nine.vercel.app/campaigns/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => console.log(result));
        const remaining = campaigns.filter((camp) => camp._id != id);
        setCampaigns(remaining);
      }
    });
  };
  if (loading) {
    return (
      <div className="w-fit mx-auto">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center my-8">
      <div className="mb-3 text-2xl font-bold">
        My Campaigns({campaigns?.length})
      </div>
      {campaigns.length ? (
        <div className="overflow-x-auto w-11/12 mx-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Serial</th>
                <th>Title</th>
                <th>Type</th>
                <th>deadline</th>
                <th>Status</th>
                <th>Minimum Donation</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {campaigns.map((campaign, idx) => {
                return (
                  <tr key={campaign._id}>
                    <th>{idx + 1}</th>
                    <td>{campaign.campaign_title}</td>
                    <td>{campaign.campaign_type}</td>
                    <td>{campaign.deadline}</td>
                    <td>{today > campaign.deadline ? "passed" : "active"}</td>
                    <td>{campaign.minimum_donation}$</td>
                    <td className="space-x-2 space-y-1 flex justify-center items-center">
                      <Link
                        to={`/campaignDetails/${campaign._id}`}
                        className="btn "
                      >
                        <FaDonate />
                      </Link>
                      <Link
                        to={`/updateCampaign/${campaign._id}`}
                        className="btn"
                      >
                        <RxUpdate />
                      </Link>
                      <button
                        onClick={() => handleDelete(campaign._id)}
                        className="btn"
                      >
                        <MdDeleteForever />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No campaigns runing</p>
      )}
    </div>
  );
}
