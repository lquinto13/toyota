/** @format */

import './App.css'
import NewsCard from './components/NewsCard'
import image1 from './images/tmsph-ls-midafood.jpeg'
import image2 from './images/tmsph-launches-toyota-rentacar.webp'
import image3 from './images/tmp-lalamove-partnership.webp'
import Header from './components/Header'

const News = [
	{
		id: 1,
		author_id: 1,
		title:
			'Toyota Mobility Solutions PH empowers seafood wholesaler Mida Food with digital logistics platform',
		body: "Logistics Platform addresses limitations in Mida Food's delivery operations",
		image_url: image1,
		created_at: '2023-01-13 12:30:00',
	},
	{
		id: 2,
		author_id: 2,
		title: 'TMSPH launches Toyota Rent&#x3B1;Car',
		body: 'Toyota Mobility Solutions Philippines, Inc. (TMSPH) marked another milestone in its first year of operations with the introduction of its new and exciting car rental service, the Toyota Rent&#x3B1;Car. This service provides affordable and secure transportation through its convenient and flexible car rental options – both for short-term and long-term use.',
		image_url: image2,
		created_at: '2023-05-17 22:29:10',
	},
	{
		id: 3,
		author_id: 1,
		title: 'Toyota Motor Philippines partners with Lalamove Automotive',
		body: "Leading mobility company Toyota Motor Philippines (TMP) has partnered with leading logistics provider Lalamove through its auto brand, Lalamove Automotive, with the introduction of the commercial vehicle Toyota Lite Ace as a transport partner. Aspiring and existing Lalamove operators are now able to purchase the Lite Ace Panel Van variant through this partnership, under Lalamove Automotive's Vehicle Ownership Program.",
		image_url: image3,
		created_at: '2023-07-05 02:15:01',
	},
]

const Authors = [
	{
		id: 1,
		name: 'Darwin Tumaneng',
		role: 'Logistics Digitalization Services Unit Representative',
		place: 'Metro Manila, Philippine',
		avatar_url: 'tmsph-logo.jpg',
	},
	{
		id: 2,
		name: 'Miguel Tianzon',
		role: 'Car Rental Business Representative',
		place: 'Metro Manila, Philippine',
		avatar_url: 'tmsph-logo.jpg',
	},
]

function App() {
	return (
		<div className='App'>
			<div className='card-container'>
				<Header />
				{News.map((item) => (
					<NewsCard
						item={item}
						authors={[Authors]}
					/>
				))}
			</div>
		</div>
	)
}

export default App
