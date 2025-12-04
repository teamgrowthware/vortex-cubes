import InfoCarousel from "./InfoCarousel";
import ContactForm from "./ContactForm";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="mb-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-muted-foreground text-base lg:text-lg">
            We&apos;re here to help you with any questions about our platform.
            Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-8">
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

            <div className="bg-card border border-card-border rounded-lg p-4 h-[250px] flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Interactive Map
                </h3>
              </div>
              <div className="flex-1 rounded-lg overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304903!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1701234567890!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps location"
                  data-testid="map-iframe"
                />
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col h-full">
            <ContactForm
              subjects={[
                "General Inquiry",
                "Technical Support",
                "Sales",
                "Partnership",
                "Feedback",
              ]}
            />
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}
