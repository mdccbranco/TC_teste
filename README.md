# Solução proposta

Para desenvolver a solução para o teste, foi utilizado o **json-server** para montar a "API" que foi utilizada para servir o front, escrito em **React**.

## Instalação

Para rodar a "API" é necessário ter instalado o pacote [json-server](https://www.npmjs.com/package/json-server). Após a instalação, navegue para a pasta /src/service e, coloque a "API" para rodar através do seguinte comando

`json-server --watch db.json --port 8000`

Com a API funcionando, inicie o projeto do react com o comando `npm start` na raiz do projeto. Deve abrir no navegador padrão a url: http://localhost:3000/ rodando o projeto.

## Principais dificuldades

* Inserir o wireframe do carro
* Organizar os diferentes componetes e chamá-los de forma minimamente organizada

## Pontos de melhoria já mapeados


- [ ] Falta de feedback claro para o usuário.
- [ ] Estilização mais fiel as telas apresentadas
- [ ] Centralização do estado em um único componente
- [ ] Deixar o código ainda menos repetitivo

Desde já agradeço pela oportunidade de realizar o teste e espero poder conversar e receber o feedback do trabalho realizado.


# TradersClub

Primeiramente, parabéns por atingir nossos requisitos iniciais.

Nosso teste é simplesmente um **CRUD**, com pesquisa, listagem, criação, edição e remoção dos mesmos.

A documentação da api está disponível [neste endereço](https://tradersclub.docs.apiary.io/). Em caso de qualquer problema, por favor, avise-nos de imediato através do e-mail da **Javier Ramacciotti** - **ramacciotti@tradersclub.com.br**.

As 4 telas de referência para o layout encontram-se na pasta *layout*, e consistem:

- *home.png*: A tela inicial de apresentação do teste.
- *lista-veiculos-1.png*: A tela representa uma lista e como será representada a pesquisa de veículos.
Não é necessário autocomplete no campo.
- *lista-veiculos-2.png*: A tela representa a mesma lista anterior, filtrada de forma mais precisa.
- *tela-detalhe-preenchida*: Este é o modelo de formulário de criação/edição. Note que o botão de Remoção também está representado no formulário.

As imagens como a logo do TC e a imagem do carro, estão disponíveis na pasta */src/assets/img*.
Note que também há um arquivos de CSS disponível em */src/assets/styles*. Sua função é a de disponibilizar as cores e fontes corretas para serem configuradas.

Serão avaliadas a capacidade de **organização**, **modularização**, **performance** e **entendimento** do ciclo de vida de um componente.

O teste deve ser escrito preferencialmente em *React*. No entanto, avaliaremos Angular como alternativa sem qualquer problema.


Muito obrigado e boa sorte! 
Esperamos tê-lo(a) por aqui em breve!
