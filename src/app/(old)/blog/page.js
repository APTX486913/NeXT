import { getPosts } from "@/lib/posts";

export default async function Page() {
  const posts = await getPosts();
  return (
    <ul>
      {posts.map((item) => (
        <li key={item.id}>
          <div>{item.synopsis}</div>
          <div>{item.yearsAired}</div>
          <div>{item.id}</div>
        </li>
      ))}
    </ul>
  );
}
export const metadata = { title: "blog" };
