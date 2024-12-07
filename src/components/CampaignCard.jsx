import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";

export default function CampaignCard({ campaign,campaigns, setCampaigns }) {
  const {
    _id,
    image,
    campaign_title,
    campaign_type,
    description,
    minimum_donation,
    deadline,
  } = campaign;
  const today = new Date().toISOString().split("T")[0];
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleDelete = (id) => {
    if(!user){
      navigate('/login');
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

        fetch(`http://localhost:3000/campaigns/${id}`,{
          method:'DELETE'
        })
        .then(res=>res.json())
        .then(result=>console.log(result))
        const remaining = campaigns.filter(camp=>camp._id!=id)
        setCampaigns(remaining);
      }
    });
  };

  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure className="w-full h-[230px]">
        <img className="w-full h-full" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{campaign_title}</h2>
        <p className="overflow-hidden">{description.slice(0, 100)}...</p>
        <div className="badge badge-secondary bg-primary border-none">
          {campaign_type}
        </div>
        <div className="font-bold">Minimum donation {minimum_donation} $</div>
        {today > deadline ? (
          <div className="w-fit bg-red-500 px-3 p rounded-xl">Passed</div>
        ) : (
          <div className="w-fit bg-green-500 px-3 p rounded-xl">active</div>
        )}

        <div className="card-actions ">
          <Link
            to={`/campaignDetails/${_id}`}
            className="btn btn-primary bg-primary hover:bg-indigo-500 border-none"
          >
            See more
          </Link>
          <Link
            to={`/updateCampaign/${_id}`}
            className="btn btn-primary bg-primary hover:bg-indigo-500 border-none"
          >
            Update
          </Link>
          <button
            onClick={()=>handleDelete(_id)}
            className="btn btn-primary bg-red-500 hover:bg-red-600 border-none"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
    // <h1>hello</h1>
  );
}
