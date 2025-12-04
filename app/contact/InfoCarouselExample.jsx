import InfoCarousel from "../InfoCarousel";

export default function InfoCarouselExample() {
  return (
    <div className="max-w-md mx-auto p-4">
      <InfoCarousel
        businessHours={{
          days: "Mon-Fri",
          hours: "9AM - 6PM",
          note: "Emergency support available 24/7",
        }}
        address={{
          street: "123 Business Avenue",
          city: "New York, NY 10001",
          country: "United States",
        }}
        socialLinks={{
          facebook: "https://facebook.com",
          twitter: "https://twitter.com",
          linkedin: "https://linkedin.com",
          instagram: "https://instagram.com",
        }}
      />
    </div>
  );
}
