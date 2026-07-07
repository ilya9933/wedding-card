import { useEffect, useState } from 'react';
import FadeIn from "../layout/FadeIn.tsx";
import PageSection from "../layout/PageSection.tsx";
import SectionTitle from "../ui/SectionTitle.tsx";
import WeddingCalendar from "../ui/WeddingCalendar.tsx";

const WEDDING_DATE = new Date('2026-09-03T16:00:00+03:00');

function getTimeLeft() {
    const now = new Date().getTime();
    const diff = WEDDING_DATE.getTime() - now;

    return {
        days: Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24))),
        hours: Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24)),
        minutes: Math.max(0, Math.floor((diff / (1000 * 60)) % 60)),
        seconds: Math.max(0, Math.floor((diff / 1000) % 60)),
    };
}

export default function Countdown() {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <PageSection background="bg-ivory">
            <div className="text-center w-full">

                {/* заголовок */}
                <FadeIn>
                    <SectionTitle>До нашей свадьбы осталось</SectionTitle>
                </FadeIn>

                {/* дата */}
                <FadeIn delay={0.1}>
                    <div className="mt-6 text-muted text-lg">
                        3 сентября 2026 • 15:30 (МСК)
                    </div>
                </FadeIn>

                {/* таймер */}
                <FadeIn delay={0.2}>
                    <div className="mt-10 grid grid-cols-4 gap-2 max-w-3xl mx-auto">

                        <TimeBox label="Дней" value={timeLeft.days} />
                        <TimeBox label="Часов" value={timeLeft.hours} />
                        <TimeBox label="Минут" value={timeLeft.minutes} />
                        <TimeBox label="Секунд" value={timeLeft.seconds} />

                    </div>
                </FadeIn>

                {/* разделитель */}
                <div className="my-14 text-rose text-2xl">
                    ❀ ─── ❀ ─── ❀
                </div>

                {/* адрес */}
                <FadeIn delay={0.3}>
                    <WeddingCalendar />
                </FadeIn>

            </div>
        </PageSection>
    );
}

function TimeBox({
                     label,
                     value,
                 }: {
    label: string;
    value: number;
}) {
    return (
        <div className="bg-blush rounded-2xl py-4 shadow-sm">
            <div className="font-serif text-4xl text-text">
                {value}
            </div>
            <div className="text-muted mt-2">
                {label}
            </div>
        </div>
    );
}