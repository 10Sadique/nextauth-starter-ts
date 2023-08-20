import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { signOut, useSession } from "next-auth/react";

import { Button, buttonVariants } from "@/components/ui/button";
import { AvatarDropdown } from "./avatar-dropdown";

export const NavLinks = () => {
  const { data: session } = useSession();
  const { setTheme, theme } = useTheme();

  const changeTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div className="space-x-4 flex items-center">
      {session && (
        <Button onClick={() => signOut()} variant={"secondary"}>
          Sign Out
        </Button>
      )}

      {!session && (
        <Link
          className={buttonVariants({
            variant: "secondary",
            className: "font-semibold",
          })}
          href={"/login"}
        >
          Login
        </Link>
      )}

      <Button onClick={changeTheme} variant="secondary" size="icon">
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>

      {session && <AvatarDropdown />}
    </div>
  );
};
