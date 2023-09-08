import React from "react";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center m-10">
      <h3>About Us</h3>
      <h1>Why choose StartFit? Discover our unique edge</h1>
      <p>
        It’s our commitment to your health. We deliver effective, efficient
        workouts paired with nutritional guidance to help you reach your fitness
        peak.
      </p>
      <div className="flex flex-col sm:flex-row">
        <h3>Personalised Workouts</h3>
        <p>
          StartFit’s Expert Coaches are certified fitness pros dedicated to
          guiding you towards your health goals.
        </p>
        <h3>Cutting-edge Facilities</h3>
        <p>
          Our state-of-the-art facilities are designed to enhance your workout
          experience and fuel your progress.
        </p>
        <h3>Supportive Community</h3>
        <p>
          You’ll train alongside like-minded people who encourage and inspire
          each other towards their fitness goals.
        </p>
      </div>
    </div>
  );
};

export default About;
