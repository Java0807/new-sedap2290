import React from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";

function Home() {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/") {
      router.replace("/dashboard");
    }
  }, [router]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return <div></div>;
}

export default Home;
