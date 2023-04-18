import {Link} from 'react-router-dom'

function Navbar(){
	return(
		<div>
			<Link to="/">Home</Link>
			<Link to="/logout">Logout</Link>
			<Link to="/todo">Todo</Link>
		</div>
	)
}
export default Navbar