"use client";

import { BlogList } from '@/components/BlogList';
import { BlogPost } from '@/types/blog';
import { BlogService } from '@/services/blogService';

export default function BlogPage() {
  const posts: BlogPost[] = BlogService.getAllPosts();

  return (
    <div>
      <BlogList posts={posts} />
    </div>
  );
}
