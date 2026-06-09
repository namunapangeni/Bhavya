const GALLERY_IMAGE = {
  src: '/assets/gallery-logo.jpg',
  alt: 'Bhavya Fashion Boutique and Training Center logo with garments',
};

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="mb-10 text-center text-3xl font-black uppercase text-brand-secondary sm:text-4xl">
        Gallery
      </h1>

      <figure className="mx-auto max-w-2xl overflow-hidden rounded-lg border border-brand-accent/20 bg-white shadow-sm">
        <img
          src={GALLERY_IMAGE.src}
          alt={GALLERY_IMAGE.alt}
          className="w-full object-cover"
          loading="lazy"
        />
      </figure>
    </div>
  );
}
