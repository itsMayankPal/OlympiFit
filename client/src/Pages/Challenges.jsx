import React from "react";
import ChallengesContent from "../Components/ChallengesContent";
import ChallengesGrid from "../Components/ChallengesGrid";
import ProgressBars from "../Components/ProgressBars";
import JoinDetailButton from "../Components/JoinDetailButton";
export default function Challenges() {
  return (
    <div>
      <ChallengesContent></ChallengesContent>
      <ChallengesGrid></ChallengesGrid>
      <ProgressBars />
      <JoinDetailButton></JoinDetailButton>
    </div>
  );
}
