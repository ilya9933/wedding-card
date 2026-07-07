import { motion } from 'framer-motion';

interface Props {
    opened: boolean;
}

export default function EnvelopeLetter({ opened }: Props) {
    return (
        <motion.div
            initial={false}
            animate={{
                y: opened ? -150 : 40,
            }}
            transition={{
                duration: 1.3,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="
                absolute
                left-1/2
                top-16
                z-0
                w-[340px]
                h-[420px]
                -translate-x-1/2
                rounded-xl
                bg-[#FFFBF8]
                shadow-xl
                p-10
            "
        >
            <div className="h-full flex flex-col justify-center text-center">

                <p className="font-serif text-5xl text-text">
                    Илья
                </p>

                <p className="my-6 text-4xl text-rose">
                    ♥
                </p>

                <p className="font-serif text-5xl text-text">
                    Анастасия
                </p>

                <p className="mt-10 text-muted">
                    15 августа 2026
                </p>

            </div>

        </motion.div>
    );
}