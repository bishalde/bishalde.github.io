import { ImageResponse } from "next/og";
import { Monogram } from "./_og/monogram";

// 96px: Google recommends favicons in multiples of 48px.
export const size = { width: 96, height: 96 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(<Monogram size={96} />, size);
}
