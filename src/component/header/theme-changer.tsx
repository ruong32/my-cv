"use client";

import { THEME, THEME_KEY } from "@/common";
import { cx } from "@/helper";
import React from "react";
import { Loading } from "@/component/icon";

const ThemeChanger = () => {
  const [theme, setTheme] = React.useState<THEME>();

  React.useLayoutEffect(() => {
    const currentTheme: THEME =
      (localStorage.getItem(THEME_KEY) as THEME) || THEME.light;
    setTheme(currentTheme);
  }, []);

  return (
    <button
      className="relative h-8 w-8 rounded-full overflow-hidden"
      title="Switch to other theme"
    >
      {theme === undefined ? (
        <div className="grid place-items-center">
          <Loading className="h-5 w-5 text-blue-400" />
        </div>
      ) : (
        <div
          className={cx(
            "absolute top-0 w-full h-[200%] transition-[top] duration-200",
            theme === THEME.light ? "-top-full" : "top-0"
          )}
          onClick={() => {
            let newTheme = THEME.dark;
            if (theme === THEME.dark) {
              newTheme = THEME.light;
            }
            setTheme(newTheme);
            if (newTheme === THEME.dark) {
              document.documentElement.classList.add("dark");
            } else {
              document.documentElement.classList.remove("dark");
            }
            localStorage.setItem(THEME_KEY, newTheme);
          }}
        >
          <div className="h-1/2 bg-blue-900 text-lg grid place-items-center">
            🌙
          </div>
          <div className="h-1/2 bg-blue-100 text-lg grid place-items-center">
            ☀️
          </div>
        </div>
      )}
    </button>
  );
};

export default ThemeChanger;
