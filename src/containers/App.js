import React, {Component} from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import { setSearchField, requestRobots } from '../actions'; 

const mapStateToProps = state => {
    console.log(state);
    return {
        searchField: state.searchField,
        robots: [],
        isPending: state.requestRobots.isPending
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {
    
    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        const { robots, searchField, onSearchChange, isPending } = this.props;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        if(this.state.robots.length === 0) {
            return <h1 className="tc">loading</h1>
        }
        else {
            return (
                <div className="tc">
                <h1 className="f1">Robo Friends</h1>   
                <SearchBox searchChange ={onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
                </div>
            );
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);