const API_URL = "http://localhost:8080/api/usuarios";

export const libroService = {
    // Buscar livros do banco
    // Async is necessary, because without It, It would freeze when someone would search things there, because two things would be happening at the same time, an user visiting the site, and an user executing some function which could freeze the app of someone else because two or more things would be running at the same time
    buscarTodos: async () => {
        const resposta = await fetch(API_URL);
        //        //The raw network resposta isn't a usable list yet; it's raw text stream data. .json() converts that stream into a live JavaScript Array (list) of objects. We return it out of the function.
        return await resposta.json();
    },

    // Enviar dados editados para o banco
    editarLivro: async (id, dadosAtualizados) => {
        // fetch() sends an HTTP network request to your Java API URL. 
        // The await keyword pauses execution inside this function until the backend server replies.
        const resposta = await fetch(`${API_URL}/${id}`, {
            //Sends a request to a specific sub-URL, like http://localhost:8080/api/livros/3. The backticks (`) and ${} are used for string interpolation. The second parameter { ... } is a configuration object where we describe our request payload.
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dadosAtualizados)
        });

        //return await resposta.json();
        return await resposta.json();
    },

    criarLivro: async (dados) => {
        const resposta = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        })
        return await resposta.json();
    },

    // Remover um livro do banco
    //Defines our second async function key, which accepts two parameters: the id of the book we want to change, and the object containing the new fields (dadosAtualizados)
    //
    deletarLivro: async (id) => {
        await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });
    }
};