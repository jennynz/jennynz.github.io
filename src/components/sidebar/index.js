import { h } from 'preact';
// import { Link } from 'preact-router/match';
import Filters from '../filters';
import Pill from '../pill';
import SocialLinks from '../socialLinks';
import profilePic from '../../assets/profile_drawing.png';
import style from './style';

const Sidebar = props => {
	return (
		<div class={style['sidebar-container']}>
			<div class={style.sidebar}>
				<img
					src={profilePic}
					class={style['profile-pic']}
					alt="Hi, my name's Jenny, and I like making things."
				/>
				<header>
					<h1>Hi, I'm Jenny.</h1>
					<h3>I like front-end development, data, doodling &amp; dogs.</h3>
				</header>
				<nav>
					{/* <Link activeClassName={style.active} href="/">
						Home
					</Link>
					<Link activeClassName={style.active} href="/about">
						About
					</Link> */}
					<Pill text="Home" />
					<Pill
						text="i"
						className="pill-about"
						color="dark-blue"
						onClick={props.handleNavigation}
					/>
				</nav>
				<Filters onClick={props.handleFilter} />
				<SocialLinks />
			</div>
		</div>
	);
};

export default Sidebar;
