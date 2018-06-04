blaster-build-msg:
										######################################################################################################
										######################################################################################################
										########################################### Blaster Build ############################################
										######################################################################################################
										######################################################################################################
go-dependencies:
						go get github.com/revel/cmd/revel
						go get gopkg.in/yaml.v2


blaster-web-client-dev-build:
																cd ./web-client; rm -rf build; npm run build
blaster-web-client-build:
													cd ./web-client; npm install --save react-scripts; npm install --save react react-dom; npm install --save react-bootstrap;
													$(MAKE) blaster-web-client-dev-build

copy-web-client-artifacts:
														rm -rf static;
														cp -r ./web-client/build/static .;
														rm -f ./app/views/App/Index.html;
														cp ./web-client/build/Index.html ./app/views/App/;

build-blaster:
								$(MAKE) blaster-build-msg
								$(MAKE) go-dependencies
								$(MAKE) blaster-web-client-build
								$(MAKE) copy-web-client-artifacts

dev-build-blaster:
										$(MAKE) blaster-build-msg
										$(MAKE) blaster-web-client-dev-build
										$(MAKE) copy-web-client-artifacts


run-blaster:
							$(MAKE) build-blaster
							revel run github.com/bitansaha/blaster
