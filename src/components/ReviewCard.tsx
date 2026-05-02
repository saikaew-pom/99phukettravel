import React from 'react';

interface ReviewProps {
  itemName: string;
  rating: number; // 1-5
  reviewBody: string;
  author: string;
  datePublished: string;
  priceRange?: string;
  location?: string;
}

const ReviewCard: React.FC<ReviewProps> = ({ 
  itemName, rating, reviewBody, author, datePublished, priceRange, location 
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Restaurant",
      "name": itemName,
      "priceRange": priceRange,
      "address": location
    },
    "author": {
      "@type": "Person",
      "name": author
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": rating,
      "bestRating": "5"
    },
    "reviewBody": reviewBody,
    "datePublished": datePublished
  };

  return (
    <div className="border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow bg-white">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900">{itemName}</h3>
          {location && <p className="text-sm text-gray-500 italic">{location}</p>}
        </div>
        <div className="flex gap-1 text-xl">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-200"}>
              ★
            </span>
          ))}
        </div>
      </div>
      <p className="text-gray-700 leading-relaxed mb-6 italic">"{reviewBody}"</p>
      <div className="flex items-center justify-between border-t border-gray-50 pt-4">
        <span className="text-sm font-medium text-gray-900">{author}</span>
        <time className="text-sm text-gray-400">{datePublished}</time>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </div>
  );
};

export default ReviewCard;
