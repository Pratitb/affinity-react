import { useEffect, useRef, useState } from 'react';
import NotificationsMenu from '../NotificationsMenu/NotificationsMenu';
import './NotificationsWrap.scss';
import { FaRegBell } from 'react-icons/fa';

function NotificationsWrap({ notifications }) {
	// USE STATE -----------------------------------------------------------
	const [showNotifications, setNotifications] = useState(false);
	const toggleNotifications = () => {
		setNotifications(!showNotifications);
	};

	// USE REF -----------------------------------------------------------
	const notificationRef = useRef(null);
	const handleClickOutside = (event) => {
		if (
			notificationRef.current &&
			!notificationRef.current.contains(event.target)
		) {
			setNotifications(false);
		}
	};

	// USE EFFECT -----------------------------------------------------------
	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, ['']);
	// --------------------------------------------------------------------------------------------

	return (
		<div className="notification">
			{/* NOTIFICATION ICON */}
			<FaRegBell
				className={`notification_icon ${
					showNotifications ? 'notification_icon_active' : ''
				}`}
				onClick={toggleNotifications}
			/>
			{/* NOTIFICATION BOX */}
			{showNotifications && (
				<NotificationsMenu
					innerRef={notificationRef}
					hideNotifications={toggleNotifications}
					notificationData={notifications}
				/>
			)}
		</div>
	);
}
// --------------------------------------------------------------------------------------------

export default NotificationsWrap;
