**Diretrizes para o Desafio de Codifica��o**
===========================

Se voc� n�o tiver um c�digo para compartilhar, voc� pode trabalhar em nosso desafio de codifica��o descrito abaixo.

Por favor, organize, projete, teste, documente e implemente seu c�digo como se fosse para produ��o e, em seguida, nos envie um link para o reposit�rio hospedado (por exemplo, Github, Bitbucket...).

**Especifica��o Funcional**
---------------

Prototipe **um** dos seguintes projetos:

1. Hor�rios de Partida
2. Filmes em SF
3. Servi�o de E-mail
4. Food Trucks

A experi�ncia do usu�rio (UX/UI) � totalmente sua. Se desejar, seja criativo e adicione recursos adicionais que um usu�rio possa achar �teis!

### Hor�rios de Partida

Crie um servi�o que forne�a o hor�rio de partida em tempo real para transporte p�blico (utilize uma API p�blica dispon�vel). O aplicativo deve geolocalizar o usu�rio.

Aqui est�o alguns exemplos de dados dispon�veis gratuitamente:

* [511](http://511.org/developer-resources_transit-api.asp) (S�o Francisco)
* [Nextbus](http://www.nextbus.com/xmlFeedDocs/NextBusXMLFeed.pdf) (S�o Francisco)
* [Transport for London Unified API](https://api.tfl.gov.uk/) (Londres)

### Filmes em SF

Crie um servi�o que mostre em um mapa onde filmes foram filmados em S�o Francisco. O usu�rio deve ser capaz de filtrar a visualiza��o usando uma pesquisa com autocompletar.

Os dados est�o dispon�veis em [DataSF](http://www.datasf.org/): [Locais de Filmes](https://data.sfgov.org/Arts-Culture-and-Recreation-/Film-Locations-in-San-Francisco/yitu-d5am).

### Servi�o de E-mail

Crie um servi�o que aceite as informa��es necess�rias e envie e-mails. Ele deve fornecer uma abstra��o entre dois diferentes provedores de servi�o de e-mail. Se um dos servi�os falhar, seu servi�o pode rapidamente mudar para um provedor diferente sem afetar seus clientes.

Exemplos de Provedores de E-mail:

* [SendGrid](https://sendgrid.com/user/signup) - [Documenta��o de Envio Simples](https://sendgrid.com/docs/API_Reference/Web_API/mail.html)
* [Mailgun](http://www.mailgun.com) - [Documenta��o de Envio Simples](http://documentation.mailgun.com/quickstart.html#sending-messages)
* [SparkPost](https://www.sparkpost.com/) - [Central de Desenvolvedores](https://developers.sparkpost.com/)
* [Amazon SES](http://aws.amazon.com/ses/) - [Documenta��o de Envio Simples](http://docs.aws.amazon.com/ses/latest/APIReference/API_SendEmail.html)

Todos os servi�os listados s�o gratuitos para experimentar e � bastante f�cil se inscrever, ent�o por favor, registre suas pr�prias contas de teste em cada um deles.

### Food Trucks

Crie um servi�o que informe ao usu�rio quais tipos de food trucks podem ser encontrados perto de uma localiza��o espec�fica em um mapa.

Os dados est�o dispon�veis em [DataSF](http://www.datasf.org/): [Food Trucks](https://data.sfgov.org/Permitting/Mobile-Food-Facility-Permit/rqzj-sfat)

**Especifica��o T�cnica**
--------------

A arquitetura ser� dividida entre um back-end e um front-end web, por exemplo, fornecendo uma API RESTful JSON de entrada/sa�da. Sinta-se � vontade para usar outras tecnologias, desde que a arquitetura geral cliente/servi�o seja respeitada.

Escolha **um** dos seguintes trilhas t�cnicas que melhor se adequa ao seu conjunto de habilidades:

1. **Full-stack**: inclua tanto front-end quanto back-end.
2. **Trilha de Back-end**: inclua um front-end m�nimo (por exemplo, uma visualiza��o est�tica ou documenta��o da API). Escreva, documente e teste sua API como se ela fosse ser usada por outros servi�os.
3. **Trilha de Front-end**: inclua um back-end m�nimo, ou use o servi�o de dados diretamente. Foque em tornar a interface o mais polida poss�vel.

### Back-end

Acreditamos que n�o existe uma tecnologia �nica que seja adequada para todos. Boa engenharia � sobre usar a ferramenta certa para o trabalho certo e aprender constantemente sobre elas. Portanto, sinta-se � vontade para mencionar em seu `README` quanta experi�ncia voc� tem com a pilha t�cnica que escolher, n�s levaremos isso em conta ao revisar seu desafio.

Aqui est�o algumas tecnologias com as quais estamos mais familiarizados:

* Python
* JavaScript
* Ruby
* PHP
* Go
* C++
* Haskell
* Java

Voc� tamb�m pode usar qualquer framework web. Se optar por usar um framework que resulte em c�digo boilerplate no reposit�rio, por favor, detalhe em seu README qual c�digo foi escrito por voc� (em oposi��o ao c�digo gerado).

### Front-end

O front-end deve idealmente ser um aplicativo de p�gina �nica com um �nico `index.html` vinculado a JS/CSS/etc. externos. Voc� pode aproveitar essa oportunidade para demonstrar seu conhecimento em CSS3 ou HTML5.

**Hospede-o!**
--------

Quando terminar, hospede-o em algum lugar (por exemplo, Amazon EC2, Heroku, Google AppEngine, etc.).

**Como vamos revisar?**
-------------------

[As diretrizes podem ser encontradas aqui](https://github.com/uber/coding-challenge-tools/blob/master/README.md)

---