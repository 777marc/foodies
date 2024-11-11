import Link from "next/link";

function page() {
  return (
    <>
      <div>Meals</div>
      <p>
        <Link href="meals/123">Meal 123</Link>
      </p>
      <p>
        <Link href="meals/share/123">Share</Link>
      </p>
    </>
  );
}

export default page;
