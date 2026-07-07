import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Props {
    images: string[];
}

export default function PhotoSlider({ images }: Props) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(id);
    }, [images.length]);

    return (
        <div
            className="
        relative
        mx-auto
        min-h-[50vh]
        w-full
        overflow-hidden
        rounded-t-full
        shadow-2xl
      "
        >
            <AnimatePresence mode="wait">
                <motion.img
                    key={index}
                    src={images[index]}
                    initial={{
                        opacity: 0,
                        scale: 1,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1.12,
                    }}
                    exit={{
                        opacity: 0,
                    }}
                    transition={{
                        opacity: {
                            duration: 1,
                        },
                        scale: {
                            duration: 5,
                            ease: 'linear',
                        },
                    }}
                    className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "
                />
            </AnimatePresence>
        </div>
    );
}