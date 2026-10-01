import { ImageResponse } from "next/og";

export const alt = "Attention Matters — Put AI to work on the right problem";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#171624",
        color: "#fef1e9",
        padding: "68px 76px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 30, fontWeight: 700 }}>
        <div
          style={{
            display: "flex",
            fontSize: 31,
            fontWeight: 800,
            letterSpacing: -3,
            color: "#a9e1dc"
          }}
        >
          AM
        </div>
        Attention Matters
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        <div style={{ maxWidth: 920, fontSize: 84, lineHeight: 1.02, letterSpacing: -4, fontWeight: 700 }}>
          Put AI to work on the right problem.
        </div>
        <div style={{ fontSize: 27, color: "#cbc7d3" }}>
          Practical AI, automation, and digital systems for owner-led businesses.
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          right: 76,
          top: 70,
          width: 170,
          height: 14,
          display: "flex",
        }}
      >
        <div style={{ width: 74, height: 14, background: "#008da1" }} />
        <div style={{ width: 96, height: 14, background: "#7157c8" }} />
      </div>
    </div>,
    size,
  );
}
