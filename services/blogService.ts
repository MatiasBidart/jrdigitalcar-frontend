// BlogService adaptado a Next.js sin dependencias de ventana hasta que sea necesario
// y compatible con ambientes SSR / RSC

import { BlogPost, BlogFormData } from "@/types/blog";

const STORAGE_KEY = 'mechanical_company_blog_posts';

export class BlogService {

  // ✔ Ahora este método funciona sin romper en SSR (typeof window check)
  static getAllPosts(): BlogPost[] {
    // Evita acceso a window en SSR → Next.js server environment
    if (typeof window === 'undefined') return [];

    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : this.getInitialPosts();
  }

  static getPostBySlug(slug: string): BlogPost | undefined {
    const posts = this.getAllPosts();
    return posts.find(post => post.slug === slug);
  }

  static createPost(formData: BlogFormData): BlogPost {
    const posts = this.getAllPosts();

    const newPost: BlogPost = {
      id: Date.now().toString(),
      ...formData,
      slug: this.generateSlug(formData.title),
      date: new Date().toISOString(),
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(Boolean),
    };

    const updatedPosts = [newPost, ...posts];
    this.savePosts(updatedPosts);
    return newPost;
  }

  static updatePost(id: string, formData: BlogFormData): BlogPost | null {
    const posts = this.getAllPosts();
    const index = posts.findIndex(post => post.id === id);
    if (index === -1) return null;

    const updatedPost: BlogPost = {
      ...posts[index],
      ...formData,
      slug: this.generateSlug(formData.title),
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(Boolean),
    };

    posts[index] = updatedPost;
    this.savePosts(posts);
    return updatedPost;
  }

  static deletePost(id: string): boolean {
    const posts = this.getAllPosts();
    const filtered = posts.filter(post => post.id !== id);
    if (filtered.length === posts.length) return false;

    this.savePosts(filtered);
    return true;
  }

  // ✔ Ahora también evitamos error SSR
  private static savePosts(posts: BlogPost[]): void {
    if (typeof window === 'undefined') return; // ← evita crash en renderizado servidor
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  }

  private static generateSlug(title: string): string {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  // ✔ Esta función ahora NO ejecuta savePosts en ambientes SSR
  private static getInitialPosts(): BlogPost[] {
    const initialPosts: BlogPost[] = [
      {
        id: '1',
        title: 'Importancia del Mantenimiento Preventivo de Motores',
        slug: 'importancia-mantenimiento-preventivo-motores',
                excerpt: 'Descubre por qué el mantenimiento preventivo es esencial para prolongar la vida útil de tu motor y evitar costosas reparaciones.',
        content: `El mantenimiento preventivo de motores es fundamental para garantizar el rendimiento óptimo de tu vehículo. En este artículo, exploraremos las principales razones por las que debes considerar un programa de mantenimiento regular.

![Motor limpio y mantenido](https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800)

## Beneficios Clave

1. **Prolongación de la vida útil**: Un motor bien mantenido puede durar significativamente más tiempo.
2. **Ahorro económico**: Prevenir problemas mayores es mucho más económico que repararlos.
3. **Mejor rendimiento**: Un motor limpio y ajustado funciona de manera más eficiente.
4. **Seguridad**: Reduce el riesgo de fallos inesperados en la carretera.

![Cambio de aceite profesional](https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800)

## Servicios Recomendados

- Cambio de aceite y filtros regularmente
- Inspección de la correa de distribución
- Revisión del sistema de refrigeración
- Análisis de compresión

Contáctanos para programar tu próximo servicio de mantenimiento preventivo.`,
        author: 'Equipo Técnico',
        date: '2025-11-25T10:00:00Z',
        imageUrl: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800',
        category: 'Mantenimiento',
        tags: ['mantenimiento', 'motores', 'preventivo'],
      },
      {
        id: '2',
        title: 'Rectificación de Motores: ¿Cuándo es Necesaria?',
        slug: 'rectificacion-motores-cuando-necesaria',
excerpt: 'Aprende a identificar las señales que indican que tu motor necesita una rectificación profesional.',
        content: `La rectificación de motores es un proceso técnico especializado que devuelve a tu motor las especificaciones de fábrica. Aquí te explicamos cuándo es necesario considerar este servicio.

## Señales de Advertencia

- Consumo excesivo de aceite
- Pérdida de compresión
- Humo azul del escape
- Ruidos anormales del motor
- Pérdida de potencia notable

## El Proceso de Rectificación

La rectificación incluye:

1. Desmontaje completo del motor
2. Limpieza profunda de componentes
3. Rectificado de cilindros
4. Reemplazo de pistones y anillos
5. Rectificado de cigüeñal
6. Ensamblaje con especificaciones de fábrica

## Por Qué Elegirnos

Nuestro equipo cuenta con más de 20 años de experiencia en rectificación de motores de todas las marcas. Utilizamos tecnología de punta y garantizamos la calidad de nuestro trabajo.`,
        author: 'Ing. Carlos Méndez',
        date: '2025-11-20T14:30:00Z',
        imageUrl: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800',
        category: 'Rectificación',
        tags: ['rectificación', 'motores', 'reparación'],
      },
      {
        id: '3',
        title: 'Tecnología Moderna en Mecánica Automotriz',
        slug: 'tecnologia-moderna-mecanica-automotriz',
        excerpt: 'Conoce las últimas tecnologías que utilizamos para diagnosticar y reparar tu vehículo con precisión.',
        content: `La mecánica automotriz ha evolucionado significativamente en los últimos años. En nuestro taller, incorporamos las tecnologías más avanzadas para ofrecer servicios de la más alta calidad.

## Equipamiento de Vanguardia

### Escáneres de Diagnóstico
Utilizamos escáneres OBD-II de última generación que nos permiten leer códigos de error, parámetros en tiempo real y realizar pruebas activas en los sistemas del vehículo.

### Banco de Pruebas
Nuestro banco de pruebas nos permite evaluar el rendimiento del motor antes y después de las reparaciones, garantizando resultados óptimos.

### Rectificadoras de Precisión
Equipos CNC de alta precisión para el rectificado de cilindros, cigüeñales y culatas.

## Capacitación Continua

Nuestro equipo técnico se mantiene actualizado con las últimas tendencias y tecnologías mediante:

- Certificaciones de fabricantes
- Cursos especializados
- Actualizaciones técnicas constantes

## Compromiso con la Calidad

Combinamos la experiencia tradicional con la tecnología moderna para ofrecer servicios que superan las expectativas de nuestros clientes.`,
        author: 'Equipo Técnico',
        date: '2025-11-15T09:00:00Z',
        imageUrl: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800',
        category: 'Tecnología',
        tags: ['tecnología', 'diagnóstico', 'equipamiento'],
      },
    ];

    // Evita error en SSR / RSC → solo localStorage cuando hay window
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(initialPosts));
    }

    return initialPosts;
  }
}
