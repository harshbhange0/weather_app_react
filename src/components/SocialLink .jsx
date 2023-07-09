import React from "react";

function SocialLink() {
  return (
    <div className="Social_link_holder container-fluid">
      <div className="git_link_holder">
        <a
          href="https://github.com/harshbhange0/weather_app_react"
          className="git_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-github"></i>
        </a>
      </div>
      <div className="linkedin_link_holder">
        <a
          href="https://www.linkedin.com/in/harshbhange0/"
          className="linkedIn_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-linkedin"></i>
        </a>
      </div>
      <div className="instagram_link_holder">
        <a
          href="https://www.instagram.com/harshbhange0/"
          className="instagram_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-instagram"></i>
        </a>
      </div>
      <div className="google_link_holder">
        <a
          href="mailto:harshbhnage123@gmail.com"
          className="google_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-google"></i>
        </a>
      </div>
    </div>
  );
}

export default SocialLink;
