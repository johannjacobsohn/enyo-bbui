setup:
	npm install

test: 
	node_modules/.bin/mocha -R spec

lint: 
	node_modules/.bin/jshint .

.PHONY: test
