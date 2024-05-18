const cachedProfile = require('../../models/profile');

module.exports = {
    setupRoutes: function(app) {
        app.get('/api/get-cached-profile/:uuid/:profile', (req, res) => {
            const { uuid, profile } = req.params;
            if (!uuid) return res.status(400).send({ error: 'No UUID provided' });
            if (!profile) return res.status(400).send({ error: 'No profile name provided' });

            cachedProfile.findOne({ uuid: uuid, cute_name: profile })
                .select('-_id')
                .then(profile_data => {
                    if (!profile_data) return res.status(404).send({ error: 'Profile not found' });
                    res.send(profile_data);
                })
                .catch(err => {
                    res.status(500).send({ error: 'An error occurred while querying the database' });
                });
        });
    },
    endpointData: {
        path: '/api/get-cached-profile/:uuid/:profile',
        method: 'GET',
        description: 'Gets a cached profile from the pixly database.',
        parameters: [
            {
                name: "uuid",
                description: "The UUID of the player to get the profile for.",
            },
            {
                name: "profile",
                description: "The name of the profile to get.",
            }
        ]
    }
}