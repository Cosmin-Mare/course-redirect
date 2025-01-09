import fs from "fs";
import {put} from "@vercel/blob"
import { neon } from "@neondatabase/serverless";

export default async function handler(req, res){
    const body = await req.body;
    const sql = neon(`${process.env.DATABASE_URL}`);
    console.log(`UPDATE pages SET url = ${body.url} WHERE num = ${body.number}`)
    await sql(`UPDATE pages SET url = '${body.url}' WHERE num = ${body.number}`)
	res.status(200).json()
}