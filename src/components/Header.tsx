import { HeaderLink } from "./HeaderLink";
import { GITHUB_LINK, LINKED_IN_LINK, MAIL_LINK, SITE_TITLE, XING_LINK } from "../consts";
import { Icons } from "./Icons";
import ThemeToggle from "./ThemeToggle";
import { useEffect, useMemo } from "react";

interface HeaderProps {
  mainPage?: boolean;
}

export const Header = ({ mainPage }: HeaderProps) => {
  const isNotMainPage = useMemo(() => {
    return mainPage === undefined || !mainPage
  }, [mainPage]) 

  useEffect(() => {
    console.log(mainPage)
  }, [mainPage])

  return (
    <header className="flex w-screen gap-3">
      <nav
        className={`fixed z-10 m-0 w-full border-b border-b-border bg-background/75 p-5 backdrop-blur-2xl transition-all justify-between ${isNotMainPage ? " flex" : ""}`}
          >
        <div className="flex items-center gap-3">
          {isNotMainPage && (
            <>
              <a onClick={() => window.history.back()} className="cursor-pointer">
                <Icons.back />
              </a>
              <a href="/" className="text-2xl font-bold no-underline">
                {SITE_TITLE}
              </a>
            </>
          )}
        </div>
        <div id="nav-buttons" className="flex items-center justify-end gap-3">
          {isNotMainPage && (
            <>
              <HeaderLink href={XING_LINK} target="_blank" aria-label="My XING Profile">
                <Icons.xing />
              </HeaderLink>
              <HeaderLink href={LINKED_IN_LINK} target="_blank" aria-label="My LinkedIn Profile">
                <Icons.linkedIn />
              </HeaderLink>
              <HeaderLink href={GITHUB_LINK} target="_blank" aria-label="My GitHub Profile">
                <Icons.github />
              </HeaderLink>
              <HeaderLink href={MAIL_LINK} aria-label="My E-Mail Profile">
                <Icons.mail />
              </HeaderLink>
            </>
          )}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};
