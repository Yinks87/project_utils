The config.js file loads the environment variables and returns them with their type descriptions.

Notice: The entrys in the .env have to named exact same as the variables in the config.js



```

// .env file
SERVER_PORT=
SERVER_HOST=
```

```
// config.js
 ...
 ...
 * @prop {string} SERVER_PORT Express server port
 * @prop {string} SERVER_HOST Express server host
 ...
 ...
```
