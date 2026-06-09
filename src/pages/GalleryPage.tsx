import { INSTITUTE } from '@/data/content';

const GALLERY_IMAGES = [
  {
    src: '/assets/gallery-logo.jpg',
    alt: 'Bhavya Fashion Boutique and Training Center logo with garments',
    caption: 'Bhavya Fashion Boutique and Training Center — बुटवल 9 कालिकानगर',
  },
  {
    src: '/assets/curriculum.jpg',
    alt: 'Curriculum flyer — पाठ्यक्रम (CURRICULUM)',
    caption: 'पाठ्यक्रम (CURRICULUM)',
  },
  {
    src: '/assets/draft-layout.jpg',
    alt: 'Draft and Layout + Cutting and Stitching syllabus',
    caption: 'DRAFT AND LAYOUT + CUTTING AND STITCHING',
  },
  {
    src: '/assets/sketching.jpg',
    alt: 'Sketching course syllabus',
    caption: 'SKETCHING',
  },
  {
    src: '/assets/diploma-flyer.jpg',
    alt: 'Fashion Design Diploma Course flyer',
    caption: 'FASHION DESIGN DIPLOMA COURSE',
  },
];

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="mb-2 text-center text-3xl font-black uppercase text-black sm:text-4xl">
        Gallery
      </h1>
      <p className="mb-10 text-center text-gray-600">
        {INSTITUTE.boutiqueName} — {INSTITUTE.address}
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {GALLERY_IMAGES.map(({ src, alt, caption }) => (
          <figure
            key={src}
            className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
          >
            <div className="aspect-[4/3] overflow-hidden bg-gray-100">
              <img
                src={src}
                alt={alt}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <figcaption className="p-4 text-center text-sm font-medium text-gray-800">
              {caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
