import { BurnBookComponent } from "@/components/burn-book-component";
import { MainComponent } from "@/components/main-component";
import { useAuth } from "@pangeacyber/react-auth";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {

  return (
    <BurnBookComponent />
  );
}
