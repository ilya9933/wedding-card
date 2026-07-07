const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

// Сентябрь 2026 (1 — вт, 3 — чт)
const days = [
    null,
    1, 2, 3, 4, 5, 6, 7,
    8, 9, 10, 11, 12, 13, 14,
    15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28,
    29, 30
];

export default function WeddingCalendar() {
    return (
        <div className="max-w-md mx-auto mt-14 text-center">

            {/* месяц */}
            <div className="font-serif text-xl text-text mb-6">
                Сентябрь 2026
            </div>

            {/* дни недели */}
            <div className="grid grid-cols-7 text-sm text-muted border-b border-rose/20 pb-2">
                {daysOfWeek.map((d) => (
                    <div key={d} className="text-center">
                        {d}
                    </div>
                ))}
            </div>

            {/* дни */}
            <div className="grid grid-cols-7 gap-y-3 pt-4 text-sm">

                {days.map((day, i) => {
                    if (!day) return <div key={i} />;

                    const isWeddingDay = day === 3;

                    return (
                        <div key={i} className="flex justify-center items-center">

                            {isWeddingDay ? (
                                <div className="relative w-10 flex items-center justify-center">

                                    {/* сердце */}
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="absolute w-10 h-10 text-rose"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    >
                                        <path xmlns="http://www.w3.org/2000/svg" d="M13.1006 5.05713C15.182 3.014 18.5336 2.95011 20.6943 4.86572L20.8994 5.05713C23.0393 7.25698 22.9869 10.6452 20.8877 12.856L20.8867 12.8569L12 22.271L3.11328 12.8569L3.1123 12.856L2.92188 12.645C1.0101 10.4317 1.02705 7.1803 3.10742 5.04932C4.16764 3.9634 5.57223 3.50049 7 3.50049C8.42427 3.50051 9.82502 3.96109 10.8848 5.0415V5.04248L11.6348 5.84229L12 6.23096L12.3643 5.84229L13.1006 5.05713Z" stroke="#E7BDB0"/>
                                    </svg>

                                    {/* число внутри сердца */}
                                    <span className="relative text-mocha font-bold text-sm">
                    3
                  </span>

                                </div>
                            ) : (
                                <span className="text-text/80 hover:text-text transition">
                  {day}
                </span>
                            )}

                        </div>
                    );
                })}

            </div>
        </div>
    );
}