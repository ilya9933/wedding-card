import { motion } from 'framer-motion';

export default function HeroContent() {
    return (
        <div className="relative z-10 flex h-full items-end justify-center px-6 text-center">
            <div className="mb-24">

                {/* Илья */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="font-serif text-6xl md:text-8xl text-white"
                >
                    Илья
                </motion.h1>

                {/* сердце */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="my-4 text-3xl text-white/80"
                >
                    ♡
                </motion.div>

                {/* Алина */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="font-serif text-6xl md:text-8xl text-white"
                >
                    Алина
                </motion.h1>

                {/* дата */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="mt-10 text-white/90 tracking-[0.35em] uppercase text-sm md:text-base"
                >
                    3 сентября 2026
                </motion.p>

                {/* текст */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6 }}
                    className="mt-6 text-white/80 max-w-xl mx-auto"
                >
                    Мы рады пригласить вас разделить с нами самый счастливый день нашей жизни
                </motion.p>

                {/* стрелка вниз */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 2,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        duration: 1.2,
                    }}
                    className="mt-12 text-white text-3xl"
                >
                    ↓
                </motion.div>

            </div>
        </div>
    );
}