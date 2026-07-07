import { motion } from 'framer-motion';

interface Props {
    opened: boolean;
}

export default function EnvelopeFlap({ opened }: Props) {
    return (
        <motion.div
            animate={{
                rotateX: opened ? 180 : 0,
            }}
            transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
            }}
            style={{
                transformOrigin: 'top',
            }}
            className="
                absolute
                top-0
                left-0
                w-full
                h-[150px]
                bg-[#F8EEE7]
                [clip-path:polygon(0_0,100%_0,50%_100%)]
            "
        />
    );
}