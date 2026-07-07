import { motion } from 'framer-motion';
import heroImage from '../../../../assets/heroBackground.jpg';

export default function HeroBackground() {
    return (
        <>
            {/* фон */}
            <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${heroImage})`,
                }}
                initial={{ scale: 1 }}
                animate={{ scale: 1.12 }}
                transition={{ duration: 12, ease: 'easeOut' }}
            />

            {/* затемнение */}
            <div className="absolute inset-0 bg-black/25" />

            {/* кремовый градиент снизу */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cream/80" />
        </>
    );
}