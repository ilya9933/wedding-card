import FadeIn from '../layout/FadeIn';
import PageSection from '../layout/PageSection';
import SectionTitle from '../ui/SectionTitle';

export default function Wishes() {
    return (
        <PageSection background="bg-cream">
            <div className="mx-auto max-w-3xl text-center">

                <FadeIn>
                    <SectionTitle>Пожелания гостям</SectionTitle>

                    <div className="mt-4 text-3xl text-rose">
                        ♡
                    </div>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <p className="mt-10 text-lg leading-9 text-muted">
                        Дорогие наши!
                        <br />
                        <br />

                        Для нас самым главным подарком станет ваше присутствие
                        в этот особенный день.
                        Мы мечтаем разделить с вами самые счастливые моменты
                        нашей жизни и будем благодарны каждому,
                        кто сможет быть рядом.
                        <br />
                        <br />
                        Нам хочется, чтобы этот день был не столько о роскоши, сколько о любви, близких людях и теплой семейной атмосфере. Именно это для нас по-настоящему важно.
                    </p>
                </FadeIn>

                <FadeIn delay={0.4}>
                    <div className="my-12 text-4xl">
                        🌸
                    </div>

                    <p className="text-lg leading-9 text-muted">
                        Будем очень признательны, если Вы воздержитесь от криков «Горько». Ведь поцелуй — это знак выражения чувств, и он не может быть по заказу.

                        Чтобы наши руки были свободны для объятий, будем рады легким подаркам в конвертах.
                    </p>
                </FadeIn>

                <FadeIn delay={0.6}>
                    <p className="text-lg leading-9 text-muted">
                        Чтобы наши руки были свободны для объятий, будем рады легким подаркам в конвертах.
                    </p>
                </FadeIn>

                <FadeIn delay={0.8}>
                    <div className="my-12 text-4xl">
                        🌿
                    </div>

                    <p className="text-lg leading-9 text-muted">
                        Мы очень любим цветы,
                        но после праздника не сможем долго ими любоваться.

                        <br />
                        <br />

                        Поэтому вместо букета можно подарить бутылочку вашего любимого напитка,
                        настольную игру, книгу или другой памятный подарок с приятной подписью,
                        который будет радовать нас намного дольше.
                    </p>
                </FadeIn>

                <FadeIn delay={0.9}>
                    <div className="mt-16 font-serif text-3xl text-text">
                        С любовью,
                    </div>

                    <div className="mt-3 text-xl text-rose">
                        Илья & Алина
                    </div>
                </FadeIn>

            </div>
        </PageSection>
    );
}