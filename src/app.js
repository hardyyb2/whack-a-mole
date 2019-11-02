const express = require(`express`);
const path = require(`path`);
const app= express();

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public')

app.use(express.static(publicPath))

app.get(`/`,(req, res)=>{
    res.render(`index`)
})

app.get(`/*`,(req, res)=>{
    res.sendFile(path.join(__dirname , `../public/404.html`))
})

app.listen(port , ()=>{
    console.log(`server active at  port...`);
})