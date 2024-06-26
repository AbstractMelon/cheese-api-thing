const { createClient } = require('pexels');

const client = createClient('BHxo1tt0UGQx8BUCVnebnUAvsS7yioCULjDKX80XEFSv99qhU1WDpx7k');
const query = 'Cheese';

module.exports = async (req, res) => {
    try {
        const page = Math.floor(Math.random() * 10) + 1; 
        const response = await client.photos.search({ query, per_page: 1, page });
        const photo = response.photos[0];

        if (photo) {
            res.status(200).json({ image: photo.src.original });
        } else {
            res.status(404).json({ error: 'No images found' });
        }
    } catch (error) {
        console.error('Error fetching cheese image:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
