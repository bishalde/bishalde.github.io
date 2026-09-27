import { ImageResponse } from "next/og";
import { Monogram } from "./_og/monogram";

// iOS applies its own rounded mask, so the touch icon stays square.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(<Monogram size={180} rounded={false} />, size);
}
