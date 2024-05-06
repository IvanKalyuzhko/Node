import express from 'express'

const PORT = 5000
const app = express()

app.get('/',(req,res)=>{
    console.log(req.query)
    //http://localhost:5000/?test=123&query=nazva&third=znachenia
    //{ test: '123', query: 'nazva', third: 'znachenia' }
    console.log(req.query.test)
    //123
    res.status(200).json('сервер працює1')
})

app.use(express.json())
//{ test: 'test1', username: 'ULBY TV' }
app.post('/post',(req,res)=>{
    console.log(req.body)
    res.status(200).json('сервер працює2')
})//undefined
 
app.listen(PORT, () => console.log(`Сервер працює http://localhost:${PORT}`))