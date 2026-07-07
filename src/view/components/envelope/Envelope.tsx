import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import EnvelopeFlap from './EnvelopeFlap';
import EnvelopeLetter from './EnvelopeLetter';
import WaxSeal from './WaxSeal';

export default function Envelope() {
    const [opened, setOpened] = useState(false);

    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cream">

            <div className="relative w-[420px] h-[320px]">

                <EnvelopeLetter opened={opened} />

                {/* Основа */}

                <div className="absolute bottom-0 h-[230px] w-full rounded-xl bg-[#F4E8DE] shadow-2xl" />

                {/* Левая часть */}

                <div
                    className="
                        absolute
                        bottom-0
                        left-0
                        h-[230px]
                        w-1/2
                        origin-bottom-right
                        -skew-y-[30deg]
                        rounded-bl-xl
                        bg-[#EBDDD2]
                    "
                />

                {/* Правая часть */}

                <div
                    className="
                        absolute
                        bottom-0
                        right-0
                        h-[230px]
                        w-1/2
                        origin-bottom-left
                        skew-y-[30deg]
                        rounded-br-xl
                        bg-[#E6D5C9]
                    "
                />

                <EnvelopeFlap opened={opened} />

                <AnimatePresence>
                    {!opened && (
                        <WaxSeal onClick={() => setOpened(true)} />
                    )}
                </AnimatePresence>

            </div>

        </section>
    );
}