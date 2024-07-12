import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "ERP Consultant",
          "Financial Manager",
          "Business Analyst",
            "ERP / Odoo Project Manager",
              "Fast Learner",

        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
