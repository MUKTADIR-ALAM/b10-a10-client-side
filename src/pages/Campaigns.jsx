import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { RxUpdate } from "react-icons/rx";
import { MdDeleteForever } from "react-icons/md";
import { FaDonate } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import { FaSortAmountDownAlt } from "react-icons/fa";


export default function Campaigns() {
  const [loading, setLoading] = useState(true);
  const [campaigns, setCampaigns] = useState([]);
  const today = new Date().toISOString().split("T")[0];
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://crowdcube-server-nine.vercel.app/campaigns`)
      .then((res) => res.json())
      .then((data) => {
        setCampaigns(data);
        setLoading(false);
      });
  }, []);
  const handleDelete = (id) => {
    if (!user) {
      navigate("/login");
      return;
    }
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

  const handleSort = () => {
    const sorted = [...campaigns].sort((a, b) => {
      return parseInt(a.minimum_donation) - parseInt(b.minimum_donation);
    });
    console.log(sorted);
    setCampaigns(sorted);
  };

  if (loading) {
    return (
      <div className="w-fit mx-auto">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  return (
    <>
      <div className="mb-3 text-2xl font-bold mx-auto w-fit">
        All Campaigns({campaigns?.length})
        <button onClick={handleSort} className="btn ml-2">
          Sort <FaSortAmountDownAlt />
        </button>
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
                        See More
                      </Link>
                      {/* <Link
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
                      </button> */}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="w-fit mx-auto">No campaigns runing</p>
      )}
    </>
  );
}
