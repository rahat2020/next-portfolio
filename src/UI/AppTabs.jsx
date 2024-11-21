"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown } from "react-feather";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { addTabs } from "@/redux/app/appSlice";

const AppTabs = ({
  isFullWidthTab = false,
  isItemsCenter = false,
  isSticky = true,
  id = "tab-id",
  secondComponent,
  tabs = [],
  tabWrapperMargin = "mx-4",
  callback = () => {}
}) => {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const router = useRouter();
  const isMobileScreen = useMediaQuery("(max-width: 768px)");

  const activeTab = useSelector((state) => state?.app?.tabs?.[id]?.activeTab);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const handleActiveTab = (index, tab) => {
    dispatch(addTabs({ [id]: { activeTab: index } }));
    if (callback) callback(tab);
    setDropdownOpen(false);
  };

  const getMainWrapperClasses = () => {
    let classes = "py-2 rounded-full ";

    if (isSticky) {
      classes += "sticky top-0 z-40 lg:bg-gray ";
    }

    if (isItemsCenter) {
      classes += "items-center ";
    }

    if (secondComponent) {
      classes += "flex justify-between ";
    } else {
      classes += "flex flex-1 ";
    }

    if (tabWrapperMargin) {
      classes += `lg:mx-8 ${tabWrapperMargin} `;
    }

    if (isFullWidthTab) {
      classes += "w-full ";
    }

    return classes;
  };

  const handleMobileTab = (params, index) => {
    if (params?.content) {
      handleActiveTab(index, params);
      router.push(params?.path);
    }
  };

  const getTabButtonClasses = (path) => {
    let classes = "inline text-sm font-bold lg:px-8 px-4 py-2.5 rounded-full ";
    if (pathname?.includes(path)) {
      classes += "bg-brand-light text-brand";
    } else {
      classes += "text-regular";
    }

    return classes;
  };

  useEffect(() => {
    dispatch(addTabs({ [id]: { activeTab: 1 } }));
  }, [dispatch, id]);

  return (
    <div className={getMainWrapperClasses()}>
      {isMobileScreen ? (
        <div className="w-full sm:w-[85%] bg-white shadow-md rounded-lg p-1 flex items-center justify-between relative">
          <div className="w-[85%]">
            {tabs.map((tab, index) => (
              <div key={tab.id} className={`${index === activeTab ? "" : "hidden"}`}>
                <input
                  type="text"
                  className="text-14 font-medium ms-2 py-2 bg-blue-soft text-brand rounded-md text-center w-full"
                  value={tab.label}
                  disabled
                />
              </div>
            ))}
          </div>
          <div
            role="button"
            tabIndex={0}
            className="px-4 flex  items-center justify-end  w-[20%]"
            onClick={toggleDropdown}
          >
            <span>
              <ChevronDown className="text-gray-deep w-6 h-6" />
            </span>
          </div>
          {isDropdownOpen && (
            <div className="w-full mt-1 bg-white rounded-lg text-center p-2 absolute top-12 right-0 z-40 shadow-lg">
              {tabs?.map((tab, index) => (
                <button
                  type="button"
                  key={tab?.id}
                  className={`text-left w-full text-14 font-medium px-5 py-2 ${
                    index === activeTab ? "bg-blue-soft text-brand" : "text-regular"
                  } rounded-md`}
                  onClick={() => handleMobileTab(tab, index)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div>
          <div
            className={`bg-white rounded-full lg:mx-8 p-1 ${
              isFullWidthTab ? "grid grid-cols-2 w-full" : "flex flex-wrap text-center gap-[5px]"
            }`}
          >
            {tabs?.map(
              (tab) =>
                tab?.show && (
                  <Link
                    onClick={callback}
                    className={getTabButtonClasses(tab?.path)}
                    href={tab?.path}
                    key={tab?.id}
                  >
                    <span className="text-sm font-semibold">{tab?.label}</span>
                  </Link>
                )
            )}
          </div>
          {secondComponent}
        </div>
      )}
    </div>
  );
};

export default AppTabs;
