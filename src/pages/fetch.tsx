import { AuthenticatedPage } from "@/components/authenticated-page";
import { BurnForm } from "@/components/burn-form";
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

  const submitIceCreamFlavor = async (body: any) => {
    const response = await fetch("/api/send-burn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${getToken()}`,
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    console.log(data);

    toast({
      title: "Ice Cream Flavor Submitted",
      description: `Your ice cream flavor ${JSON.stringify(body)} has been submitted.`
    });
  }

  return (
    <>
      <BurnForm user={user} logout={logout} onSubmit={(flavor: string) => {submitIceCreamFlavor(flavor)}} />
      <Toaster />
    </>
  );
}
