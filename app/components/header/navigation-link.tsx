import { NavLink, useLocation } from "@remix-run/react";
import { MenuLink, ActiveMenuLink } from "./styles";

interface NavigationLinkProps {
  to: string;
  title: string;
}

export const NavigationLink = ({ to, title }: NavigationLinkProps) => {
  const { pathname } = useLocation();
  return (
    <NavLink key={to} to={to}>
      {pathname === to ? (
        <ActiveMenuLink className="hover:text bg-gradient-to-r from-blue-sweat to-blue-baby bg-clip-text font-extrabold text-transparent">
          {title}
        </ActiveMenuLink>
      ) : (
        <MenuLink className="hover:text bg-gradient-to-r from-[#DBA6F4] to-[#A981FE] bg-clip-text font-extrabold text-transparent  hover:from-[#82b4ff] hover:to-[#dba6f4]">
          {title}
        </MenuLink>
      )}
    </NavLink>
  );
};
