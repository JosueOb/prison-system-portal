override SHELL := /bin/bash

.PHONY: up
up:
	docker-compose -f infrastructure/docker-compose.yml up -d

.PHONY: clean
clean:
	docker-compose -f infrastructure/docker-compose.yml down --volumes --remove-orphans --rmi all

.PHONY: logs
logs:
	docker-compose -f infrastructure/docker-compose.yml logs -f

