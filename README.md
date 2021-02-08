# Javascript: a linguagem da web | Alura com Douglas Quintanilha

Como uma das concluintes do oitavo Bootcamp de back-end da {Reprograma}, tive o privilégio de ter acesso a três meses de acesso a cursos selecionados da Alura. 

Após concluir 4 cursos introdutórios de HTML e CSS sem compartilhar os meus aprendizados e avanços, resolvi voltar a utilizar o Github enquanto uma plataforma de compartilhamento dos meus avanços, tendo agora como foco o universo do front-end. 

## Aula 1 - Introdução

A partir de um projeto simples do site "Aparecida Nutrição", fornecido pela Alura como ponto de partida, comecei a entender como funciona a interação do Javascript com estruturas de HTML.

A seguir está um resumo sobre meus principais aprendizados nessa aula.

### Tag Script

Um dos principais aprendizados que tive nessa aula foi a tag de HTML "script" que tem a seguinte escrita: 

`$ <script> </script>`

Ela tem como característica o fato de que tudo que está dentro dela é identificado pelo navegdaor como um script, esperando-se que esteja escrito em Javascript. 

Além disso, essa tag também pode ser utilizada para importar no arquivo HTML um arquivo Javascript, facilitando a manutenção de boas práticas na separação de documentos de diferentes linguagem dentro de um projeto. 

Para, por exemplo, importar um arquivo Javascript chamado "principal.js" localizado na mesma pasta no arquivo HTML que está sendo utilizado como base para o projeto escrevemos a tag assim:

`$ <script src="principal.js"></script>`

### Variável document e querySelector

Outra coisa que aprendi é que ao utilizar a variável "document" temos acesso ao DOM - Document Object Model, que é como o navegador vê o HTML utilizado para renderizar a página. 

É através dessa variável que conseguimos, utilizando Javascript, manipular o conteúdo de um arquivo HTML. 

No entanto, ao manusear o HTML geralmente não queremos modificar todo o conteúdo presente na página. É aí que aparece a função ".querySelector" que nos permite manusear elementos específicos, sendo a melhor prática para localizar elementos específicos a atribuição de uma id ou classe à tag que queremos modificar.

Por exemplo, caso tenhamos o título principal do site marcado por uma tag h1, podemos atribuir a ele a classe "titulo"

`$ <h1 class="titulo">Aparecida Nutrição</h1>`

E acessá-la, no documento Javascript, com a ajuda da variável document e do querySelector

`$ document.querySelector(".titulo")`

Atribuindo o conteúdo a uma variável "titulo", a fim de poder lidar com ela: 

`$ var titulo = document.querySelector(".titulo")`

### textContet

Por fim, aprendi sobre a a propriedade textContet, que tem como conteúdo o texto presente na tag que estamos manipulando. É ela que usamos quando queremos, por exemplo, mudar o conteúdo de alguma tag do HTML sem modificar o HTML em si. 

Já com a variável "titulo" criada, podemos modificar o título exibido na página com a seguinte escrita: 

`$ titulo.textContent = "Aparecida Nutricionista"`

## Aula 2 - Operadores lógicos

Ao assistir a segunda aula, além de exercitar bastante os conhecimentos adquiridos no que tange a acessar os dados de um documento HTML a partir das variável document, do querySelector e da propriedade textContent, utilizamos operadores lógicos para calcular o IMC do primeiro paciente presente na tabela. Por fim, foi criada uma lógica utilizando if/else a fim de impossibilitar o cálculo do IMC nos casos em que as variáveis de peso e/ou altura estejam com valores incoerentes com a realidade. 

No HTML a única modificação feita foi a adição da id "primeiroPaciente" na primeira tr do body da tabela de pacientes, tendo sido o documento principal.js o que mais sofreu modificações. Nele foram criadas diversas variáveis e, a partir delas, foi desenvolvida uma lógica de cálculo do IMC. Esse documento pode ser encontrado na pasta "aula2_variaveisOperadoresLogicos" e está todo comentado! o/