import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import PrivacyFirst from '@/components/PrivacyFirst';
import SocialProof from '@/components/SocialProof';
import EarlyAccessOffer from '@/components/EarlyAccessOffer';
import FAQ from '@/components/FAQ';
import AnimatedSection from '@/components/AnimatedSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <AnimatedSection delay={0.2}>
        <HowItWorks />
      </AnimatedSection>
      <AnimatedSection delay={0.3}>
        <PrivacyFirst />
      </AnimatedSection>
      <AnimatedSection delay={0.4}>
        <SocialProof />
      </AnimatedSection>
      <AnimatedSection delay={0.5}>
        <EarlyAccessOffer />
      </AnimatedSection>
      <AnimatedSection delay={0.6}>
        <FAQ />
      </AnimatedSection>
    </main>
  );
}