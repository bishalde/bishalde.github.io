// "BD." monogram shared by the favicon and the Apple touch icon.
export function Monogram({ size, rounded = true }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0c0c0c",
        borderRadius: rounded ? size * 0.22 : 0,
        color: "#f5f5f5",
        fontSize: size * 0.46,
        fontWeight: 700,
        letterSpacing: -size * 0.03,
      }}
    >
      BD<span style={{ color: "#fb923c" }}>.</span>
    </div>
  );
}
