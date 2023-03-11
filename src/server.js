const app = require("./app") // chamamos a aplicação
const PORT = process.env.PORT || 9894 // declaramos a porta (que ta la no .env) e damos uma outra opção

app.listen(PORT, () =>{
    console.log(`Server listening on ${PORT}`)
})