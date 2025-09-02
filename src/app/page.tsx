import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import PrivacyFirst from '@/components/PrivacyFirst';
import EarlyAccessOffer from '@/components/EarlyAccessOffer';

export default function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <PrivacyFirst />
      <EarlyAccessOffer />
    </main>
  );
}