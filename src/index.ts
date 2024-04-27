import express, {Request,Response} from "express"
import cors from 'cors'

const app = express();

app.use(cors({
    origin:['http://localhost:4200']
}))

app.get('/',(req:Request, res: Response)=>{
    res.send("Hello There!")
})

app.listen(8000,()=>{
    console.log(`listing to port 8000`)
})