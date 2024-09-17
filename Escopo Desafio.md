**Diretrizes para o Desafio de Codificação**
===========================

Se você não tiver um código para compartilhar, você pode trabalhar em nosso desafio de codificação descrito abaixo.

Por favor, organize, projete, teste, documente e implemente seu código como se fosse para produção e, em seguida, nos envie um link para o repositório hospedado (por exemplo, Github, Bitbucket...).

**Especificação Funcional**
---------------

Prototipe **um** dos seguintes projetos:

1. Horários de Partida
2. Filmes em SF
3. Serviço de E-mail
4. Food Trucks

A experiência do usuário (UX/UI) é totalmente sua. Se desejar, seja criativo e adicione recursos adicionais que um usuário possa achar úteis!

### Horários de Partida

Crie um serviço que forneça o horário de partida em tempo real para transporte público (utilize uma API pública disponível). O aplicativo deve geolocalizar o usuário.

Aqui estão alguns exemplos de dados disponíveis gratuitamente:

* [511](http://511.org/developer-resources_transit-api.asp) (São Francisco)
* [Nextbus](http://www.nextbus.com/xmlFeedDocs/NextBusXMLFeed.pdf) (São Francisco)
* [Transport for London Unified API](https://api.tfl.gov.uk/) (Londres)

### Filmes em SF

Crie um serviço que mostre em um mapa onde filmes foram filmados em São Francisco. O usuário deve ser capaz de filtrar a visualização usando uma pesquisa com autocompletar.

Os dados estão disponíveis em [DataSF](http://www.datasf.org/): [Locais de Filmes](https://data.sfgov.org/Arts-Culture-and-Recreation-/Film-Locations-in-San-Francisco/yitu-d5am).

### Serviço de E-mail

Crie um serviço que aceite as informações necessárias e envie e-mails. Ele deve fornecer uma abstração entre dois diferentes provedores de serviço de e-mail. Se um dos serviços falhar, seu serviço pode rapidamente mudar para um provedor diferente sem afetar seus clientes.

Exemplos de Provedores de E-mail:

* [SendGrid](https://sendgrid.com/user/signup) - [Documentação de Envio Simples](https://sendgrid.com/docs/API_Reference/Web_API/mail.html)
* [Mailgun](http://www.mailgun.com) - [Documentação de Envio Simples](http://documentation.mailgun.com/quickstart.html#sending-messages)
* [SparkPost](https://www.sparkpost.com/) - [Central de Desenvolvedores](https://developers.sparkpost.com/)
* [Amazon SES](http://aws.amazon.com/ses/) - [Documentação de Envio Simples](http://docs.aws.amazon.com/ses/latest/APIReference/API_SendEmail.html)

Todos os serviços listados são gratuitos para experimentar e é bastante fácil se inscrever, então por favor, registre suas próprias contas de teste em cada um deles.

### Food Trucks

Crie um serviço que informe ao usuário quais tipos de food trucks podem ser encontrados perto de uma localização específica em um mapa.

Os dados estão disponíveis em [DataSF](http://www.datasf.org/): [Food Trucks](https://data.sfgov.org/Permitting/Mobile-Food-Facility-Permit/rqzj-sfat)

**Especificação Técnica**
--------------

A arquitetura será dividida entre um back-end e um front-end web, por exemplo, fornecendo uma API RESTful JSON de entrada/saída. Sinta-se à vontade para usar outras tecnologias, desde que a arquitetura geral cliente/serviço seja respeitada.

Escolha **um** dos seguintes trilhas técnicas que melhor se adequa ao seu conjunto de habilidades:

1. **Full-stack**: inclua tanto front-end quanto back-end.
2. **Trilha de Back-end**: inclua um front-end mínimo (por exemplo, uma visualização estática ou documentação da API). Escreva, documente e teste sua API como se ela fosse ser usada por outros serviços.
3. **Trilha de Front-end**: inclua um back-end mínimo, ou use o serviço de dados diretamente. Foque em tornar a interface o mais polida possível.

### Back-end

Acreditamos que não existe uma tecnologia única que seja adequada para todos. Boa engenharia é sobre usar a ferramenta certa para o trabalho certo e aprender constantemente sobre elas. Portanto, sinta-se à vontade para mencionar em seu `README` quanta experiência você tem com a pilha técnica que escolher, nós levaremos isso em conta ao revisar seu desafio.

Aqui estão algumas tecnologias com as quais estamos mais familiarizados:

* Python
* JavaScript
* Ruby
* PHP
* Go
* C++
* Haskell
* Java

Você também pode usar qualquer framework web. Se optar por usar um framework que resulte em código boilerplate no repositório, por favor, detalhe em seu README qual código foi escrito por você (em oposição ao código gerado).

### Front-end

O front-end deve idealmente ser um aplicativo de página única com um único `index.html` vinculado a JS/CSS/etc. externos. Você pode aproveitar essa oportunidade para demonstrar seu conhecimento em CSS3 ou HTML5.

**Hospede-o!**
--------

Quando terminar, hospede-o em algum lugar (por exemplo, Amazon EC2, Heroku, Google AppEngine, etc.).

**Como vamos revisar?**
-------------------

[As diretrizes podem ser encontradas aqui](https://github.com/uber/coding-challenge-tools/blob/master/README.md)

---