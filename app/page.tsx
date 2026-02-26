import Hero from '@/components/Hero';
import RoleSelector from '@/components/RoleSelector';
import HowItWorks from '@/components/HowItWorks';
import Companies from '@/components/Companies';
import CTABanner from '@/components/CTABanner';
import FAQ from '@/components/FAQ';

export default function Home() {
  return (
    <div>
      <Hero />
      <RoleSelector />
      <HowItWorks />
      <Companies />
      <CTABanner
        title="Interested in working with RapidVets?"
        description="We deliver faster, smarter veterinary inspection services—on demand, wherever you need us."
        buttonLabel="Get Started"
        buttonHref="/get-started"
        secondaryLabel="Learn More"
        secondaryHref="/about"
      />
      <FAQ />
    </div>
  );
}
