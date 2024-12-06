import { Link } from "react-router-dom";

export default function CampaignCard({ campaign }) {
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
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure className="w-full h-[230px]">
        <img className="w-full h-full" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{campaign_title}</h2>
        <p className="overflow-hidden">{description.slice(0, 100)}...</p>
        <div className="badge badge-secondary bg-black border-none">
          {campaign_type}
        </div>
        <div className="font-bold">Minimum donation {minimum_donation} $</div>
        {
          today>deadline?<div className="w-fit bg-red-500 px-3 p rounded-xl">Passed</div>:<div className="w-fit bg-green-500 px-3 p rounded-xl">active</div>
        }
        
        
        <div className="card-actions ">
          <Link
            to={`/campaignDetails/${_id}`}
            className="btn btn-primary bg-primary hover:bg-black border-none"
          >
            See more
          </Link>
          <button className="btn btn-primary bg-red-500 hover:bg-black border-none">Delete</button>
        </div>
      </div>
    </div>
    // <h1>hello</h1>
  );
}
