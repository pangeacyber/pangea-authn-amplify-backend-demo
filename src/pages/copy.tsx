import { MainComponent } from "@/components/main-component";
import { useAuth } from "@pangeacyber/react-auth";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const { authenticated, user, loading, login } = useAuth();

  // useEffect(() => {
  //   // Check if user authenticated
  //   if(!loading && authenticated) {
  //       router.push("/authenticated");
  //   }
  // }, [loading, user, authenticated])

  return (
    <MainComponent login={login} />
  );
}
