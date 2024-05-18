const { admin } = require('../../creds');
const apiKey = require('../../models/key');

module.exports = {
    setupRoutes: function(app) {
        app.post('/api/add-key/:discord_id/:admin_key', (req, res) => {
            if (req.params.admin_key === admin) {
                apiKey.findOne({ discord: req.params.discord_id }).exec().then((key) => {
                    if (key) {
                        res.status(200).send({
                            success: false,
                            error: 'Key already exists for this user.',
                            key: key.key
                        });
                    }
                    else {
                        const api_key_string = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
                        const key = new apiKey({
                            key: api_key_string,
                            discord: req.params.discord_id,
                            uses: 0
                        });
        
                        key.save().then(() => {
                            res.status(200).send({
                                success: true,
                                key: api_key_string
                            });
                        }).catch((err) => {
                            res.status(500).send({
                                error: err
                            });
                        });
                    } 
                }).catch((err) => {
                    res.status(500).send({
                        error: err
                    });
                });
            }
            else {
                res.status(401).send({
                    error: 'Unauthorized'
                });
            }
        });
    },
    endpointData: {
        path: '/api/add-key/:discord-id/:admin-key',
        method: 'GET',
        description: 'Adds an API key (requires admin key)',
        parameters: [
            {
                name: 'discord-id',
                description: 'The Discord ID of the user to add the key to'
            },
            {
                name: 'admin-key',
                description: 'The admin api key'
            }
        ]
    }
}