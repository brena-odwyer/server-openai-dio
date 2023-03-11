const inputPrompt = require("../models/input-prompt") // importando
const openai = require("../config/openai")

module.exports = {
	async sendText(req, res){ // quem acessar nossa aplicação, vai acessar por aqui
 
		const openaiAPI = openai.configuration() // chamamos a estância da classe lá no config
		const inputModel = new inputPrompt(req.body)

		try {
			const response = await openaiAPI.createCompletion(
				openai.textCompletion(inputModel)
			)

			return res.status(200).json({
				sucess: true,
				data: response.data.choices[0].text
			})

		} catch (error) {

			return res.status(400).json({
				sucess: false,
				error: error.response
				? error.response.data
				: 'There was an inssue on the server'
			})

		}
	}

}