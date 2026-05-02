import React from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage?: string;
  publishedDate?: string;
  updatedDate?: string;
  authorName?: string;
  type?: 'article' | 'website';
}

const SEOhead: React.FC<SEOProps> = ({
  title,
  description,
  canonicalUrl,
  ogImage = '/default-og.jpg',
  publishedDate,
  updatedDate,
  authorName = '99event.co Team',
  type = 'article'
}) => {
  const isArticle = type === 'article';

  const articleSchema = isArticle ? {
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": ogImage,
    "datePublished": publishedDate,
    "dateModified": updatedDate || publishedDate,
    "author": {
      "@type": "Person",
      "name": authorName
    },
    "publisher": {
      "@type": "Organization",
      "name": "99event.co",
      "logo": {
        "@type": "ImageObject",
        "url": "https://99event.co/favicon.svg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    }
  } : null;

  const websiteSchema = {
    "@type": "WebSite",
    "name": "99event.co",
    "url": "https://99event.co",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://99event.co/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbSchema = isArticle ? {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://99event.co"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://99event.co/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": title,
        "item": canonicalUrl
      }
    ]
  } : null;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="99event.co" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
    </>
  );
};

export default SEOhead;
