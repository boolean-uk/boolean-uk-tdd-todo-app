# Test-Driven Development

## Todo App

### Learning Objectives

- Use a test framework to help test code
- Use the Red Green Refactor loop to develop code
- Test-drive a program with multiple functions with unit tests

### Quickstart

1. Fork this repository
2. Clone your fork to your local machine (example command below, see note)
3. Install project dependencies

```sh
git clone git@github.com:[username]/tdd-todoList.git && cd tdd-todoList
npm ci # to install dependencies
```

### Instructions

1. Create a domain model based on the requirements outlined below. Add your domain model to the repository, either in the domain-model.md file or as a screenshot or URL
2. Implement the below requirements by following a test-driven development process.
3. The `src/todolist.js` file is where you should write your source code.
4. An initial spec file is provided in `spec/todolist.spec.js`. You should add your tests to this file.
5. For each requirement below, write a single test and pass it by writing source code. Repeat until you have implemented all requirements, following the Red Green Refactor approach.

### Requirements

You should be able to run this in your JS console (using your node REPL, or browser console). For any assumptions made, represent this in your domain model.

- Create a todo item that has an ID, text description, and starts off incomplete
- Get all todo items
- Set a todo completed by its ID
- Get only todo items that are incomplete
- Get only todo items that are complete
- Search and return a todo item by its ID, or return a message saying it doesn’t exist
- Remove a todo item by its ID

#### Example interactions (class version)

```sh
$ node
> const TodoList = require('./src/todolist.js')
undefined

> const todoList = new TodoList()
> todoList.create("Do the laundry")
{id: 1, text: "Do the laundry", status: "incomplete"}

> todoList.create("Make the bed")
{id: 2, text: "Make the bed", status: "incomplete"}

> todoList.setComplete(2)
{id: 2, text: "Make the bed", status: "complete"}

> todoList.setComplete(3)
"Todo item not found"

> todoList.getAll()
[{id: 1, text: "do laundry", status: "incomplete"}, {id: 2, text: "make the bed", status: "complete"}]
```

#### Example interactions (function version)

```sh
$ node
> const { create, setComplete, getAll } = require('./src/todolist.js')
undefined

> create("Do the laundry")
{id: 1, text: "Do the laundry", status: "incomplete"}

> create("Make the bed")
{id: 2, text: "Make the bed", status: "incomplete"}

> setComplete(2)
{id: 2, text: "Make the bed", status: "complete"}

> setComplete(3)
"Todo item not found"

> getAll()
[{id: 1, text: "do laundry", status: "incomplete"}, {id: 2, text: "make the bed", status: "complete"}]
```

#### Further work

- Instead of the TodoList creating plain old JavaScript objects (POJO), have it create instances of a `TodoItem` class
- Create a user interface for this application (this could be a simple command line interface, or you could create a graphical user interface)
