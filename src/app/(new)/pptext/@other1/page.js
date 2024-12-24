import Link from "next/link";

export default async function Page() {
  return (
    <div className="p-3">
      other1
      <Link href="/pptext/otherChild1">otherChild1</Link>
      <Link href="/pptext/otherChild2">otherChild2</Link>
    </div>
  );
}
