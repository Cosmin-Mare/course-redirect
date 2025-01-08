import fs from "fs";
import path from "path";import { put } from "@vercel/blob";

export default function handler(req, res){
    const body = req.body;
    const { url } = put('articles/blob.txt', 'Hello World!', { access: 'public' });

    const dir = path.resolve('./');
    const files = fs.readdirSync(dir);
    console.log({files})
    let text = fs.readFile(`page${body.number}.txt`, 'utf-8', (err, data) => {
        
        res.status(200).json({url: data})
    })
}