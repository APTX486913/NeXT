import Cmp from "@/app/components/Cmp";

export default function Template({ children }) {
  return (
    <>
      <Cmp />
      <div style={{ backgroundColor: "blue", padding: "10px" }}>{children}</div>
    </>
  );
}
