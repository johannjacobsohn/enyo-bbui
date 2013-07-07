export bb10DeviceIP := "192.168.1.126"

bb10:
	zip -rq phone.zip .

	stty -echo && read -p "Enter bb password:" passwd && stty echo && ../bb10-sdk/bbwp --password $$passwd phone.zip -d -o .;
	stty -echo && read -p "Enter device password:" passwd && stty echo && ../bb10-sdk/dependencies/tools/bin/blackberry-deploy -installApp -password $$passwd -device $(bb10DeviceIP) -package device/phone.bar

clean:
	-rm -r phone.zip simulator device

deploy: clean bb10 clean

.PHONY: deploy
