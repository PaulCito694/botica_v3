import React from "react";
export default function AppLayout({
  title,
  renderHeader,
  children,
}) {
  return (
    <div>
        <main>{children}</main>
    </div>
  );
}
