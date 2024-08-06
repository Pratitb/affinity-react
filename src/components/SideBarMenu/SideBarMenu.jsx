import { useState } from 'react';
import SideBarMenuItem from '../SideBarMenuItem/SideBarMenuItem';
import SideBarLogo from '../SideBarLogo/SideBarLogo';
import './SideBarMenu.css';

function SideBarMenu({ linksObj }) {
	const [activeSideLink, setActiveSideLink] = useState('loans');
	const updateActiveLink = (newId) => {
		setActiveSideLink(newId);
	};

	return (
		<div className="sidebar_menu">
			{/* logo */}
			<SideBarLogo />
			{/* links */}
			<div className="sidebar_links">
				{linksObj.map((link) => {
					// console.log(link.name);
					return (
						<SideBarMenuItem
							key={link.name}
							linkItem={link}
							linkId={link.name}
							activeSideLink={activeSideLink}
							updateActiveLink={updateActiveLink}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default SideBarMenu;
