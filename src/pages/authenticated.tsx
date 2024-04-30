import { AuthenticatedPage } from "@/components/authenticated-page";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@pangeacyber/react-auth";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const { authenticated, loading, login, logout, user, getToken } = useAuth();

  // UI component states
  const { toast } = useToast();

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

    toast({
      title: "Ice Cream Flavor Submitted",
      description: `Your ice cream flavor ${flavor} has been submitted.`
    });
  }

  return (
    <>
      <AuthenticatedPage user={user} logout={logout} onSubmit={(flavor: string) => {submitIceCreamFlavor(flavor)}} />
      <Toaster />
    </>
  );
}
