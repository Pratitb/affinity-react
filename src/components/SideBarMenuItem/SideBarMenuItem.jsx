import { FaReact } from 'react-icons/fa';
import './SideBarMenuItem.scss';

function SideBarMenuItem({
	linkItem,
	linkId,
	activeSideLink,
	updateActiveLink,
}) {
	const LinkIcon = linkItem.icon ? linkItem.icon : FaReact;

	const handleSideLink = () => {
		updateActiveLink(linkId);
	};
	return (
		<a
			key={linkItem.name}
			className={`sidebar_link ${linkItem.name} ${
				activeSideLink == linkId ? 'sidebar_active_link' : ''
			}`}
			onClick={handleSideLink}>
			<LinkIcon className="sidebar_icon" />
			<span className="sidebar_link_text">{linkItem.name}</span>
		</a>
	);
}

export default SideBarMenuItem;
