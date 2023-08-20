"use client";

import { Toaster } from "sonner";
import { SessionProvider } from "next-auth/react";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <Toaster position="bottom-right" />
      {children}
    </SessionProvider>
  );
};
