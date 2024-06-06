/** @format */

function Pagination({ number }) {
	const lessThanArray = []
	const greaterThanArray = []
	const currentPage = 11
	let totalPage = 57

	function greaterThanCur() {
		let tempPage = currentPage
		for (let i = 0; greaterThanArray.length < 3; i++) {
			greaterThanArray.splice(i, 0, ++tempPage)
		}
		return greaterThanArray
	}
	function lessThanCur() {
		let tempPage = currentPage
		for (let i = 0; lessThanArray.length < 3; i++) {
			lessThanArray.push(--tempPage)
		}
		return lessThanArray.reverse()
	}
	lessThanCur()
	greaterThanCur()

	return (
		<a
			className={number === 7 ? 'active' : ''}
			href='/'>
			<p>
				{number === 13
					? totalPage
					: number === 12
					? totalPage - 1
					: number < 3
					? number
					: number >= 4 && number < 7
					? lessThanArray[number - 4]
					: number > 7 && number <= 10
					? greaterThanArray[number - 8]
					: number >= 4 && number <= 10
					? currentPage
					: '...'}
			</p>
		</a>
	)
}

export default Pagination
