import fs from "fs";

export default function handler(req, res){
    const body = req.body;
    const dir = path.resolve('./');
    const files = fs.readdirSync(dir);
    console.log({files})
    let text = fs.readFile(`page${body.number}.txt`, 'utf-8', (err, data) => {
        
        res.status(200).json({url: data})
    })
}