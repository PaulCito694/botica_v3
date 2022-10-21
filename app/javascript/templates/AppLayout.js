import React from "react";
import Header_template from "../organisms/Header_template";
export default function AppLayout({
  title,
  renderHeader,
  children,
}) {
  return (
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">

          <div>
          <main>{children}</main>
        </div>
      </div>
  );
}
