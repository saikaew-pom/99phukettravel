import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BlogPost {
  id: string;
  slug: string;
  data: {
    title: string;
    description: string;
    pubDate: Date;
    heroImage?: string;
    author: string;
    tags?: string[];
  };
}

interface Props {
  posts: BlogPost[];
}

const base = import.meta.env.BASE_URL;

const BlogArchive: React.FC<Props> = ({ posts }) => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    posts.forEach(post => {
      post.data.tags?.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [posts]);

  const filteredPosts = useMemo(() => {
    if (!selectedTag) return posts;
    return posts.filter(post => post.data.tags?.includes(selectedTag));
  }, [posts, selectedTag]);

  return (
    <div className="flex flex-col lg:flex-row gap-12">
      {/* Sidebar - Filters */}
      <aside className="w-full lg:w-48 flex-shrink-0">
        <div className="sticky top-24 space-y-6">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Categories</h3>
            <div className="flex flex-wrap lg:flex-col gap-2">
              <button
                onClick={() => setSelectedTag(null)}
                className={`px-3 py-1.5 text-xs font-bold rounded-full transition-all text-left uppercase tracking-wider ${
                  selectedTag === null
                    ? 'bg-black text-white shadow-lg shadow-black/10'
                    : 'text-gray-500 hover:text-black hover:bg-gray-100'
                }`}
              >
                All Posts
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-full transition-all text-left uppercase tracking-wider ${
                    selectedTag === tag
                      ? 'bg-black text-white shadow-lg shadow-black/10'
                      : 'text-gray-500 hover:text-black hover:bg-gray-100'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content - Grid */}
      <main className="flex-1">
        <div className="grid grid-cols-1 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group"
              >
                <a href={`${base}blog/${post.slug}`} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                  <div className="md:col-span-1 overflow-hidden rounded-2xl bg-gray-100 aspect-video md:aspect-[4/3]">
                    {post.data.heroImage && (
                      <img
                        src={post.data.heroImage}
                        alt={post.data.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    )}
                  </div>
                  <div className="md:col-span-2 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                        {new Date(post.data.pubDate).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                      {post.data.tags?.[0] && (
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] bg-gray-100 px-2 py-0.5 rounded">
                          {post.data.tags[0]}
                        </span>
                      )}
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight group-hover:text-gray-600 transition-colors">
                      {post.data.title}
                    </h2>
                    <p className="text-gray-500 line-clamp-2 italic leading-relaxed">
                      {post.data.description}
                    </p>
                    <div className="pt-2 text-sm font-bold underline underline-offset-4 decoration-2">
                      Read Article
                    </div>
                  </div>
                </a>
              </motion.article>
            ))}
          </AnimatePresence>
          {filteredPosts.length === 0 && (
            <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
              <p className="text-gray-500 font-medium">No articles found in this category.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default BlogArchive;
