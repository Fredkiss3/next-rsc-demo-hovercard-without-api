"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  // do not refetch on window focus
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 3600_000,
    },
  },
});

import * as React from "react";

export type QueryProviderProps = {
  children: React.ReactNode;
};

export function QueryProvider({ children }: QueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
