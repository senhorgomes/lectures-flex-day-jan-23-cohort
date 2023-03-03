REST?
REST means that the path that we are going to should represent the data being transferred. An API that uses the REST convention is said to be RESTful.
Methods:

GET
POST
PUT
DELETE

REST's guidelines
HTTP GET should be used for all retrieval. It should never be used to create, update, or do things.
HTTP POST should be used for creating. It shouldn’t be used to update or get a resource. If a URL had never existed before now and you’re going to create it and make it hold some data, use POST.
HTTP PUT should be used for updating — meaning replacing a collection with different data. The URL should have existed before.
HTTP DELETE should be used for deleting.