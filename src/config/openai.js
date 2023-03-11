const { Configuration, OpenAIApi } = require("openai"); //ai sendo importada
require("dotenv").config() // importando o dot.env

module.exports = class openai { // fazemos um module pra exportar, cria uma classe
    static configuration(){ // cria um método estático chamado configuration, um método que pode ser chamado fora com as configurações
        const configuration = new Configuration({ // passa uma nova instância do openAI a partir do método que vem deles
            apiKey: process.env.OPENAI_API_KEY, // tem que ser criado um igual lá no .env
        });
        return new OpenAIApi(configuration) // retorna uma nova instância da openAI (a linha que a própria openAI dá)
    }
    static textCompletion({prompt}) { // esse prompt vai vir do front end dinanimcamente
    return {
        model: "text-davinci-003", // essas configurações vem todas da openAI
        prompt: `${prompt}`, // prompt é o que estamos mandando de entrada
        temperature: 0.7,
        max_tokens: 3500,
        top_p: 1,
        frequency_penalty: 0.5,
        presence_penalty: 0,
    }
}
}