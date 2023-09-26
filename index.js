const Hapi = require('@hapi/hapi');

(async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost'
    })

    server.route([
        {
            method: 'GET',
            path: '/contacts',
            handler: (req, h) => {
                return h.response('Terima kasih')
            }
        }
    ])

    await server.start()
    console.log('Server running on http://localhost/5000')
})();