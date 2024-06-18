"use client";

import { Image, NavLink } from "@/component";
import { Menu } from "@/component/icon";
import { cx } from "@/helper";
import { useEffect, useState } from "react";

const MenuButton = () => {
  const [openingSideMenu, setOpeningSideMenu] = useState<boolean>(false);

  useEffect(() => {
    const onScreenWidthChange = () => {
      if (document.body.offsetWidth >= 1024) {
        setOpeningSideMenu(false);
      }
    };
    window.addEventListener("resize", onScreenWidthChange);
    return () => {
      window.removeEventListener("resize", onScreenWidthChange);
    };
  }, []);

  return (
    <div className="select-none lg:hidden">
      <Menu
        className="cursor-pointer lg:hidden"
        onClick={() => setOpeningSideMenu(true)}
      />
      <div
        data-opening={openingSideMenu}
        className={cx(
          "fixed top-0 left-0 h-full w-full bg-[#00000088] transition-[visibility,opacity] duration-300 lg:hidden",
          "data-[opening=true]:visible data-[opening=true]:opacity-100 data-[opening=true]:cursor-auto",
          "data-[opening=false]:invisible data-[opening=false]:opacity-0 data-[opening=false]:cursor-none"
        )}
        onClick={() => setOpeningSideMenu(false)}
      >
        <div
          data-opening={openingSideMenu}
          className={cx(
            "relative h-full bg-neutral-900 flex flex-col text-lg transition-[width,opacity] duration-300 text-white",
            "data-[opening=true]:w-[300px] data-[opening=true]:opacity-100",
            "data-[opening=false]:w-[0px] data-[opening=false]:opacity-0"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center px-4 py-4 cursor-default md:px-8">
            <Image
              className="h-9 w-9 rounded-full mr-3"
              sizes="100%"
              src="/asset/image/logo-dark-60x60.png"
              alt="logo"
            />
            <span className="flex-1 line-clamp-1">Ruong Nguyen Trong</span>
          </div>
          <NavLink
            className={cx(
              "px-4 py-3 transition-colors duration-300 md:px-8",
              "hover:bg-orange-500 hover:text-white"
            )}
            href="/"
            label="Blog"
            onClick={() => {
              setOpeningSideMenu(false);
            }}
          />
          <NavLink
            className={cx(
              "px-4 py-3 transition-colors duration-300 md:px-8",
              "hover:bg-orange-500 hover:text-white"
            )}
            href="/me"
            label="About"
            onClick={() => {
              setOpeningSideMenu(false);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MenuButton;
