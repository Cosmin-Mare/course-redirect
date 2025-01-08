import fs from "fs";

export default function handler(req, res){
    const body = req.body;
    let text = fs.readFile(`page${body.number}.txt`, 'utf-8', (err, data) => {
        res.status(200).json({url: data})
        console.log(data)
    })
}