import { app } from "./express"

const PORT = process.env.PORT || 8080 ;
app.listen(PORT,()=>console.log("Listening port "+PORT))