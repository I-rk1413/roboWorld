import React,{Component } from 'react';
import {connect } from 'react-redux';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import './App.css';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ComponentErrorBoundary';
import {setSearchField,requestRobots} from '../actions';


const mapStateToProps=(state)=>
{
    return {
        SearchInput: state.searchRobots.SearchInput,
        robots:state.requestRobots.robots,
        isPending:state.requestRobots.isPending,
        error:state.requestRobots.error
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
     SearchInputChange:(event)=>dispatch(setSearchField(event.target.value)),
     onRequestRobots:()=>dispatch(requestRobots())
    }
}



class App extends Component {

componentDidMount(){
    this.props.onRequestRobots();
    
}
render(){
        const filteredRobot=this.props.robots.filter(item=>{
        return item.name.toLowerCase().includes(this.props.SearchInput.toLowerCase())})


        return this.props.isPending?<h1 className='tc'>Loading</h1>:
        (
            <div className='tc'>
            <h1 className="f1">RoboFriends</h1>
            <SearchBox SearchInputChange={this.props.SearchInputChange}/>
            <Scroll>
            <ErrorBoundary>
            <CardList robots={filteredRobot}/>
            </ErrorBoundary>
            </Scroll>
            </div>
          );
    
}}

export default connect(mapStateToProps,mapDispatchToProps)(App);