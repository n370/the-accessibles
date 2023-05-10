# API server modernization and Cross-platform token adapter

## Operation instructions

### Theme Builder API server modernization

Open a new terminal window at the root of this hackathon submission repository and run:

```shell
git submodule update --init
```

On the same terminal window, change into the a11y-theme-builder submodule folder, clear the database file, run the usual dev environment setup and start the Fastify api server.

```shell
cd hackproject/code/api-server-modernization/a11y-theme-builder/code
echo -n "" > src/data/themes
npm run build-api
npm run start:fastify
```

Open another terminal window on the same directory and run the api tests.

```shell
cd hackproject/code/api-server-modernization/a11y-theme-builder/code
npm test
```

Finally, revert the changes made to the original database file.

```shell
cd hackproject/code/api-server-modernization/a11y-theme-builder/code
git checkout src/data/themes
```

### Cross-platform token adapter