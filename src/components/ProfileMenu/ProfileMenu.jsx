import Accordion from '../Accordion/Accordion';
import './ProfileMenu.scss';

function ProfileMenu({ innerRef }) {
	const accordions = [
		{
			head: 'accordion',
			content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quo nihil
				quidem! Esse, eligendi reiciendis. Fuga maxime eveniet voluptates aut?`,
		},
		/* {
			head: 'accordion 1',
			content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quo nihil
				quidem! Esse, eligendi reiciendis. Fuga maxime eveniet voluptates aut?`,
		},
		{
			head: 'accordion 1',
			content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quo nihil
				quidem! Esse, eligendi reiciendis. Fuga maxime eveniet voluptates aut?`,
		}, */
	];
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
				{accordions.map((accordion) => {
					return (
						<Accordion
							accordion_head={accordion.head}
							accordion_content={accordion.content}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default ProfileMenu;
