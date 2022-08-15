import express from 'express';
import line from '@line/bot-sdk';
import 'dotenv/config';
import { index } from './bot.js';
const app = express();
//環境変数からLINE SDKの設定を作成する
export const config = {
    channelAccessToken: process.env.channelAccessToken,
    channelSecret: process.env.channelSecret
};


//LINEクライアントの作成
export const client = new line.Client(config);
app.get('/', (req, res) => { res.send('Deploy succeeded'); });
//ミドルウェアにWebhookハンドラを登録する
app.post("/webhook", line.middleware({ channelSecret: process.env.channelSecret }), index);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});