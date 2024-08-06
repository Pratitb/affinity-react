import './ProfileMenu.css';

function ProfileMenu({ innerRef }) {
	return (
		<div className="profile_menu" ref={innerRef}>
			<div className="profile_details">
				<img
					src="https://dummyimage.com/48x48/85a9b2/fff"
					alt=""
					className="profile_image"
				/>
				<div className="profile_name_contact">
					<p className="profile_name">sample name</p>
					<div className="profile_contacts">
						<a href="tel:+">987654321</a>
						<div className="contacts_separation_line"></div>
						<a href="mailto:">test@test.com</a>
					</div>
				</div>
			</div>

			<div className="profile_links">
				<a>menu 1</a>
				<a>menu 1</a>
				<a>menu 1</a>
				<a>menu 1</a>
			</div>
		</div>
	);
}

export default ProfileMenu;
