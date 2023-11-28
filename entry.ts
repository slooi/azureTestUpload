import { app } from "./express"

const PORT = 3000
app.listen(PORT,()=>console.log("Listening port "+PORT))