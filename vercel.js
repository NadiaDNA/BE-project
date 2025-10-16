// {
//   "version": 2,
//   "builds": [
//     { "src": "api/app.js", "use": "@vercel/node" }
//   ],
//   "routes": [
//     { "src": "/(.*)", "dest": "/api/app.js" }
//   ]
// }

module.exports = {
  version: 2,
  builds: [ 
    { src: "api/app.js", use: "@vercel/node" }
  ],
  routes: [
    { src: "/(.*)", dest: "/api/app.js" }
  ]
}
