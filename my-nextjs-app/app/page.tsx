import Link from "next/link";

export default function Home(){
  return (
    <div>
      <h1>Mini Projects Junction</h1>
      <ul>
        <li>
          <Link href={"/mini-projects/counter"}>
            Counter Project
          </Link>
        </li>
        <li>
          <Link href={"/mini-projects/accordion"}>My Accordion Project</Link>
        </li>
      </ul>
    </div>
  );
}