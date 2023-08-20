import { ClientSession } from "@/components/client-session";
import { ServerSession } from "@/components/server-session";

export default function Home() {
  return (
    <section className="container py-4">
      <div className="mb-24">
        <h1 className="text-center mt-24 text-6xl font-black">
          <span className="bg-clip-text bg-gradient-to-r from-cyan-400  via-indigo-500 to-purple-800 text-transparent">
            NextAuth
          </span>{" "}
          starter in <span className="text-blue-500">TypeScript</span>
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div className="dark:bg-zinc-800 bg-zinc-100 border p-4 rounded-lg">
          <ServerSession />
        </div>
        <div className="dark:bg-zinc-800 bg-zinc-100 border p-4 rounded-lg">
          <ClientSession />
        </div>
      </div>
    </section>
  );
}
