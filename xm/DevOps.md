# Final exam requirement
## Endpoint
params

	   Named URL segments used to capture the values specified at their position in the URL
		 Route path: 	/users/:userId/books/:bookId
		 Request url: http://../users/420/books/23
		 Object: 			req.params: { "userId" : "420" , "bookId" : "23" }

header

body

	request / response
		 Network packet to be sent between client and web server.

		 Request line:
		   - Method
			 - Request URL

		 Request headers:
		  - Client software
			- expected content type
			- language
			- date
			etc.

		 Body (optional)
		  - content
		 
status (200, 404)
		 2xx Succes
      - 200 ok
		  - 201 created
		  - 202 accepted

		 3xx Redirection

		 4xx Client side error
		  - 400 Bad request
			- 401 I dont know who you are Authenticate and try again
			- 403 I know who you are You dont have permission
			- 404 Not found

		 5xx Server side error
		  - 500 Internal server error
  REST
	   REpresentational State Transfer
			- architectural style for providing standards between computer systems on the web
			- REST requires that a client make a request to the server in order to retrieve or modify data on the server

  HTTP, HTTPS
		 HyperText Transfer Protocol / Secure
			- SSL encryption layer
				+ verifying that you talking directly to the server
				+ set up by a handshake
				+ agree on a "cipher suite" to use encrypting/decrypting packets

  parts of URL
		 http :// www.website.com / users / :param1 / data ? query1=xy & query2=zx
		  1.             2.           3.        4.     3.        5.          5.
			1 - protocol
			2 - "www" : world wide web, "website" : domain name, ".com" : domain extension
			3,4,3 - resource name
			4 - segments of the resource name as parameters
			5 - after "?" query : "key=value" pairs devided by "&"
  - Examples:
    - Download pdf endpoint
    - GET/POST/PUT * endpoint call or implementation or refactor
    - Modify status of an endpoint
    - Add error handling to an endpoint

## Data flow
  - layers
  - service
  - MVC
  - joined models
  - components
  - communication between layers and components

## Testing
  - model, unit
  - integration, endpoint
  - end to end
  - Mocking (mock, stub, spy)
  - assertions

## DB
  - ORM
  - CRUD
  - foreign key
  - SQL syntax
  - join
  - Examples:
    - New specific query from database
    - Creating one-to-many, many-to-many connections
    - Basic SQL commands in terminal
    - Cascading deletion for connected records

## Container
  - Create image using Dockerfile
  - Start / stop containers (using doom is ok :D)
  - Push and Pull from dockerhub
  - Set environment variables and ports

## Compose
  - using volumes
  - using compose.yml
  - start and stop containers

## Cloud
  - Deploy to EBS
  - Manage EBS of EC2 instance
  - Push files to S3
  - Manage an RDS instance

## CI Advanced
  - Create new Jenkins job
  - Configure GitHub hooks
  - Use deployment plugins or scripts
