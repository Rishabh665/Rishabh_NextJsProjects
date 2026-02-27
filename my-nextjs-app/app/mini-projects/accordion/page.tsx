import Link from "next/link";

export default function Variant() {
  return (
    <div>
      <h2>Accordion Variant Page </h2>
      <ul>
        <li>
          <Link href={"/mini-projects/accordion/single-open"}>
            Single Open Accordion
          </Link>
        </li>
        <li>
          <Link href={"/mini-projects/accordion/single-open"}>
            Multi Open Accordion
          </Link>
        </li>
      </ul>
    </div>
  );
}
