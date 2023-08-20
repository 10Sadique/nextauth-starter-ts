"use client";
import { useSession } from "next-auth/react";

export const ClientSession = () => {
  const { data: session } = useSession();
  return (
    <div>
      <h2 className="mb-4 font-bold">Client Rendered Session</h2>
      {session && (
        <pre className="overflow-hidden">
          {JSON.stringify(session, null, 2)}
        </pre>
      )}
      {!session && <p>Not signed in.</p>}
    </div>
  );
};
