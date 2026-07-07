import { motion } from 'framer-motion';
import type {PropsWithChildren} from "react";

interface FadeInProps extends PropsWithChildren {
    delay?: number;
}

export default function FadeIn({
                                   children,
                                   delay = 0,
                               }: FadeInProps) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 40,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.35,
            }}
            transition={{
                duration: 0.8,
                delay,
            }}
        >
            {children}
        </motion.div>
    );
}