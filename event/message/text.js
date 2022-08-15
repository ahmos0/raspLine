import { ledfunc } from '../blink.js'
export const textEvent = async (event, client) => {
    let message;
    const { userId } = event.source;
    switch (event.message.text) {
        case 'Lチカ': {
            ledfunc();
            console.log("入った1");
            message = {
                type: 'text',
                text: "Lチカが無事にできました!!"
            };
            break;
        }
        default: {
            message = {
                type: 'text',
                text: `受け取ったメッセージ: ${event.message.text}\nそのメッセージの返信には対応してません...`,
            };
            break;
        }

    }
    console.log("入った2");
    return message;
};