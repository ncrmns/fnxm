# Final exam requirement
## Endpoint
params

	   Named URL segments used to capture the values specified at their position in the URL
		 Route path:	/users/:userId/books/:bookId
		 Request url:	http://../users/420/books/23
		 Object:	req.params: { "userId" : "420" , "bookId" : "23" }

header, body, request / response

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

    http :// www.website.com / users / :param1 / data ? query1=xy & query2=zx #hash
    .1..............2............3........4........3........5...........5.......6.

		1 - protocol
		2 - "www" : world wide web, "website" : domain name, ".com" : domain extension
		3,4,3 - resource name
		4 - segments of the resource name as parameters
		5 - after "?" query : "key=value" pairs devided by "&"
		6 - hash : relates to a section of a page

  - Examples:
    - Download pdf endpoint
    - GET/POST/PUT * endpoint call or implementation or refactor
    - Modify status of an endpoint
    - Add error handling to an endpoint

## Data flow
  - layers
  - service
  - MVC

		- MODEL : database
			Model represents shape of the data. It specifies the structure of data used by a program. 
			This may be a database, file, or a simple object, such as an icon or a character in a
			video game.

		- VIEW : frontend
			A view is the means of displaying objects within an application. 
			Examples: displaying a window or buttons or text within a window. It includes anything 
			that the user can see.
		- CONTROLLER : requests handler
			It acts as an interface between Model and View components, it updates both models and views.
			It accepts input, manipulates data using the Model component, and interacts with the Views 
			to render the final output. Controller handles the user request. When the user enters a URL
			it goes to the server and calls the appropriate controller. Then, the Controller uses
			the appropriate View and Model and creates the response and sends it back to the user.
			
			

  - joined models
  - components
  - communication between layers and components

## Testing
model

    Model-based testing is a software testing technique in which the test cases are
		derived from a model that describes the functional aspects of the system under test.
		It makes use of a model to generate tests that includes both offline and online
		testing.

		+ Higher level of Automation is achieved.
		+ Exhaustive testing is possible.
		+ Changes to the model can be easily tested.
		- Requires a formal specification or model to carry out testing.
		- Changes to the model might result in a different set of tests altogether.
		- Test Cases are tightly coupled to the model.

unit

	 individual units / components of a software are tested. The purpose is to validate 
	 that each unit of the software performs as designed. A unit is the smallest testable
	 part of any software.

	 + Debugging is easy
	 + Development is faster
	 + Codes are more reliable
	 - Cant test to every scenario
	 - Less changeable codebase
	 - integration is not tested

integration

    a level of software testing where individual units are combined and tested as a group.
		The purpose of this level of testing is to expose faults in the interaction between 
		integrated units.

endpoint

    test individual routes with a variety of input data and check the response

		+ curl
		+ postman
		+ mockMVC

end to end

	End-to-end testing is a methodology used to test whether the flow of an application is 
	performing as designed from start to finish. The purpose of carrying out end-to-end tests 
	is to identify system dependencies and to ensure that the right information is passed between
	various system components and systems.

Mocking (mock, stub, spy)

    mock:
      We use mocks when we:
      - don’t want to invoke production code
      - when there is no easy way to verify, that the intended code was executed
      - There is no return value and no easy way to check system state change

      An example can be a functionality that calls e-mail sending service.
      We don’t want to send e-mails each time we run a test. Moreover, it is not easy
      to verify in tests that a right email was sent. Only thing we can do is to verify the
      outputs of the functionality that is exercised in our test. In other
      words, verify the e-mail sending service was called.

    stub:
      is an object that holds predefined data and uses it to answer calls during tests. 
      It is used when we can not or don’t want to involve objects that would answer with
      real data or have undesirable side effects.

    spy:
      lets you take an existing class, function, object and mock it in such a way that you 
      can control what gets returned from functions.

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

