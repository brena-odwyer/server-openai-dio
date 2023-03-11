#Anotações e passo a passo
src = código gointe
fora da src -> arquivos de configuração

Começa instalando o npm init -y que cria nossa package.json.

Too server vai ser sustentada por uma aplicação. o server sereve justamente pra hospedar a aplicação.

Cria o arquivo app.js
cria o arquivo server.js
Vamos instalar as dependências do projeto: nodemon (cria o package-lock); cors (controla quem pode acessar ou não sua aplicação); dotenv (de segurança, permite criar o arquivo .env); express; open ai.
Aí todas essas dependências vão estar ali no package.json

Depois vamos configurar o servidor -> app.js
Com tudo da aplicação lá vamos para o servidor -> server.js (que vai servir nossa aplicação)
No server colocamos a aplicação pra rodar na porta.

Todo servidor se comunica com alguém no mundo externo. O controller controla quem entre e quem saí e como. Controla as requisições e respostas (request/response) que tão vindo do cliente.
As rotas levam a esse req/res. São as routes que vão vir pelos verbos HTTP (get, post, put, delete)
Cria a rota dentro de routes e volta pro app pra importar as rotas lá e coloca o app pra usá-las.

Agora faz a parte do open AI e pra isso faz uma pasta de configurações.

Os projetos tem dois tipos de configurações, aquelas que não tem dados sensíveis que ficam no controller, o que tiver dado sensível fica no .env

Código copiado de: https://platform.openai.com/playground -> config -> openai.js e fizemos algumas alterações

Voltamos pro controller pra importar a openai.

Criação do model.