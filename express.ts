import express from "express"


export const app = express()

app.get("/",(req,res)=>{
	res.send("<h1>Hello :)</h1>")
})
