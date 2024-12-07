import React from "react";
import Slider from "../components/slider/Slider";
import RunningCampaign from "../components/Running Campaign/RunningCampaign";
import Feedback from "../components/Feedback";
import Accordion from "../components/Accordion";

export default function HomePage() {
  return (
    <div>
      <Slider />
      <RunningCampaign/>
    <Feedback/>
    <Accordion/>
    </div>
  );
}
