import TuksLogo from "../../assets/svg/tuksLogo.svg?react";
import { Link, useLocation } from "react-router-dom";
import { SidebarData } from "../../json/sidebar.jsx";
import classNames from "classnames";

const Sidebar = () => {
    const location = useLocation();

    return (
        <div className="border-r border-alto h-screen p-8 overflow-y-scroll">
            <div className="flex flex-col justify-center items-center">
                <TuksLogo className="w-20 h-12" />
                <section>
                    {SidebarData.sidebar.map((section, index) => (
                        <div key={index} className="pt-8">
                            <h3 className="text-dusty-gray text-xs font-inter-medium tracking-[17%]">
                                {section.section}
                            </h3>
                            <ul className="pt-4">
                                {section.items.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className={classNames(
                                            "flex items-center gap-4 py-3 mt-4 rounded-xl px-4",
                                            {
                                                "bg-dodger-blue text-white": location.pathname === item.route,
                                                "bg-transparent": location.pathname !== item.route
                                            }
                                        )}
                                    >
                                        {item.icon}
                                        <Link
                                            to={item.route}
                                            className={classNames("text-base font-inter-medium tracking-[-3%]", {
                                                "text-white": location.pathname === item.route,
                                                "text-dusty-gray": location.pathname !== item.route
                                            })}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
};

export default Sidebar;
