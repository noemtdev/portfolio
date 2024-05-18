module.exports = {
    setupRoutes: function(app) {
        app.get('/api/some-endpoint-name', (req, res) => {
            // do some funky stuff here
        });
    },
    endpointData: {
        path: '/api/some-endpoint-name',
        method: 'GET',
        description: 'Some Endpoint Description',
        parameters: []
    }
}