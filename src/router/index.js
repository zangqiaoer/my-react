import React,{ Component } from "react";
import { Router,Route,Link,browserHistory,IndexRoute } from "react-router";
import { Provider } from "react-redux";
import store from "../store";
import {
	App,
	Counter,
	Welcome,
	Paging
} from "./components.js"
class Main extends Component{
	render(){
        let childs = React.Children.toArray(this.props.children);
		return (
			<div>{ childs }</div>
		)
	}
}

export default class ROOT extends Component{
	render(){
		return(
			<Provider store = { store }>
				<Router history={browserHistory}>
					<Route path="/" component = { Main }>
						<IndexRoute component = { App } />
						<Route path="counter" component = { Counter }></Route>
						<Route path="welcome" component = { Welcome }></Route>
					</Route>
				</Router>
			</Provider>
		);
	}
}