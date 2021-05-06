import react from "react";
import {Link} from 'react-router-dom'


const navlinks = [
	{
		title: 'home',
		path: '/'
	},
	{
		title: "Blog",
		path: "/blog"
	},
	{
		title: "ContactUS",
		path: "/contact-us"
	},
	{
		title: "Login",
		path: "/login"
	},
];
export default function Navigation() {
	return (
		<nav className="site-navigation">
			<span> My Blog Node.js </span>
				<ul>
					{navlinks.map((link, index) => (
						<li key={index}>
                        <Link to={link.path}>{link.title}</Link>
                        </li>
					))}
				</ul>
			
		</nav>
	)
}
