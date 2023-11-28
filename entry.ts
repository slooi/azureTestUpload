import { app } from "./express"

const PORT = process.env.PORT || 1337;
app.listen(PORT,()=>console.log("Listening port "+PORT))