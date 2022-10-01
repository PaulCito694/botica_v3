import React from "react";
export default function AppLayout({
  title,
  renderHeader,
  children,
}) {
  return (
    <div className='mx-8'>
        <main>{children}</main>
    </div>
  );
}
