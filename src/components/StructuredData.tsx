import Script from 'next/script';

const StructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CtrlZ",
    "url": "https://ctrlz.app",
    "logo": {
      "@type": "ImageObject",
      "url": "https://ctrlz.app/logo.png",
      "width": 512,
      "height": 512
    },
    "sameAs": [
      "https://twitter.com/ctrlzapp",
      "https://github.com/patdiletx"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "hello@ctrlz.app"
    }
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CtrlZ",
    "description": "Revolutionary productivity tool launching Q2 2025. 100% local processing, privacy-first design.",
    "url": "https://ctrlz.app",
    "applicationCategory": "Productivity Software",
    "operatingSystem": "Cross-platform",
    "price": "199",
    "priceCurrency": "USD",
    "offers": {
      "@type": "Offer",
      "price": "199",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-06-30",
      "availability": "https://schema.org/PreOrder",
      "description": "Early access lifetime license with 50% discount"
    },
    "author": {
      "@type": "Organization",
      "name": "CtrlZ Team"
    },
    "datePublished": "2025-09-02",
    "inLanguage": "en-US",
    "isAccessibleForFree": false,
    "keywords": "productivity, privacy-first, local processing, software"
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "CtrlZ",
    "url": "https://ctrlz.app",
    "description": "Revolutionary productivity tool launching Q2 2025",
    "inLanguage": "en-US",
    "publisher": {
      "@type": "Organization",
      "name": "CtrlZ"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ctrlz.app/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ctrlz.app"
      }
    ]
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="software-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareSchema),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
};

export default StructuredData;