import express from "express";

const app = express();

app.use(express.json())

const employees = [
    {
        "name": "maria da silva",
        "cpf": "12312312312",
        "office": "gerente",
        "birthday": "21-04-2021"
    }
]

app.get('/', (req, res) => {
    res.status(200).send('Curso de node');
})

app.get('/api/v1/employee', (req, res) => {
    res.status(200).json(employees);
})

app.get('/api/v1/employee/:employee_id', (req, res) => {
    let index = searchEmployee(req.params.employee_id);
    res.json(employees[index]);
})

app.post('/api/v1/employee', (req, res) => {
    employees.push(req.body);
    res.status(201).send('Funcionário cadastrado com sucesso')
})

app.put('/api/v1/employee/:employee_id', (req, res) => {
    let index = searchEmployee(req.params.employee_id);
    employees[index].name = req.body.name;
    res.json(employees);
})

app.delete('/api/v1/employee/:employee_id', (req, res) => {
    let {employee_id} = req.params;
    let index = searchEmployee(employee_id);
    employees.splice(index, 1);
    res.send(`Employee ${employee_id} successfully removed`);
});


function searchEmployee(employee_id) {
    return employees.findIndex(employee => employee.employee_id == employee_id)
    }



export default app;