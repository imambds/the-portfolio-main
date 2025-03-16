import { MetadataRoute } from "next";

export const dynamic = "force-static"; // <== ini wajib!

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  };
}
