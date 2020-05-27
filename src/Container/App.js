import React,{Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import './App.css';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ComponentErrorBoundary'

class App extends Component {
constructor(){
    super();
    this.state={
        robots: [],
        SearchInput: ''
    }
}

SearchInputChange=(event)=>{
  this.setState({SearchInput: event.target.value})
}

componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(Response=>
        Response.json()
    ).then(users=>
        this.setState({robots: users}))
    
}



    render(){
        const filteredRobot=this.state.robots.filter(item=>{
        return item.name.toLowerCase().includes(this.state.SearchInput.toLowerCase())})


        return(
            <div className='tc'>
            <h1 className="f1">RoboFriends</h1>
            <SearchBox SearchInputChange={this.SearchInputChange}/>
            <Scroll>
            <ErrorBoundary>
            <CardList robots={filteredRobot}/>
            </ErrorBoundary>
            </Scroll>
            </div>
          );
    
}}

export default App;