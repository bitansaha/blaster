blaster-build-msg:
										######################################################################################################
										######################################################################################################
										########################################### Blaster Build ############################################
										######################################################################################################
										######################################################################################################

blaster-web-client-build:
													cd ./web-client; rm -rf build; npm run build

copy-web-client-artifacts:
														rm -rf static;
														cp -r ./web-client/build/static .;
														rm -f ./app/views/App/Index.html;
														cp ./web-client/build/index.html ./app/views/App/; mv ./app/views/App/index.html ./app/views/App/Index.html

build-blaster:
								$(MAKE) blaster-build-msg
								$(MAKE) blaster-web-client-build
								$(MAKE) copy-web-client-artifacts

run-blaster:
							$(MAKE) build-blaster
							revel run github.com/bitansaha/blaster
