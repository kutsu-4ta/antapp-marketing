import { useRef } from "react";
interface Props {
    alt: string;
    path: string;
    aspectRatio: string;
}

export function Image({ alt, path, aspectRatio }: Props) {
    const ref = useRef(null);

    return (
        <section>
            <div ref={ref} style={{ aspectRatio }}>
                <img src={path} alt={alt}/>
            </div>
        </section>
    );
}
