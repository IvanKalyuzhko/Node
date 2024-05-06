import express from 'express'
import mongoose from 'mongoose'
import Post from "./Post.js"

const PORT = 5000
const DB_URL = `mongodb+srv://user:user@cluster1.kzxck2c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`
const app = express()

app.use(express.json())
app.post('/',async (req,res)=>{
    const {author,title,content,picture} = req.body
    const post = await Post.create({author,title,content,picture})
    res.status(200).json('сервер працює2')
})

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology:true , useNewUrlParser:true})
        app.listen(PORT, () => console.log(`Сервер працює http://localhost:${PORT}`))
    }catch(e){
        console.log(e)
    }
}
 
startApp()