import express  from "express";
import mongoose from "mongoose";
import CardModel from "./DbCards.js";

const app = express();
import cors from 'cors'
app.use(express.json())
app.use(cors())
const port = process.env.PORT || 8000;
const dbUrl = 'mongodb+srv://admin:manik2007@cluster0.setxqx1.mongodb.net/tinderDb?retryWrites=true&w=majority';
mongoose.set('strictQuery', false)
mongoose.connect(dbUrl,{
   useUnifiedTopology:true,
   useNewUrlParser:true,
   // useCreateIndex:true
}).then(()=>[
   console.log('connection established')
])

app.get("/",(req,res)=>{
   res.status(200).send("heyy ..its backend side ..")
});
app.post('/tinder/cards',async(req,res)=>{
try {
   let card = await CardModel.create(req.body);
   card.save();
   res.send("data saved")
} catch (error) {
   res.send(error)
}
});
app.get('/tinder/cards',async(req,res)=>{
   try {
      let card = await CardModel.find();
      // card.save();
      res.send(card)
   } catch (error) {
      console.log('hasdijkic akjhfda',error)
      res.send(error)
   }
   })

app.listen(port,()=>{
   console.log('listening at ',port);
});
