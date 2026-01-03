export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  imageUrl: string;
  category: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface BlogFormData {
  title: string;
  excerpt: string;
  content: string;
  author: string;
  imageUrl: string;
  categoryId: string;
  tags: string;
}
