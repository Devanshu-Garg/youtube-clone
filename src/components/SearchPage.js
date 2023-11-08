import React from 'react'
import './SearchPage.css';
import ChannelRow from './ChannelRow.js'
import VideoRow from './VideoRow.js'
import TuneIcon from '@mui/icons-material/Tune';
function SearchPage() {
  return (
	<div className='searchPage'>
		<div className='searchPage__filter'>
			<TuneIcon/>
			<h2>FILTER</h2>
		</div>
		<hr/>
		<ChannelRow
		image="https://img.youtube.com/vi/zUwB_imVjmg/maxresdefault.jpg"
		channel="Developer DEV"
		verified
		subs="600K"
		noOfVideos={34}
		description="You can find awesome programmung lessons here! Also, expect programming tips and tricks that will take your coding skills to......"
		/>
		<hr/>
		<VideoRow
		title="How to change into extrovert in 10 mins"
        channel="Developer DEV"
        image="https://img.youtube.com/vi/zUwB_imVjmg/maxresdefault.jpg"
        views="2.3M views"
        timestamp="5 years ago"
        subs="600K"
		description="You can find awesome programmung lessons here! Also, expect programming tips and tricks that will take your coding skills to......"
		/>
	</div>
  )
}

export default SearchPage