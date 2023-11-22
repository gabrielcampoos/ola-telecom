import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import Estrutura1 from '../../../../assets/images/estrutura1.jpg';
import Estrutura2 from '../../../../assets/images/estrutura2.jpg';
import Estrutura3 from '../../../../assets/images/estrutura3.jpg';
import Estrutura4 from '../../../../assets/images/estrutura4.jpg';
import Estrutura5 from '../../../../assets/images/estrutura5.jpg';

function srcset(
	image: string,
	width: number,
	height: number,
	rows = 1,
	cols = 1,
) {
	return {
		src: `${image}?w=${width * cols}&h=${
			height * rows
		}&fit=crop&auto=format`,
		srcSet: `${image}?w=${width * cols}&h=${
			height * rows
		}&fit=crop&auto=format&dpr=2 2x`,
	};
}

export default function ListaImagens() {
	return (
		<ImageList
			sx={{
				width: '100%',
				// height: '100%',
				// Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
				transform: 'translateZ(0)',
			}}
			// rowHeight={200}
			gap={1}
		>
			{itemData.map((item) => {
				const cols = item.featured ? 2 : 1;
				const rows = item.featured ? 2 : 1;

				return (
					<ImageListItem key={item.img} cols={cols} rows={rows}>
						<img
							{...srcset(item.img, rows, cols)}
							loading="lazy"
							width="100%"
							// height="100%"
						/>
						<ImageListItemBar
							sx={{
								background:
									'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
									'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
							}}
							position="top"
							// actionIcon={
							// 	<IconButton sx={{ color: 'white' }}>
							// 		<StarBorderIcon />
							// 	</IconButton>
							// }
							actionPosition="left"
						/>
					</ImageListItem>
				);
			})}
		</ImageList>
	);
}

const itemData = [
	{
		img: `${Estrutura1}`,
		featured: true,
	},
	{
		img: `${Estrutura2}`,
		featured: true,
	},
	{
		img: `${Estrutura3}`,
		featured: true,
	},
	{
		img: `${Estrutura4}`,
		featured: true,
	},
	{
		img: `${Estrutura5}`,
		featured: true,
	},
	// {
	// 	img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
	// 	title: 'Honey',
	// 	author: '@arwinneil',
	// 	featured: true,
	// },
	// {
	// 	img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
	// 	title: 'Basketball',
	// 	author: '@tjdragotta',
	// },
	// {
	// 	img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
	// 	title: 'Fern',
	// 	author: '@katie_wasserman',
	// },
	// {
	// 	img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
	// 	title: 'Mushrooms',
	// 	author: '@silverdalex',
	// },
	// {
	// 	img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
	// 	title: 'Tomato basil',
	// 	author: '@shelleypauls',
	// },
	// {
	// 	img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
	// 	title: 'Sea star',
	// 	author: '@peterlaster',
	// },
	// {
	// 	img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
	// 	title: 'Bike',
	// 	author: '@southside_customs',
	// },
];
