import React from 'react'
import "./Sidebar.css";
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import SidebarRow from './SidebarRow'
function Sidebar() {
  return (
	<div className='Sidebar'>
		<SidebarRow Icon={HomeIcon}  title='Home'/>
		<SidebarRow Icon={WhatshotIcon} title='Trending'/>
		<SidebarRow Icon={SubscriptionsIcon} title='Subscription'/>
	</div>
  )
}

export default Sidebar