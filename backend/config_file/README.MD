The config.js file loads the environment variables and returns them with their type descriptions.

Notice: The entrys in the .env have to named exact same as the variables in the config.js



```

// .env file
SERVER_HOST='http://localhost:'
SERVER_PORT='8080'
```

```
// config.js
 ...
 ...
 * @prop {string} SERVER_HOST Express server port
 * @prop {string} SERVER_PORT Express server host
 ...
 ...
```
