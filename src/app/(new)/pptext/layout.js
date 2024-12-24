export default function TextLayout({ children, other1, other2 }) {
  return (
    <div style={{ backgroundColor: "purple", padding: "10px" }}>
      {other1}
      {other2}
      {children}
    </div>
  );
}
