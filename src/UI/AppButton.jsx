"use client";
import React from "react";
import Link from "next/link";

const AppButton = ({
  href = "",
  text,
  icon: Icon,
  customStyles = "",
  customBtnStyles = "flex items-center",
  disable = false,
  iconClasses = "",
  withoutHrefBtn = false,
  targetBlank = "",
  callback = () => {}
}) => {
  return (
    <div
      className={`flex items-center px-2 md:px-6 py-1 md:py-2 rounded-md font-semibold duration-300 ${customStyles}`}
    >
      {withoutHrefBtn ? (
        <button disabled={disable} className={customBtnStyles} onClick={() => callback()}>
          {Icon && <Icon className={iconClasses || "w-5 h-5"} />}{" "}
          <span className="ms-2">{text}</span>
        </button>
      ) : (
        <Link href={href} onClick={callback} target={targetBlank} className="">
          <button disabled={disable} className={`flex items-center ${customBtnStyles}`}>
            {Icon && <Icon className={iconClasses || "w-5 h-5"} />}{" "}
            <span className="ms-2">{text}</span>
          </button>
        </Link>
      )}
    </div>
  );
};

export default AppButton;
