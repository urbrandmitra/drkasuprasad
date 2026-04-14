interface PersonSchemaProps {
  name: string;
  jobTitle: string;
  description: string;
  url: string;
  image?: string;
  dateOfBirth?: string;
  nationality?: string;
  birthPlace?: string;
  awards?: string[];
  worksFor?: string;
  memberOf?: string[];
  sameAs?: string[];
}

export default function PersonSchema({
  name,
  jobTitle,
  description,
  url,
  image,
  dateOfBirth,
  nationality,
  birthPlace,
  awards = [],
  worksFor,
  memberOf = [],
  sameAs = [],
}: PersonSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "additionalType": "https://schema.org/MedicalDoctor",
    "@id": `${url}#person`,
    name,
    jobTitle,
    description,
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    ...(image && { image }),
    ...(dateOfBirth && { birthDate: dateOfBirth }),
    ...(nationality && { nationality }),
    ...(birthPlace && {
      birthPlace: { "@type": "Place", name: birthPlace },
    }),
    ...(worksFor && {
      worksFor: { "@type": "MedicalOrganization", name: worksFor },
    }),
    ...(awards.length > 0 && { award: awards }),
    ...(memberOf.length > 0 && {
      memberOf: memberOf.map((m) => ({
        "@type": "Organization",
        name: m,
      })),
    }),
    ...(sameAs.length > 0 && { sameAs }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}
