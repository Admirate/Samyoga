import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Samyoga Studio",
    short_name: "Samyoga",
    description:
      "Yoga & Pilates classes in Hyderabad with Srimalini. Not a workout — a mindful practice.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f3ed",
    theme_color: "#47342c",
    icons: [
      {
        src: "/images/logo-mark.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/logo-mark.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
