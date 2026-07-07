import FadeIn from "../layout/FadeIn.tsx";
import PageSection from "../layout/PageSection.tsx";
import SectionTitle from "../ui/SectionTitle.tsx";

export default function Location() {
    return (
        <PageSection background="bg-sand">
            <div className="text-center w-full">

                {/* заголовок */}
                <FadeIn>
                    <SectionTitle>Место проведения</SectionTitle>
                </FadeIn>

                {/* адрес */}
                <FadeIn delay={0.3}>
                    <p className="mt-6 text-lg text-muted max-w-2xl mx-auto leading-relaxed">
                        Загородный котедж "Lucky House" <br />
                        Ростовская область <br />
                        с. Лакедемоновка, ул. Заречная 62
                    </p>
                </FadeIn>

                {/* разделитель */}
                <div className="my-14 text-rose text-2xl">
                    ❀ ─── ❀ ─── ❀
                </div>


                {/* кнопка карты */}
                <FadeIn delay={0.3}>
                    <a
                        href="https://yandex.ru/maps/?text=С. Лакедемоновка, ул. Заречная 62"
                        target="_blank"
                        className="
              inline-block
              mt-8
              px-8 py-3
              bg-rose text-white
              rounded-full
              shadow-lg
              hover:scale-105
              transition
            "
                    >
                        Открыть на карте
                    </a>
                </FadeIn>

                {/* мини-карта */}
                <FadeIn delay={0.4}>
                    <div className="mt-12 mx-auto max-w-4xl rounded-2xl overflow-hidden shadow-xl">
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?text=С. Лакедемоновка ул. Заречная 62"
                            width="100%"
                            height="320"
                            frameBorder="0"
                        />
                    </div>
                </FadeIn>

            </div>
        </PageSection>
    );
}
