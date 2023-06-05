import React from 'react';
import ChildComponent from './ChildComponent';

class MyComponent extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        arrJobs: [
            { id: 'abcjob1', title: 'Developer', salary: '$500'},
            { id: 'abcjob2', title: 'Tester', salary: '$400'},
            { id: 'abcjob3', title: 'Project Manager', salary: '$1000'}
        ]
    }

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }

    render() {
        console.log('>>> call render: ', this.state)
        return (
            <>
                <form>
                    <label htmlFor='fname'>First name</label><br/>
                    <input 
                        type='text' 
                        value={this.state.firstName} 
                        onChange={ (event) => this.handleChangeFirstName(event) }
                    /><br/>
                    <label htmlFor='lname'>Last name</label><br/>
                    <input 
                        type='text' 
                        value={this.state.lastName}
                        onChange={ (event) => this.handleChangeLastName(event) }
                    /><br/>
                    <input type='submit' onClick={ (event) => this.handleSubmit(event) }/>
                </form>

                <ChildComponent 
                    name={this.state.firstName}
                    age={'25'}
                    address={'TPHCM'}
                    arrJobs={this.state.arrJobs}
                />

            </>
        )
    } 
}


export default MyComponent;
