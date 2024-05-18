module.exports = {
    setupRoutes: function(app) {
        app.get('/api/test', (req, res) => {
            res.send({ message: 'Hello, World!' })
        });
    },
    endpointData: {
        path: '/api/test',
        method: 'GET',
        description: 'Sends a greeting message',
        parameters: []
    }
}