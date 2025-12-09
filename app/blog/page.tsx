// "use client";

// import { BlogList } from '@/components/BlogList';
// import { BlogPost } from '@/types/blog';
// import { BlogService } from '@/services/blogService';

// export default function BlogPage() {
//   const posts: BlogPost[] = BlogService.getAllPosts();

//   return (
//     <div>
//       <BlogList posts={posts} />
//     </div>
//   );
// }
// ❌ remove "use client" — no hooks aquí

import { BlogList } from "@/components/BlogList";
import { BlogService } from "@/services/blogService";

export default function BlogPage() {
  const posts = BlogService.getAllPosts();

  return (
    <div>
      <BlogList initialPosts={posts} />
    </div>
  );
}

