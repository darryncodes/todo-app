const getAllTodos = (req, res) => {
    res.send('get all todos');
};
const createTodo = (req, res) => {
    res.json(req.body);
};
const getTodo = (req, res) => {
    res.json({ id: req.params.id });
};
const updateTodo = (req, res) => {
    res.send('update todo');
};
const deleteTodo = (req, res) => {
    res.send('delete todo');
};

export { getAllTodos, createTodo, getTodo, updateTodo, deleteTodo };
