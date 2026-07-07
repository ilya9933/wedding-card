import type {PropsWithChildren} from "react";

export default function SectionTitle({
                                         children,
                                     }: PropsWithChildren) {
    return (
        <h2 className="font-serif text-5xl md:text-6xl text-text mb-6">
            {children}
        </h2>
    );
}