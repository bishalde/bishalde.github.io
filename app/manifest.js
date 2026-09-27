export default function manifest() {
  return {
    name: "Bishal De",
    short_name: "Bishal De",
    description: "Portfolio of Bishal De, Software Engineer at Twilio.",
    start_url: "/",
    display: "standalone",
    background_color: "#0c0c0c",
    theme_color: "#0c0c0c",
    icons: [
      { src: "/icon", sizes: "96x96", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
