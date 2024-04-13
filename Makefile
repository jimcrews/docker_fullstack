DATABASE_URL:=postgres://postgres:mysecretpassword@localhost:5432/postgres

.PHONY: run-postgres
run-postgres:
	@echo Starting postgres container
	-docker run \
		-e POSTGRES_PASSWORD=mysecretpassword \
		-v pgdata:/var/lib/postgresql/data \
		-p 5432:5432 \
		postgres:16.2-alpine

.PHONY: run-node-api
run-node-api:
	@echo Starting node api
	cd node-api && \
		DATABASE_URL=${DATABASE_URL} \
		npm run dev


.PHONY: run-react-client
run-react-client:
	@echo Starting react client
	cd react-client && \
		npm run dev