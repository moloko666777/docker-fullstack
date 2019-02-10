#!/usr/bin/make

include .env

docker_bin := $(shell command -v docker 2> /dev/null)
docker_compose_bin := $(shell command -v docker-compose 2> /dev/null)

up:
	$(docker_compose_bin) up --no-recreate -d

build:
	$(docker_compose_bin) up --build -d

watch: up
	$(docker_compose_bin) exec app yarn build --watch

migrate: up
	$(docker_compose_bin) exec app yarn migrate

seed: up
	$(docker_compose_bin) exec app yarn seed