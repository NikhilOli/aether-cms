import { notFound } from "next/navigation";
import { getAuthSession } from "../api/auth/[...nextauth]/route";


export default async function DashboardPage() {
  const session = await getAuthSession();

  if (!session) {
    notFound();
    return null;
  } 
  return (
    <section className="flex w-full h-screen justify-center items-center">
      <p>Welcome back! {session.user?.name ?? "User"}</p>
    </section>
  );
}
