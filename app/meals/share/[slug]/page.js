import React from "react";

function page({ params }) {
  return <div>share: {params.slug}</div>;
}

export default page;
