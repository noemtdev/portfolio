const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const fs = require('fs');
const mongoose = require('mongoose');
const apiKey = require('./models/key');

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


function getKeys() {
    return apiKey.find({}).exec();
}

function getKey(key) {
    return apiKey.findOne({ key: key }).exec();
}

app.use((req, res, next) => {
    if (req.path.includes('/api/')) {
        getKeys()
            .then(keys => {
                if (req.path.endsWith('/api/')) {
                    next();
                } else if (keys.some(keyObj => keyObj.key === req.query.key)) {
                    apiKey.incrementUsesBy1(req.query.key);
                    next();
                } else {
                    res.status(401).send({ error: 'Unauthorized' });
                }
            })
            .catch(err => {
                res.status(500).send({ error: 'An error occurred while querying the database' });
            });
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

app.get('/api/stats', (req, res) => {
    const key = req.query.key;
    if (!key) {
        res.status(400).send({ error: 'No key provided' });
    }

    getKey(key)
        .then(keyObj => {
            if (!keyObj) {
                res.status(404).send({ error: 'Key not found' });
            } else {
                res.send({ uses: keyObj.uses, discord: JSON.stringify(keyObj.discord), key: keyObj.key});
            }
        })
        .catch(err => {
            res.status(500).send({ error: 'An error occurred while querying the database' });
        });

});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});