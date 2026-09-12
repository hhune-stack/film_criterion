import { ImageResponse } from "next/og";

export const alt = "CONTRECHAMP — 映画を読むための批評";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#f7f5f0",
          color: "#292929",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
        }}
      >
        <div
          style={{
            fontSize: 76,
            fontFamily: "serif",
            letterSpacing: "0.04em",
          }}
        >
          CONTRECHAMP
        </div>

        <div
          style={{
            marginTop: 24,
            fontSize: 24,
            letterSpacing: "0.16em",
            color: "#77736d",
          }}
        >
          映画を読むための批評
        </div>

        <div
          style={{
            marginTop: 180,
            borderTop: "1px solid #d4d1cb",
            paddingTop: 20,
            fontSize: 17,
            letterSpacing: "0.12em",
            color: "#99958e",
          }}
        >
          映画から世界へ向けて思考を開く
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}