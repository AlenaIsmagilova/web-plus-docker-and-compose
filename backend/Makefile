# run: 
# 	sudo docker run -d -p 3000:3000 -v db-data:/var/lib/pgsql/data --name kupiback --rm --env-file .env  8cf71856f96e
run: 
	docker run -d -p 4000:3000 --name backend --env-file .env  88f91a41139e
stop:
	docker stop backend