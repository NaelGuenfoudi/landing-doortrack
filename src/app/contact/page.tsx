import ContactForm from "@/components/sections/ContactForm";

export const metadata = {
  title: "Contact — Doortrack",
  description: "Contactez Doortrack pour échanger sur votre contexte terrain, rejoindre la bêta ou cadrer un test pilote.",
};

export default function ContactPage() {
  return (
    <div className="pt-16 md:pt-24 bg-canvas min-h-[80vh] flex flex-col justify-center">
      <ContactForm />
    </div>
  );
}
