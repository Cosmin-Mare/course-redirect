import { neon } from "@neondatabase/serverless";

export default async function handler(req, res){
    const body = req.body;

    const sql = neon(`${process.env.DATABASE_URL}`);
    console.log((await sql(`SELECT url FROM pages WHERE num = ${body.number}`))[0].url)
    res.status(200).json({url: (await sql(`SELECT url FROM pages WHERE num = ${body.number}`))[0].url});
}