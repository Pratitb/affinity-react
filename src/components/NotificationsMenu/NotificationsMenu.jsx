import './NotificationsMenu.css';

function NotificationsMenu({ innerRef, hideNotifications, notificationData }) {
	return (
		<div className="notification_menu" ref={innerRef}>
			{/* NOTIFICATION HEADS */}
			<div className="n_menu_top">
				<p className="n_menu_head">Notifications</p>
				<p className="n_cross" onClick={hideNotifications}>
					&#215;
				</p>
			</div>
			{/* NOTIFICATION CARDS */}
			<div className="n_cards">
				{notificationData.map((notification, index) => {
					return (
						<div key={index} className="n_card">
							<div className="n_content">
								<p className="n_content_head">{notification.head}</p>
								<p className="n_content_desc">{notification.desc}</p>
							</div>
							<p className="n_time">1d ago</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default NotificationsMenu;
