const userData = require('../../models/user');

module.exports = {
    setupRoutes: function(app) {
        app.get('/api/get-user-uuid/:discord_id', (req, res) => {
            const { discord_id } = req.params;
            if (!discord_id) return res.status(400).send({ error: 'No User Provided' });

            userData.findOne({ discord: discord_id })
                .select('-_id')
                .then(user_data => {
                    if (!user_data) return res.status(404).send({ error: 'User not found' });
                    res.send(user_data);
                })
                .catch(err => {
                    res.status(500).send({ error: 'An error occurred while querying the database' });
                });
        });
    },
    endpointData: {
        path: '/api/get-user-uuid/:discord-id',
        method: 'GET',
        description: 'Gets user info from the pixly database.',
        parameters: [
            {
                name: "discord-id",
                description: "The Discord ID of the user to get the UUID for.",
            }
        ]
    }
}