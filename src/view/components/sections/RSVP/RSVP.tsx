import { useState } from 'react';
import PageSection from '../../layout/PageSection.tsx';
import SectionTitle from '../../ui/SectionTitle.tsx';
import RSVPForm from './RSVPForm';
import BottomSheet from "../../ui/BottomSheet.tsx";

export default function RSVP() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <PageSection background="bg-cream">
                <div className="mx-auto max-w-2xl text-center">

                    <SectionTitle>Подтвердить присутствие</SectionTitle>

                    <p className="mt-8 text-lg leading-8 text-muted">
                        Пожалуйста, сообщите нам о вашем решении до
                        <span className="font-semibold text-text"> 1 августа 2026</span>.
                    </p>

                    <button
                        onClick={() => setOpen(true)}
                        className="
                          mt-12
                          rounded-full
                          bg-rose
                          px-10
                          py-4
                          text-white
                          transition
                          hover:scale-105
                          hover:shadow-xl
                        "
                    >
                        Подтвердить присутствие
                    </button>

                </div>
            </PageSection>

            <BottomSheet
                open={open}
                onClose={() => setOpen(false)}
            >
                <RSVPForm />
            </BottomSheet>
        </>
    );
}