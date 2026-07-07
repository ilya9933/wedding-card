import { motion } from 'framer-motion';
import { useRef } from 'react';

interface Props {
    image: string;
    title: string;
    text: string;
    reverse?: boolean;
}

export default function StoryItem({
                                      image,
                                      text,
                                      reverse = false,
                                  }: Props) {
    const ref = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={ref}
            className={`
        snap-center
        min-h-[80vh]
        flex
        items-center
        gap-16
        ${reverse ? 'flex-row-reverse' : 'flex-row'}
      `}
        >
            <div className="md:w-1/2 flex justify-center">
                <motion.img
                    src={image}
                    className="
            w-[300px]
            h-[400px]
            rounded-[36px]
            object-cover
            shadow-2xl
          "
                />
            </div>

            <motion.div
                className="md:w-1/2"
            >

                <p className="text-muted text-lg leading-9">
                    {text}
                </p>
            </motion.div>
        </div>
    );
}