#!/usr/bin/env /bin/bash

Green='\033[1;92m'    # Green
Blue='\033[1;34m'       # Blue
Reset='\033[0m'       # Text Reset

PROJECT_HOME=''

# Fix needed by macOS 10.15 Catalina
if [ "$(uname)" == "Darwin" ]; then
  OS_VERSION=`sw_vers -productVersion`

  if [[ $OS_VERSION == "10.15"* ]]; then
    PROJECT_HOME='/System/Volumes/Data'
  fi
fi

PROJECT_HOME="${PROJECT_HOME}$(cd -P -- "$(dirname -- "$0")" && pwd -P)"

function setup {
  cd "$PROJECT_HOME/docker/certs" && mkcert "*.around-you.dev" && mkcert -install

  cd "$PROJECT_HOME" || exit

  sudo openssl dhparam -out "$PROJECT_HOME/docker/dhparam/dhparam-2048.pem" 2048

  echo "Setup done!"
}


DOCKER_COMPOSE_DEV=./docker/docker-compose.yml

while [[ $# -gt 0 ]]
do
  key="$1"

  case "$key" in
    setup)
      setup
      exit
    ;;

    generate:config:dev)
      generate-dev
      exit
    ;;

    up)
      if test -f "$DOCKER_COMPOSE_DEV"; then
        docker-compose -f "$DOCKER_COMPOSE_DEV" up -d --build --force-recreate
      else
          echo "$DOCKER_COMPOSE_DEV does not exists! Maybe you need create it from example file."
      fi
      exit
    ;;

    down)
      if test -f "$DOCKER_COMPOSE_DEV"; then
        docker-compose -f "$DOCKER_COMPOSE_DEV" down
      else
          echo "$DOCKER_COMPOSE_DEV does not exists! Maybe you need create it from example file."
      fi
      exit
    ;;

    migration:create)
      docker exec -it around_you_platform sh -c "yarn workspace back-end-service typeorm:migration:create -n $2"
      exit
    ;;

    migration:generate)
      docker exec -it around_you_platform sh -c "yarn workspace back-end-service typeorm:migration:generate -n $2"
      exit
    ;;

    migration:run)
      docker exec -it around_you_platform sh -c "yarn workspace back-end-service typeorm:migration:run"
      exit
    ;;

    migration:run-on)
      docker exec -it around_you_platform sh -c "yarn workspace back-end-service typeorm:migration:run -c $2"
      exit
    ;;

    migration:revert)
      docker exec -it around_you_platform sh -c "yarn workspace back-end-service typeorm:migration:revert"
      exit
    ;;

    migration:revert-on)
      docker exec -it around_you_platform sh -c "yarn workspace back-end-service typeorm:migration:revert -c $2"
      exit
    ;;

    migration:show)
      docker exec -it around_you_platform sh -c "yarn workspace back-end-service typeorm:migration:show"
      exit
    ;;

    migration:show-on)
      docker exec -it around_you_platform sh -c "yarn workspace back-end-service typeorm:migration:show -c $2"
      exit
    ;;

  esac

  shift
done

echo -en """
Commands:
  - ${Green}setup${Reset}: performs the setup of the project environment
  - ${Green}generate:config:dev${Reset}: generate development configuration
  - ${Green}up${Reset}: execute docker-compose up
  - ${Green}down${Reset}: execute docker-compose down
  - ${Green}migration:create${Reset} ${Blue}[new migration name]${Reset}: create new empty migration
  - ${Green}migration:generate${Reset} ${Blue}[new migration name]${Reset}: generate new init migration on default connection
  - ${Green}migration:run${Reset}: run migrations on default connection
  - ${Green}migration:run-on${Reset} ${Blue}[connection]${Reset}: run migrations on given connection
  - ${Green}migration:revert${Reset}: revert migration on by one
  - ${Green}migration:revert-on${Reset} ${Blue}[connection]${Reset}: revert migration on by one on given connection
  - ${Green}migration:show${Reset}: show migrations status on default connection
  - ${Green}migration:show-on${Reset} ${Blue}[connection]${Reset}: show migrations status on given connection
"""
