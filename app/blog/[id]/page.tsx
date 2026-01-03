// src/app/blog/[id]/page.tsx
import { BlogService } from "@/services/blogService";
import { BlogPost as BlogPostComponent } from "@/components/BlogPost";

export default async function BlogPostPage(props: { params: Promise<{ id: string }> }) {
  // ✅ Esperar la promesa de params
  const { id } = await props.params;

  const post = await BlogService.getPostById(id);

  if (!post) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-gray-600">
        Artículo no encontrado
      </div>
    );
  }

  return <BlogPostComponent post={post} />;
}
