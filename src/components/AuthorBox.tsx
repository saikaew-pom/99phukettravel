import React from 'react';

interface AuthorProps {
  name: string;
  bio: string;
  avatarUrl: string;
  knowsAbout: string[];
  socialLinks: { platform: string; url: string }[];
}

const AuthorBox: React.FC<AuthorProps> = ({ name, bio, avatarUrl, knowsAbout, socialLinks }) => {
  const sameAs = socialLinks.map(link => link.url);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": name,
    "description": bio,
    "image": avatarUrl,
    "knowsAbout": knowsAbout,
    "sameAs": sameAs
  };

  return (
    <div className="bg-gray-50 rounded-2xl p-8 flex flex-col md:flex-row gap-6 items-center md:items-start my-12">
      <img 
        src={avatarUrl} 
        alt={name} 
        className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-sm"
      />
      <div className="flex-1 text-center md:text-left">
        <h4 className="text-xl font-bold text-gray-900">{name}</h4>
        <p className="text-gray-600 mt-2 leading-relaxed">{bio}</p>
        <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-4">
          {socialLinks.map((link) => (
            <a 
              key={link.platform} 
              href={link.url} 
              className="text-sm font-semibold text-gray-400 hover:text-black transition-colors"
            >
              {link.platform}
            </a>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </div>
  );
};

export default AuthorBox;
