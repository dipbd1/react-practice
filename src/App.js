import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
    state = {
        persons: [
            { id: "asd", name: "Max", age: 28 },
            { id: "sdf", name: "Manu", age: 26 },
            { id: "dfg", name: "Linda", age: 21 },
        ],
        showPersons: false,
    };

    deletePersonHandler = (personsIndex) => {
        // const persons = this.state.persons;
        const persons = [...this.state.persons];
        persons.splice(personsIndex, 1);
        this.setState({ persons: persons });
    };

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {...this.state.persons[personIndex]};

        person.name = event.target.value;
        const persons  = [...this.state.persons]
        persons[personIndex] = person;

    

        this.setState({
            persons: persons
        });
    };
    togglePersonsHandler = () => {
        if (this.state.showPersons === false) {
            this.setState({ showPersons: true });
        } else {
            this.setState({ showPersons: false });
        }
    };

    render() {
        const style = {
            backgroundColor: "green",
            color: 'white',
            font: "inherit",
            border: "1px solid blue",
            padding: "8px",
            cursor: "pointer",
        };

        let persons = null;
        if (this.state.showPersons === true) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return (
                            <Person
                                click={() => this.deletePersonHandler(index)}
                                name={person.name}
                                age={person.age}
                                key={person.id}
                                changed= {(event)=>this.nameChangedHandler(event, person.id)}
                            />
                        );
                    })}
                </div>
            );
            style.backgroundColor = 'red'
        }

        const classes = [];
        if(this.state.persons.length <= 2){
            classes.push('red')
        }
        if(this.state.persons.length<= 1){
            classes.push('bold')
        }

        return (
            <div className="App">
                <h1>Hi, I am going to develop it!</h1>
                <p className = {classes.join(' ')}>It's getting fun here!!!</p>
                <button style={style} onClick={this.togglePersonsHandler}>
                    Toggle Persons
                </button>
                {persons}
            </div>
        );
        // return React.createElement('');
    }
}

export default App;
