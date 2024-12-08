import React from "react";
import { useTypewriter } from 'react-simple-typewriter'
import Lottie from "lottie-react";
import qna from './qna.json'

export default function Accordion() {
  const [typeEffect] = useTypewriter({
    words:['Question and Answer','Question and Answer' ,'Question and Answer'],
    loop: 0,
    typeSpeed:80,
    delaySpeed:80
  })
  return (
    <div className="mb-4">
      <h2 className="text-center font-bold text-2xl mb-4">
      Common {typeEffect}
      </h2>

      <div className="flex justify-center items-center flex-col lg:flex-row gap-8">
        <div className="w-1/2">
          {/* <img src="https://i.ibb.co.com/3hVLNv6/Frame.png" alt="" /> */}
          <Lottie animationData={qna}/>
        </div>
        <div className="space-y-2">
          <div className="collapse bg-base-200">
            <input type="radio" name="my-accordion-1" defaultChecked />
            <div className="collapse-title text-xl font-medium">
            Q1: What is the purpose of the crowdfunding website?
            </div>
            <div className="collapse-content">
              <p>
              The website allows people to raise funds for projects, ideas, or causes such as personal needs, creative projects, or startups.
              </p>
            </div>
          </div>
          <div className="collapse bg-base-200">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
            Q2: What are the authentication requirements?
            </div>
            <div className="collapse-content">
              <p>
              The site includes login and registration with email and password. Passwords must have at least one uppercase letter, one lowercase letter, and a minimum of six characters. Google or GitHub login is also integrated. Success or error messages are displayed using toast or sweet alerts.
              </p>
            </div>
          </div>
          <div className="collapse bg-base-200">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
            Q3: What features does the “Add New Campaign” page have?
            </div>
            <div className="collapse-content">
              <p>
              It includes a form for adding campaigns with fields like image URL, title, type, description, minimum donation, deadline, and user info (read-only). Data is stored in the database, and success messages are shown using toast or sweet alerts.
              </p>
            </div>
          </div>
          <div className="collapse bg-base-200">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
            Q4: What links are in the navbar?
            </div>
            <div className="collapse-content">
              <p>
              The navbar includes links to Home, All Campaigns, Add New Campaign, My Campaign, My Donations, and conditional Login/Register or Logout buttons based on user status.
              </p>
            </div>
          </div>
          <div className="collapse bg-base-200">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
            Q5: What extra features are recommended?
            </div>
            <div className="collapse-content">
              <p>
              Suggestions include adding a dark/light theme toggle, using advanced React packages like Lottie React, implementing sort functionality on the All Campaign page, and showing a message if a campaign’s donation deadline has passed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
