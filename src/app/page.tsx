import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import PrivacyFirst from '@/components/PrivacyFirst';
import EarlyAccessOffer from '@/components/EarlyAccessOffer';
import FAQ from '@/components/FAQ';

export default function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <PrivacyFirst />
      <EarlyAccessOffer />
      <FAQ />
    </main>
  );
}