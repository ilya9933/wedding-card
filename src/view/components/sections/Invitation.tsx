import { motion } from 'framer-motion';
import PageSection from "../layout/PageSection.tsx";
import FadeIn from "../layout/FadeIn.tsx";
import SectionTitle from "../ui/SectionTitle.tsx";


export default function Invitation() {
    return (
        <PageSection background="bg-ivory">
            <div className="text-center">

                {/* декоративный элемент */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-rose text-2xl mb-6"
                >
                    ❀ ❀ ❀
                </motion.div>

                {/* заголовок */}
                <FadeIn>
                    <SectionTitle>Приглашение</SectionTitle>
                </FadeIn>

                {/* текст */}
                <FadeIn delay={0.2}>
                    <p className="max-w-2xl mx-auto text-muted text-lg leading-relaxed mt-8">
                        Дорогие друзья и близкие!
                        С огромной радостью приглашаем вас разделить с нами день,
                        который станет началом нашей семейной истории.
                        <br /><br />
                        Мы будем счастливы видеть вас рядом в этот особенный момент,
                        наполненный любовью, теплом и радостью, на нашем скромном мероприятии.
                    </p>
                </FadeIn>

            </div>
        </PageSection>
    );
}