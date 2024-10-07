const express = require('express');
const http = require('http');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/api/comp1', (req, res) => {
    const options = {
        hostname: '13.201.49.61',
        port: 8020,
        path: '/api/v1/sample_assignment_api_1/',
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Basic dHJpYWw6YXNzaWdubWVudDEyMw==', // Base64 encoded credentials
        },
    };

    const request = http.request(options, (response) => {
        let data = '';

        response.on('data', (chunk) => {
            data += chunk;
        });

        response.on('end', () => {
            res.status(response.statusCode).json(JSON.parse(data));
        });
    });

    request.on('error', (error) => {
        console.error('Error fetching external data:', error);
        res.status(500).json({ message: 'Failed to fetch external data', error });
    });

    request.end();
});

app.get('/api/comp3', (req, res) => {
    const options = {
        hostname: '13.201.49.61',
        port: 8020,
        path: '/api/v1/sample_assignment_api_3/',
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Basic dHJpYWw6YXNzaWdubWVudDEyMw==', // Base64 encoded credentials
        },
    };

    const request = http.request(options, (response) => {
        let data = '';

        response.on('data', (chunk) => {
            data += chunk;
        });

        response.on('end', () => {
            res.status(response.statusCode).json(JSON.parse(data));
        });
    });

    request.on('error', (error) => {
        console.error('Error fetching external data:', error);
        res.status(500).json({ message: 'Failed to fetch external data', error });
    });

    request.end();
});

app.get('/api/comp5', (req, res) => {
    const options = {
        hostname: '13.201.49.61',
        port: 8020,
        path: '/api/v1/sample_assignment_api_5/',
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Basic dHJpYWw6YXNzaWdubWVudDEyMw==', // Base64 encoded credentials
        },
    };

    const request = http.request(options, (response) => {
        let data = '';

        response.on('data', (chunk) => {
            data += chunk;
        });

        response.on('end', () => {
            res.status(response.statusCode).json(JSON.parse(data));
        });
    });

    request.on('error', (error) => {
        console.error('Error fetching external data:', error);
        res.status(500).json({ message: 'Failed to fetch external data', error });
    });

    request.end();
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
