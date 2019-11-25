import { generateID } from '../utils';

class TodoService {
  _apiURL = 'https://jsonplaceholder.typicode.com/todos';

  async getTodoItems(url = this._apiURL) {
    const res = await fetch(url);
    const body = await res.json();
    return this._transformTodoItems(body);
  }

  _transformTodoItems(items) {
    return items
      .filter(item => item.title.length < 20)
      .slice(0, 7)
      .map(item => {
        return {
          id: generateID(),
          description: item.title,
          done: item.completed,
          important: false
        };
      });
  }
}

export default TodoService;
