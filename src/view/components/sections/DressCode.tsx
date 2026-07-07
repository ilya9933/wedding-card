import FadeIn from '../layout/FadeIn';
import PageSection from '../layout/PageSection';
import SectionTitle from '../ui/SectionTitle';

const colors = [
    {
        name: 'Молочный',
        color: '#F7F3EC',
    },
    {
        name: 'Шампань',
        color: '#E9D8C5',
    },
    {
        name: 'Бежевый',
        color: '#D8C1A8',
    },
    {
        name: 'Кофейный',
        color: '#B8926A',
    },
    {
        name: 'Шалфей',
        color: '#A8B29A',
    },
    {
        name: 'Пудровый',
        color: '#DDB9B3',
    },
];

export default function DressCode() {
    return (
        <PageSection background="bg-cream">
            <div className="mx-auto max-w-5xl text-center">

                <FadeIn>
                    <SectionTitle>Дресс-код</SectionTitle>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
                        Мы очень ждём и готовимся к нашему незабываемому дню! Поддержите нас вашими улыбками и объятиями, а также будем рады, если вы поддержите цветовую палитру нашей свадьбы.
                    </p>
                </FadeIn>

                <FadeIn delay={0.4}>
                    <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">

                        {colors.map(({ color, name }) => (
                            <div
                                key={name}
                                className="flex flex-col items-center"
                            >
                                <div
                                    className="
                    h-20
                    w-20
                    rounded-full
                    border-4
                    border-white
                    shadow-lg
                    transition
                    duration-300
                    hover:scale-110
                  "
                                    style={{
                                        backgroundColor: color,
                                    }}
                                />

                                <span className="mt-4 text-sm text-text">
                  {name}
                </span>
                            </div>
                        ))}

                    </div>
                </FadeIn>

                <FadeIn delay={0.6}>
                    <div className="mt-16">

                        <div className="mb-4 text-2xl text-rose">
                            ❀
                        </div>

                        <p className="mx-auto max-w-xl text-muted leading-8">
                            Просим по возможности отказаться
                            от ярких неоновых оттенков,
                            а также полностью белых образов,
                            чтобы этот цвет остался за невестой 🤍
                        </p>

                    </div>
                </FadeIn>

            </div>
        </PageSection>
    );
}