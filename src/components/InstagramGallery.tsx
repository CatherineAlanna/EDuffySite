const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80",
    alt: "Sunlit window and plant"
  },
  {
    src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80",
    alt: "Notebook and handwriting"
  },
  {
    src: "https://images.unsplash.com/photo-1520409364224-1be3e019df2b?auto=format&fit=crop&w=900&q=80",
    alt: "Typing on a yellow typewriter"
  },
  {
    src: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=900&q=80",
    alt: "Child drawing on paper"
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    alt: "Sandy shoreline with a sun drawing"
  }
];

export default function InstagramGallery() {
  return (
    <section className="instagram-section" aria-labelledby="instagram-heading">
      <div className="container instagram-copy">
        <h2 id="instagram-heading">Follow me on Instagram</h2>
      </div>
      <div className="container instagram-grid">
        {galleryImages.map((image) => (
          <div key={image.alt} className="instagram-card">
            <img src={image.src} alt={image.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}
