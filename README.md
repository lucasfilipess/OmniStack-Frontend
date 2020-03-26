# OmniStack-Frontend

limpar o projeto apagando pastas e documentos inuteis

document.getElementById('root')) 'root' é o id do body do ./public/index.html que é o primeiro arquivo html que vai ser lido pelo react

depois que ele abrir o html ele vai atrás do js que é "chamado" pelo html que é o index.js

quando o html esta escrito dentro do js isso é chamado de JSX (javascript e xml)

sempre que eu for passar algum js pra dentro de uma fução posso usar o props propriedades dentro da função e usar o atribulto

ex:
function Header(props) {
return (

<header>
<h1>{props.title}</h1>
</header>
);
}

uso:
function App() {
return <Header title='TESTE' />;
}

ou

function Header(props) ou function Header({children}) {
return (

<header>
<h1>{props.children}</h1> ou <h1>{children}</h1>
</header>
);
}

uso:
function App() {
return <Header>Teste<Header>;
}

Estado: informação que vai ser mantida pelo componente, em uma função por exemplo eu tenho que passar o estado para que meu componente seja recarregado toda vez que o estado mudar

useState ex:

function App() {
const [counter, setCounter] = useState(0); //Me retorna um arrey com 2 posições [valor, funcaodeAtualizacao]

function increment() {
setCounter(counter + 1);
}
return (

<div>
<Header>Contador: {counter}</Header>
<button onClick={increment}>Incrementar</button>
</div>
);
}

icones https://feathericons.com/

npm install react-icons => tras todos os pacotes de icones do reacr awesome, feather, material... possodesitruturar e usar os que eu quiser

npm install react-router-dom => pacote responsávelpelas rotas da minha aplicação

O routers não olha exatamente se a rota bate com o componente ele so olha se comeã com / por isso eu tenho que colocar o exact para que ele procure exatamente o que esta escrito na rota

Usa se Link ou invés do <a> pois Link não recarrega a pagina mantendo a ideia de SPA

back + front => Inicia o back
instalar um cliente http para fazer as chamadas e obter respostas => npm install axios

exportar um arquivo com a rota principal a base:

import axios from 'axios';

const api = axios.create({
baseURL: 'http://localhost:3333'
});

export default api;
