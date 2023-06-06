import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

class MyComponent extends React.Component {

    state = {
        arrJobs: [
            { id: 'abcjob1', title: 'Developer', salary: '500'},
            { id: 'abcjob2', title: 'Tester', salary: '400'},
            { id: 'abcjob3', title: 'Project Manager', salary: '1000'}
        ]
    }

    addNewJob = (job) => {
        console.log('check job from parent: ', job)
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    render() {
        console.log('>>> call render: ', this.state)
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />
                

                <ChildComponent 
                    arrJobs={this.state.arrJobs}
                />

            </>
        )
    } 
}


export default MyComponent;
