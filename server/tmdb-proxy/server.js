require('dotenv').config({ path: './api.env' });
const cors = require('cors');
const express = require('express');
const { get } = require('axios');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;


app.get('/api/movies', async (req, res) => {
    try {
        const response = await get(`https://api.themoviedb.org/3/movie/now_playing`, {
            params: {
                api_key: process.env.TMDB_API_KEY,
                language: 'en-US',
                page: 1
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data from TMDb');
    }
});

app.get('/api/upcoming', async (req, res)=>
{
    try{
        const response = await get(`https://api.themoviedb.org/3/movie/upcoming`, {
            params: {
                api_key: process.env.TMDB_API_KEY,
                language: 'en-US',
                page : 1
            }
    });
            res.json(response.data);
            
} catch(error)
    {
        console.error(error);
        res.status(500).send('Error fetching data from TMDb');
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
console.log(process.env.TMDB_API_KEY);


