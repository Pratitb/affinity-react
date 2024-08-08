import './UserProfile.scss';
import { useEffect, useRef, useState } from 'react';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import './UserProfile.css';

import { FaRegUser } from 'react-icons/fa';

function UserProfile() {
	// USE STATE --------------------------------------------------
	const [showProfile, setProfile] = useState(false);
	const handleProfile = () => {
		setProfile(!showProfile);
	};

	// USE REF --------------------------------------------------
	const profileMenuRef = useRef(null);
	const handleClickProfile = (event) => {
		if (
			profileMenuRef.current &&
			!profileMenuRef.current.contains(event.target)
		) {
			setProfile(false);
		}
	};

	// USE EFFECT --------------------------------------------------
	useEffect(() => {
		document.addEventListener('mousedown', handleClickProfile);
		return () => {
			document.removeEventListener('mousedown', handleClickProfile);
		};
	}, []);

	return (
		<div className="profile">
			<FaRegUser className="profile_icon" onClick={handleProfile} />
			{showProfile && <ProfileMenu innerRef={profileMenuRef} />}
		</div>
	);
}

export default UserProfile;
