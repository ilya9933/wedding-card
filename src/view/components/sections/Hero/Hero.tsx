import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';

export default function Hero() {
    return (
        <section className="relative h-screen snap-start overflow-hidden">

            <HeroBackground />

            <HeroContent />

        </section>
    );
}