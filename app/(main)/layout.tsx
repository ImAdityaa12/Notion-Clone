"use client";

import { useConvexAuth } from "convex/react";
import React from "react";
import { Spinner } from "../(marketing)/_components/spinner";
import { redirect } from "next/navigation";
import Navigation from "./_components/Navigation";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isLoading, isAuthenticated } = useConvexAuth();
  {
    isLoading && (
      <div>
        <Spinner size="lg" />
      </div>
    );
  }
  if (!isAuthenticated) {
    return redirect("/");
  }
  return (
    <div className="dark:bg=[#1f1f1f] flex h-full">
      <main className="flex flex-1 h-full overflow-y-auto">
        <Navigation />
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
