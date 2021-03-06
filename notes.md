use node for build tools and utility scripts
it's a JS runtime
use it to run a server, not just the code that is running on the server but also RUN the server.
**how does the web work??**

- enter domain name
- looks up in a DNS
- sends a req to the correct IP address server
- nodeJS writes the code that spins up that server
- sever talks to database and runs logic with the request
- server listens for requests and sends res
- req and res is done through HTTPS protocols, with headers and body

**creating a nodejs server**

- http module helps launching and sending requests to other servers (like an api)

**using core modules**
**working w requests and responses**

- req contains headers / metadata

**async code and the event loop**

- incoming request listener is registered and never unregistered
- use writeFile instead of writeFileSync

EXPRESS JS
**what is express?**

- framework is a set of helper functions + tools / rules how we work
- alternatives like adonis.js, koa, sails.js

- using middleware
- working w req and res
- routing
- returnning files
