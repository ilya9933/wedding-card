import Container from './Container';
import type {PropsWithChildren} from "react";

interface Props extends PropsWithChildren {
    background?: string;
}

export default function PageSection({
                                        children,
                                        background = 'bg-cream',
                                    }: Props) {
    return (
        <section
            className={`snap-start min-h-screen flex items-center ${background}`}
        >
            <Container>{children}</Container>
        </section>
    );
}