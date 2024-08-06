import './Header.css';
import Settings from '../Settings/Settings';
import NotificationsWrap from '../NotificationsWrap/NotificationsWrap';
import UserProfile from '../UserProfile/UserProfile';
import Search from '../Search/Search';

function Header({ header_name, filterTableData }) {
	const NotificationData = [
		{
			head: 'lorem ipsum',
			desc: 'lorem ipsum',
		},
		{
			head: 'lorem ipsum',
			desc: 'lorem ipsum',
		},
		{
			head: 'lorem ipsum',
			desc: 'lorem ipsum',
		},
		{
			head: 'lorem ipsum',
			desc: 'lorem ipsum',
		},
		{
			head: 'lorem ipsum',
			desc: 'lorem ipsum',
		},
		{
			head: 'lorem ipsum',
			desc: 'lorem ipsum',
		},
		{
			head: 'lorem ipsum',
			desc: 'lorem ipsum',
		},
		{
			head: 'lorem ipsum',
			desc: 'lorem ipsum',
		},
		{
			head: 'lorem ipsum',
			desc: 'lorem ipsum',
		},
		{
			head: 'lorem ipsum',
			desc: 'lorem ipsum',
		},
	];
	return (
		<div className="header">
			<p className="header_name">{header_name}</p>
			<div className="settings_wrap">
				<Search filterTableData={filterTableData} />
				<Settings />
				<NotificationsWrap notifications={NotificationData} />
				<UserProfile />
			</div>
		</div>
	);
}

export default Header;
