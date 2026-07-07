export default function LandingPage() {

    return (
        <div className="min-h-screen p-10 space-y-12">

            {/* TITLE */}
            <div>
                <h1 className="font-serif text-5xl text-text">
                    Soft Wedding Palette
                </h1>
                <p className="text-muted mt-2">
                    Cream / pastel color system
                </p>
            </div>

            {/* COLORS */}
            <section>
                <h2 className="font-serif text-3xl mb-4">Colors</h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                    <ColorBox name="Cream" color="bg-cream" hex="#FFF7F0" />
                    <ColorBox name="Ivory" color="bg-ivory" hex="#FFFBF7" />
                    <ColorBox name="Sand" color="bg-sand" hex="#F3E7DA" />
                    <ColorBox name="Blush" color="bg-blush" hex="#EFD3C7" />
                    <ColorBox name="Rose" color="bg-rose" hex="#E7BDB0" />
                    <ColorBox name="Mocha" color="bg-mocha" hex="#BFA6A0" />
                    <ColorBox name="Text" color="bg-text" hex="#3A3330" />
                    <ColorBox name="Muted" color="bg-muted" hex="#8C817C" />

                </div>
            </section>

            {/* TYPOGRAPHY */}
            <section>
                <h2 className="font-serif text-3xl mb-4">Typography</h2>

                <div className="space-y-6">

                    <div>
                        <p className="text-sm text-muted">Playfair Display</p>
                        <h1 className="font-serif text-5xl">
                            Илья ❤️ Алина
                        </h1>
                    </div>

                    <div>
                        <p className="text-sm text-muted">Inter</p>
                        <p className="text-lg">
                            Приглашение на нашу свадьбу в нежной пастельной стилистике.
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-muted">Muted text</p>
                        <p className="text-muted">
                            Дополнительные детали и подписи выглядят мягко и ненавязчиво.
                        </p>
                    </div>

                </div>
            </section>

            {/* BUTTONS */}
            <section>
                <h2 className="font-serif text-3xl mb-4">Buttons</h2>

                <div className="flex gap-4 flex-wrap">

                    <button className="px-6 py-3 bg-rose text-white rounded-full shadow">
                        Primary
                    </button>

                    <button className="px-6 py-3 border border-rose text-rose rounded-full">
                        Outline
                    </button>

                    <button className="px-6 py-3 bg-blush text-text rounded-full">
                        Soft
                    </button>

                </div>
            </section>

        </div>
    )
}

/* helper */
function ColorBox({
                      name,
                      color,
                      hex,
                  }: {
    name: string
    color: string
    hex: string
}) {
    return (
        <div className="space-y-2">
            <div className={`h-20 rounded-xl shadow-sm ${color}`} />
            <div className="text-sm">
                <div className="font-medium">{name}</div>
                <div className="text-muted">{hex}</div>
            </div>
        </div>
    )
}