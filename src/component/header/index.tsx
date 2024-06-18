import { Container, NavLink } from "@/component";
import { cx } from "@/helper";
import dynamic from "next/dynamic";
import ThemeChanger from "./theme-changer";

const MenuButton = dynamic(() => import("./menu-button"), {
  ssr: false,
});

export const Header = () => {
  return (
    <div
      className={cx(
        "fixed top-0 w-full mx-auto bg-slate-100 z-10",
        "dark:bg-neutral-900"
      )}
    >
      <Container className={cx("py-4 flex items-center justify-between")}>
        <div className="h-9 w-9 bg-cover bg-[url(/asset/image/logo-light-60x60.png)] dark:bg-[url(/asset/image/logo-dark-60x60.png)]"></div>
        <div className="flex items-center space-x-5 lg:space-x-10">
          <div className="hidden text-base space-x-10 lg:flex">
            <NavLink href="/" label="Blog" />
            <NavLink href="/me" label="About" />
          </div>
          <ThemeChanger />
          <MenuButton />
        </div>
      </Container>
    </div>
  );
};