const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const fs = require('fs');
const mongoose = require('mongoose');
const { api_key } = require('./creds');

app.use(express.static(path.join(__dirname, 'build')));
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 80;

mongoose.set('strictQuery', true);
mongoose.connect("mongodb://127.0.0.1:27017/pixly", {}).then(() => {
    console.log('MongoDB connection established!');
}).catch((err) => {
    console.log(err);
});

app.use((req, res, next) => {
    if (req.path.includes('/api/')) {

        if (req.path.endsWith('/api/')) {
            next();
        } else if (req.query.key == api_key) {
            next();
        } else {
            res.status(401).send({
                error: 'Unauthorized'
            });
        }
    } else {
        next();
    }

});

const routesData = {}

const routes = ['GET', 'POST'];
routes.forEach(method => {
    routesData[method] = {};
    const routePath = path.join(__dirname, './api', method);
    if (fs.existsSync(routePath)) {
        fs.readdirSync(routePath).forEach(file => {
            let filePath = path.resolve(routePath, file);
            let routeModule = require(filePath);

            if (typeof routeModule.setupRoutes === 'function') {
                routeModule.setupRoutes(app);
                console.log(`Loaded ${filePath}`);
                routesData[method][routeModule.endpointData.path] = routeModule.endpointData;

            } else {
                console.error(`Module at ${filePath} does not export a setupRoutes function`);
            }
        });
    } else {
        console.error(`Route directory for method ${method} not found`);
    }
});


fs.writeFileSync(path.join(__dirname, 'build', 'output-docs.json'), JSON.stringify(routesData));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});