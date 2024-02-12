SHELL :=/bin/bash

hello:
	echo "Hello, World"

newManrunner:
	node .\pmrunner.js 

test-run-smoke:
	npx wdio run ./wdio.conf.ts --spec .\test\specs\test5.e2e.ts


test-run-sanity:
	npx wdio run ./wdio.conf.ts --spec .\test\specs\test1.demotest.ts .\test\specs\test3.demotest.ts


test-run-regression:
	npx wdio run ./wdio.conf.ts --spec .\test\specs\test2.demotest.ts .\test\specs\test4.demotest.ts