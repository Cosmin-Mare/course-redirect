import fs from "fs";

export default async function handler(req, res){
    const body = await req.body;
    await fs.writeFile(`page${body.number}.txt`, body.url, (err, data) => {})
	res.status(200).json({ message: 'Hello from Next.js!' })
}