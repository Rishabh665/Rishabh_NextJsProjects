import Link from "next/link";

export default function Home(){
  return (
    <div>
      <h1>Mini Projects Junction</h1>
      <ol>
        <li>
          <Link href={"/mini-projects/counter"}>
            Counter Project
          </Link>
        </li>
        <li>
          <Link href={"/mini-projects/background-color-changer"}>
          Background Color Changing button
          </Link>
        </li>
        <li>
          <Link href={"/mini-projects/accordion"}>My Accordion Project</Link>
        </li>
      </ol>
    </div>
  );
}