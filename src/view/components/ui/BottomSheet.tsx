import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';

interface Props {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export default function BottomSheet({
                                        open,
                                        onClose,
                                        children,
                                    }: Props) {
    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';

        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    return (
        <AnimatePresence>

            {open && (
                <>
                    <motion.div
                        className="fixed inset-0 z-40 bg-black/40"
                        onClick={onClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />

                    <motion.div
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '100%' }}
                        transition={{
                            type: 'spring',
                            stiffness: 260,
                            damping: 28,
                        }}
                        className="
              fixed
              bottom-0
              left-0
              right-0
              z-50
              rounded-t-[32px]
              bg-white
              p-8
              shadow-2xl
            "
                    >
                        <div className="mb-6 flex justify-center">
                            <div className="h-1.5 w-14 rounded-full bg-gray-300" />
                        </div>

                        {children}
                    </motion.div>
                </>
            )}

        </AnimatePresence>
    );
}