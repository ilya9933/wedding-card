import type {PropsWithChildren} from "react";

export default function Container({ children }: PropsWithChildren) {
    return (
        <div className="mt-6 mb-12 mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">
            {children}
        </div>
    );
}