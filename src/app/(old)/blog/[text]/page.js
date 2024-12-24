import { getPosts } from "@/lib/posts";
import Cmp from "@/app/components/Cmp";
export default async function Page({ params }) {
  const { text } = await params;
  return (
    <>
      {text}:
      <Cmp />
    </>
  );
}
export async function generateMetadata({ params, searchParams }, parent) {
  const { text } = await params;
  return {
    title: text,
  };
}
