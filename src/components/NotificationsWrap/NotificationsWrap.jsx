import { useEffect, useRef, useState } from 'react';
import NotificationsMenu from '../NotificationsMenu/NotificationsMenu';
import './NotificationsWrap.css';
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
	}, []);
	// --------------------------------------------------------------------------------------------

	return (
		<div className="notification_wrap">
			{/* NOTIFICATION ICON */}
			<FaRegBell
				className={`header_notification ${
					showNotifications ? 'header_notification_active' : ''
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
