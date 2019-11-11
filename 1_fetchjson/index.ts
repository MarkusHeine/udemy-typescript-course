import axios from "axios"

const url = "http://jsonplaceholder.typicode.com/todos/1"

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(resp => {
    const toDo = resp.data as Todo;

    const id = toDo.id;
    const title = toDo.title;
    const completed = toDo.completed;

    logToDo(id, title, completed)
})

const logToDo = (id: number, title: string, completed:boolean) => {
    console.log(`
        The todo with the Id ${id}
        has the title of ${title}.
        If finished? ${completed}
    `)
}