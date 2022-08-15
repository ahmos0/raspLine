import crypto from 'crypto';
import messageFunc from './event/message.js';
import { client } from './server.js';
export const index = (req, res) => {
    console.log(req.body.events);
    // 署名検証
    const signature = crypto.createHmac('sha256', process.env.channelSecret).update(JSON.stringify(req.body)).digest('base64');
    const checkHeader = req.header('X-Line-Signature');
    const { events } = req.body;
    let message;
    // 署名検証が成功した時
    if (signature === checkHeader) {
        events.forEach(async (event) => {
            switch (event.type) {
                case 'message': {
                    message = await messageFunc(event, client);
                    break;
                }
                default:
                    break;
            }
            if (message !== undefined) {
                console.log(`返信メッセージ: ${JSON.stringify(message)}`);
                client.replyMessage(event.replyToken, message)
                    .then(() => {
                        console.log('Reply succeeded');
                    }).catch((err) => console.log(`${JSON.stringify(message)}\n\n\n${err}`));
            }
        });
    } else {
        console.log('署名認証エラー');
    }
    return res.json('ok');
};