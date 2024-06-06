/** @format */
import share from '../images/share-06-svgrepo-com.svg'
import Pagination from './Pagination'
import Share from './Share'
function NewsCard({ item, authors }) {
	const arrayNumbers = new Array(13).fill(1)

	const authorId = item.author_id
	const authorName = authors[0].find((x) => x.id === authorId).name
	const date = new Date(item.created_at)
	const month = date
		.toLocaleString('default', {
			month: 'short',
		})
		.toLocaleUpperCase()
	const day = date.getDate()
	return (
		<div className='card'>
			<div className='card-img-container'>
				<img
					src={item.image_url}
					alt='news'
				/>
				<div className='date-banner-container'>
					<h1> {day}</h1>
					<h3 className='month'>{month}</h3>
					<div className='triangle-container'>
						<div className='triangle'></div>
					</div>
				</div>
				<div className='share'>
					<Share /> SHARE
				</div>
			</div>

			<div className='title-container'>
				<h3 className='name'>{authorName}</h3>
				<h1>{item.title}</h1>
			</div>
			<p className='fw-500'>{item.body}</p>
			<a
				className='fw-500'
				href='/'>
				READ ARTICLE
			</a>
			<div class='pagination'>
				<a
					className='prev'
					href='/'>
					<p>{'<'}</p>
				</a>
				{arrayNumbers.map((_, i) => (
					<Pagination number={1 + i} />
				))}
				<a href='/'>
					<p>{'>'}</p>{' '}
				</a>
			</div>
		</div>
	)
}

export default NewsCard
