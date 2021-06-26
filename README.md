# Around You
Authors: Alex Bordini, Simone Cimarelli

## Requirements

The setup of the backend service needs the following dependencies:

- [mkcert](https://github.com/FiloSottile/mkcert)
- [openssl](https://www.openssl.org)
- [docker](https://www.docker.com)
- [docker-compose](https://docs.docker.com/compose/install/)
- [node](https://nodejs.org/en/)
- [nvm](https://github.com/nvm-sh/nvm)
- [yarn](https://yarnpkg.com)


## Getting started Back End Service

This step requires all the dependencies listed above. The repo contains a utility tool called _hfs_. This util permits to:

- complete the setup of the repo, installing some dependencies and certs needed to docker
- call up and down on docker-compose

As an optional step, you can link ./hfs.sh to your local bins with `ln -s ./around.sh /usr/local/bin/around`. The next commands are reported using the short syntax.

To complete the installation, execute the following command

```bash
around setup
```

This command installs all the certificates needed to `nginx`.

To start the Docker's containers, execute the following command:

```bash
around up
```

To stop the Docker's containers, execute the following command:

```bash
around down
```