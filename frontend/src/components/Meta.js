import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords, author }) => {
	return (
		<>
			<Helmet>
				<title>{title}</title>
				<meta name='description' content={description} />
				<meta name='keywords' content={keywords} />
				<meta name='author' content={author} />
			</Helmet>
		</>
	)
}

Meta.defaultProps = {
	title: 'Bliss | Home',
	description: 'Schedule beauty appointments with Bliss',
	keywords: 'beauty, makeup, hair, nails, appointments',
	author: 'Bliss',
}

export default Meta
