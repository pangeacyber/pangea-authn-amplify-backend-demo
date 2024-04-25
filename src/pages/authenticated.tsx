import { AuthenticatedPage } from "@/components/authenticated-page";
import { useAuth } from "@pangeacyber/react-auth";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const { authenticated, loading, login, logout, user, getToken } = useAuth();

  useEffect(() => {
    if(!loading && !authenticated) {
        router.push("/");
    }
  }, [loading, user, authenticated])

  const submitIceCreamFlavor = async (flavor: string) => {
    const response = await fetch("/api/send-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${getToken()}`,
      },
      body: JSON.stringify({ flavor }),
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <AuthenticatedPage user={user} logout={logout} onSubmit={(flavor: string) => {submitIceCreamFlavor(flavor)}} />
  );
}
