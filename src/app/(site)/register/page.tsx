import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { RegisterForm } from "@/components/auth/register-form";

export default function RegisterPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen relative">
      <div className="h-full w-full dark:bg-zinc-700 bg-zinc-300"></div>
      <div className="flex items-center justify-center h-full">
        <Card className="w-[400px]">
          <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription>Create a new account.</CardDescription>
          </CardHeader>

          <CardContent>
            <RegisterForm />
          </CardContent>

          <CardFooter>
            <p>
              Already have an account?{" "}
              <Link className="underline" href={"/login"}>
                Login
              </Link>
              .
            </p>
          </CardFooter>
        </Card>
      </div>

      <Link
        className={buttonVariants({
          className: "absolute flex items-center left-4 top-4",
          variant: "secondary",
        })}
        href={"/"}
      >
        <ChevronLeft className="mr-2 h-4 w-4" />
        Back
      </Link>
    </div>
  );
}
