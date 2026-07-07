import axios from 'axios';

const BOT_TOKEN = '8476706464:AAGpyoBF4vFqfstwnf8CHDLjuIECStIB9cE';
const CHAT_ID = '330137645';

export interface RSVPData {
    name: string;
    drinks: string[];
    otherDrink?: string;
}

export function useTelegram() {
    const sendRSVP = async (data: RSVPData) => {
        try {
            const drinks = [...data.drinks];

            if (data.otherDrink) {
                drinks.push(`Другое: ${data.otherDrink}`);
            }

            const text =
                `💍 *Новое подтверждение присутствия*\n\n` +
                `👤 *Имя:* ${data.name}\n\n` +
                `🥂 *Напитки:*\n${drinks.map((d) => `• ${d}`).join('\n')}`;

            await axios.post(
                `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
                {
                    chat_id: CHAT_ID,
                    text,
                    parse_mode: 'Markdown',
                },
            );
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    return {
        sendRSVP,
    };
}