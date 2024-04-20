import type { Metadata } from "next";
import React from "react";
import "../globals.css";

export const metadata: Metadata = {
    title: "OTL - Tag Registration",
    description: "NFC Tag stickers first use. Up for Registration.",
  };

export default function registerLayout({
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