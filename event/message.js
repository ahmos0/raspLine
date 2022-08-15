import { textEvent } from './message/text.js';

export default (event, client) => {
    let message;
    switch (event.message.type) {
        case 'text': {
            message = textEvent(event, client);
            break;
        }
        default: {
            message = {
                type: 'text',
                text: 'そのイベントには対応していません...',
            };
            break;
        }
    }
    return message;
};