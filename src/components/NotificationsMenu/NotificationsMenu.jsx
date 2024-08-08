import './NotificationsMenu.scss';

function NotificationsMenu({ innerRef, hideNotifications, notificationData }) {
	return (
		<div className="n_box" ref={innerRef}>
			{/* NOTIFICATION HEADS */}
			<div className="n_box_top">
				<p className="n_box_head">Notifications</p>
				<p className="n_box_cross" onClick={hideNotifications}>
					&#215;
				</p>
			</div>
			{/* NOTIFICATION CARDS */}
			<div className="n_cards">
				{notificationData.map((notification, index) => {
					return (
						<div key={index} className="n_card">
							<div className="n_card_content">
								<p className="n_card_head">{notification.head}</p>
								<p className="n_card_desc">{notification.desc}</p>
							</div>
							<p className="n_card_time">1d ago</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default NotificationsMenu;
