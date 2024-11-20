import Script from "next/script";
import React from "react";

const LinkedinProfile = () => {
  return (
    <div className="w-full bg-background flex justify-center items-center">
      <div
        className="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size="large"
        data-theme="light"
        data-type="HORIZONTAL"
        data-vanity="kazi-rahat2020"
        data-version="v1"
      ></div>
      <Script src="https://platform.linkedin.com/badges/js/profile.js" strategy="lazyOnload" />
    </div>
  );
};

export default LinkedinProfile;
