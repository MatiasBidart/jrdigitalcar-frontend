// src/app/blog/page.tsx
import { BlogList } from "@/components/BlogList";
import { BlogService } from "@/services/blogService";

export default async function BlogPage() {
  // ✅ Cargar posts desde el backend (asíncrono)
  const posts = await BlogService.getAllPosts();

  return (
    <div>
      <BlogList initialPosts={posts} />
    </div>
  );
}
