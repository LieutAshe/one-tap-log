import type { Metadata } from "next";
import React from "react";
import "../globals.css";

export const metadata: Metadata = {
    title: "OTL - Admin Access",
    description: "For log exporting and others.",
  };

export default function adminLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}   
        {children}
      </section>
    )
  }