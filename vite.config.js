export default {
    server: {
      port: 5500, // keep same port if you want
      proxy: {
        // forward /api calls to your Express backend
        '/api': 'http://localhost:3000'
      }
    }
  }