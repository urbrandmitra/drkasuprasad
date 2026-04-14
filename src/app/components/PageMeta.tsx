// PageMeta — generates typed metadata objects for each page.
// Usage: export const metadata = generateMetadata({ ... })
// Import this function in each page file and export the result as metadata.
// Compatible with Next.js App Router metadata API.

interface PageMetaProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage?: string;
  ogType?: string;
}

export function generateMetadata({
  title,
  description,
  canonicalUrl,
  ogImage,
  ogType = "website",
}: PageMetaProps) {
  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: ogType,
      ...(ogImage && { images: [{ url: ogImage }] }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(ogImage && { images: [ogImage] }),
    },
  };
}
