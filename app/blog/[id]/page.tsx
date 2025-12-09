"use client";

import { use, useEffect, useState } from "react";
import { BlogService } from "@/services/blogService";
import { BlogPost as BlogPostComponent } from "@/components/BlogPost";
import { BlogPost } from "@/types/blog";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function BlogPostPage({ params }: PageProps) {
  // ✅ Ahora sí: resolvemos params usando `use()`
  const { id: slug } = use(params);

  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const foundPost = BlogService.getPostBySlug(slug);
    setPost(foundPost ?? null);
  }, [slug]);

  if (!post) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-lg text-gray-600">
        Cargando artículo…
      </div>
    );
  }

  return <BlogPostComponent post={post} />;
}
