import { useLoaderData } from "react-router-dom";
import { useState } from "react";

export default function Campaigns() {
  const data = useLoaderData();
  const [campaigns, setCampaigns] = useState(data);
  // console.log(campaigns);
  return (
    <div className="flex flex-col justify-center items-center my-8">
      <div className="mb-3 text-2xl font-bold">
        All Campaigns({campaigns?.length})
      </div>
      {campaigns.length ? (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Serial</th>
                <th>Title</th>
                <th>Type</th>
                <th>Minimum Donation</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {campaigns.map((campaign) => {
                return (<tr>
                  <th>1</th>
                  <td>Cy Ganderton Lorem</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                  <td className="">
                    <button className="btn ">see more</button>
                    <button className="btn">Update</button>
                    <button className="btn">X</button>
                  </td>
                </tr>);
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
