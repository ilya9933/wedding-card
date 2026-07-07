import { useState } from 'react';
import {useTelegram} from "../../../../hooks/useTelegram.ts";

const drinks = [
    'Красное вино',
    'Белое вино',
    'Игристое',
    'Пиво',
    'Коньяк',
    'Водка',
    'Без алкоголя',
    'Другое',
];

export default function RSVPForm() {
    const { sendRSVP } = useTelegram();
    const [name, setName] = useState('');
    const [selected, setSelected] = useState<string[]>([]);
    const [otherDrink, setOtherDrink] = useState('');

    const handleSubmit = async () => {
        try {
            await sendRSVP({
                name,
                drinks: selected,
                otherDrink,
            });

            alert('Спасибо! ❤️');
        } catch {
            alert('Не удалось отправить ответ');
        }
    };

    function toggleDrink(drink: string) {
        if (selected.includes(drink)) {
            setSelected(selected.filter((d) => d !== drink));

            if (drink === 'Другое') {
                setOtherDrink('');
            }
        } else {
            setSelected([...selected, drink]);
        }
    }

    const isOtherSelected = selected.includes('Другое');

    return (
        <div className="mx-auto max-w-xl">

            <h2 className="text-center font-serif text-3xl">
                Будем рады видеть вас 🤍
            </h2>

            <input
                className="
          mt-8
          w-full
          rounded-xl
          border
          border-gray-300
          p-4
          outline-none
          focus:border-rose
        "
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <p className="mt-8 mb-4 text-muted">
                Какие напитки вы предпочитаете?
            </p>

            <div className="flex flex-wrap gap-3">
                {drinks.map((drink) => {
                    const active = selected.includes(drink);

                    return (
                        <button
                            type="button"
                            key={drink}
                            onClick={() => toggleDrink(drink)}
                            className={`
                rounded-full
                border
                px-5
                py-2
                transition
                ${
                                active
                                    ? 'border-rose bg-rose text-white'
                                    : 'border-rose/20 bg-ivory hover:bg-rose/10'
                            }
              `}
                        >
                            {drink}
                        </button>
                    );
                })}
            </div>

            {isOtherSelected && (
                <input
                    className="
            mt-5
            w-full
            rounded-xl
            border
            border-gray-300
            p-4
            outline-none
            focus:border-rose
          "
                    placeholder="Укажите предпочитаемый напиток"
                    value={otherDrink}
                    onChange={(e) => setOtherDrink(e.target.value)}
                />
            )}

            <div className='flex flex-col items-center'>

                <button
                    onClick={handleSubmit}
                    className="
                      mt-10
                      w-full
                      rounded-full
                      bg-rose
                      py-4
                      text-white
                      transition
                      hover:opacity-90
                    "
                >
                    Отправить в Telegram
                </button>

                <p className="text-center mt-8 mb-4 text-muted">
                    или
                </p>

                <a
                    href="https://vk.com/id439353531"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                            rounded-full
                            bg-rose
                            px-8
                            py-3
                            text-white
                            transition
                            hover:scale-105
                        "
                >
                    Написать Алине в VK
                </a>
            </div>
        </div>

    );
}