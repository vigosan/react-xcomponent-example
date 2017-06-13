.PHONY: up down test bash logs e2e build reload

up:
	docker-compose up -d app

down:
	docker-compose down

test:
	docker-compose run --rm app yarn test

bash:
	docker-compose exec app bash

logs:
	docker-compose logs -f app

build:
	docker-compose run --rm app yarn build

e2e:
	docker-compose run --rm e2e yarn test

reload:
	make down
	make up

default: up
