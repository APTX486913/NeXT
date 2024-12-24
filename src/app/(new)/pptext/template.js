export default function Template({ children, other1, other2 }) {
  return (
    <>
      <div style={{ backgroundColor: "blue", padding: "10px" }}>{children}</div>
      {/* <div style={{ backgroundColor: "red", padding: "10px" }}>{other1}</div>
      <div style={{ backgroundColor: "yellow", padding: "10px" }}>{other2}</div> */}
    </>
  );
}
