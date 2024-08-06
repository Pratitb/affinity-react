import { FaReact } from 'react-icons/fa';
import './SideBarMenuItem.css';

function SideBarMenuItem({
	linkItem,
	linkId,
	activeSideLink,
	updateActiveLink,
}) {
	const LinkIcon = linkItem.icon ? linkItem.icon : FaReact;

	const handleSideLink = () => {
		updateActiveLink(linkId);
		console.log(linkId);
		console.log(activeSideLink);
	};
	// console.log(LinkIcon);
	return (
		<a
			key={linkItem.name}
			className={`sidebar_link ${linkItem.name} ${
				activeSideLink == linkId ? 'sidebar_active_link' : ''
			}`}
			onClick={handleSideLink}>
			<LinkIcon className="sidebar_icon" />
			<span className="link_text">{linkItem.name}</span>
		</a>
	);
}

export default SideBarMenuItem;
