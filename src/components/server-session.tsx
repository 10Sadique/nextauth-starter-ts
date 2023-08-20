import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export const ServerSession = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <h2 className="mb-4 font-bold">Server Rendered Session</h2>
      {session && (
        <pre className="overflow-hidden">
          {JSON.stringify(session, null, 2)}
        </pre>
      )}
      {!session && <p>Not signed in.</p>}
    </div>
  );
};
