import { h } from 'preact';
import { Link } from 'preact-router/match';
import Filters from '../filters';
import Pill from '../pill';
import SocialLinks from '../socialLinks';
import profilePic from '../../assets/profile_drawing.png';
import style from './style';

const Sidebar = props => (
	<div class={style['sidebar-container']}>
		<div class={style.sidebar}>
			<img
				src={profilePic}
				class={style['profile-pic']}
				alt="Hi, my name's Jenny, and I like making things."
			/>
			<header>
				<h1>Hi, I'm Jenny.</h1>
				<h3>Fledgling data scientist, occasional doodler, hobbyist developer &amp; <span class="no-wrap">dog lover.</span></h3>
			</header>
			<nav>
				<Link activeClassName={style.active} href="/">
					<Pill text="home" />
				</Link>
				<Link activeClassName={style.active} href="/about">
					<Pill text="i" className="pill-about" />
				</Link>
				<Filters onFilter={props.onFilter} />
			</nav>
			<SocialLinks />
		</div>
	</div>
);

export default Sidebar;
