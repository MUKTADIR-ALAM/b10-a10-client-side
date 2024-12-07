import React from "react";

export default function Accordion() {
  return (
    <div>
      <h2 className="text-center font-bold text-2xl mb-4">
        Common Question and Answer
      </h2>

      <div className="flex justify-center items-center flex-col lg:flex-row gap-8">
        <div className="w-1/2">
          <img src="https://i.ibb.co.com/3hVLNv6/Frame.png" alt="" />
        </div>
        <div className="space-y-2">
          <div className="collapse bg-base-200">
            <input type="radio" name="my-accordion-1" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Q: How can I donate clothes through this website?
            </div>
            <div className="collapse-content">
              <p>
                A: Simply log in or sign up, browse the active donation
                campaigns, and fill out the donation form with details about
                your items and pickup location.
              </p>
            </div>
          </div>
          <div className="collapse bg-base-200">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
              Q: What type of clothing can I donate?
            </div>
            <div className="collapse-content">
              <p>
                A: You can donate warm clothing like jackets, sweaters, scarves,
                gloves, socks, and blankets. Please ensure all items are clean
                and in good condition.
              </p>
            </div>
          </div>
          <div className="collapse bg-base-200">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
              Q: Is there a deadline for donating to campaigns?
            </div>
            <div className="collapse-content">
              <p>
                A: Each campaign may have specific timelines. You can find the
                deadline information on the campaign details page.
              </p>
            </div>
          </div>
          <div className="collapse bg-base-200">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
              Q: How are the donations distributed?
            </div>
            <div className="collapse-content">
              <p>
                A: Donations are collected by volunteers and distributed to
                vulnerable communities in rural and low-income areas across
                Bangladesh.
              </p>
            </div>
          </div>
          <div className="collapse bg-base-200">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
              Q: Can I track the impact of my donation?
            </div>
            <div className="collapse-content">
              <p>
                A: Yes, we share updates about how your contributions have
                helped through stories, photos, and campaign progress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
