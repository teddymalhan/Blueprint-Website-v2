import React from "react";

export default function PageContainer({ title, children }) {
  return (
    <div className="mx-10 md:mx-16 xl:mx-36 py-12">
      {title ? (
        <h1 className="text-3xl md:text-4xl font-semibold mb-8">{title}</h1>
      ) : null}
      {children}
    </div>
  );
}
