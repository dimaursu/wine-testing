wine-testing
============

A wine testing game, it replaces the traditionals forms somelliers have.

This is the first prototype build at Generator, and it doesn't have bussiness
logic at all.

To build it, you will need to install `nodejs`, `npm` and `bower` - to get the
assets
then `ruby` and `jekyll`, to build the website from templates,
and `phonegap` and all of it's dependencies to get it running on your phone.

Run the following in the root of your project:
```
bower install
# the bower packages will be installed, all sorts of assets, libraries, and so
# on

jekyll build
# builds the website in the *_site* directory
# copy the contents of *_site* in the *www* folder created by phonegap

phonegap run android --device=LGD855a5080018

# you can get the device id by running this:

adb devices
# List of devices attached
# LGD855a5080018  device
```

You can see some screenshots in the *screenshots* directory. Doh!

