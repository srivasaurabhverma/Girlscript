import React from "react";
import mock from "./images/mocktest.svg";

function Mock() {
  return (
    <div>
      <div class="mock-container">
        <div class="illustration">
          <img src={mock} alt=""></img>
        </div>
        <div class="text">
          <h1 className="main-heading-home">Give a mock test</h1>
          <p class="para">
            On successful completion of the above two steps, you can take up a
            mock test for your track. Passing Criteria: 70% Incase someone fails
            to achieve this then they need not worry. We'll mail a 2nd mock test
            to them.
          </p>
          <div className="links">
            <a href="https://forms.gle/KeCxkhS9jhowm6yJ9" target="_blank">
              Azure Fundamentals Mock Test
            </a>
            <a href="https://forms.gle/R7HYbsHbxFLRSNcn6" target="_blank">
              Data Fundamentals Mock Test
            </a>
            <a href="https://forms.gle/VmvzVC7Nartgd46F9" target="_blank">
              Security Fundamentals Mock Test
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mock;
