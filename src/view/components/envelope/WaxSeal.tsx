import { motion } from 'framer-motion';

interface Props {
    onClick: () => void;
}

export default function WaxSeal({ onClick }: Props) {
    return (
        <motion.button
            initial={{
                scale: 1,
            }}
            exit={{
                scale: 0,
                opacity: 0,
                rotate: 180,
            }}
            whileHover={{
                scale: 1.08,
            }}
            whileTap={{
                scale: 0.95,
            }}
            transition={{
                duration: 0.4,
            }}
            onClick={onClick}
            className="
                absolute
                left-1/2
                top-[118px]
                z-30
                flex
                h-16
                w-16
                -translate-x-1/2
                items-center
                justify-center
                rounded-full
                bg-[#C89B88]
                text-white
                font-serif
                shadow-xl
            "
        >
            I&A
        </motion.button>
    );
}