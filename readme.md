# RT client batch generator

This is a light weight React JS application to generate the batch installer script used for the RT products silent install, including the client, designer, ITI bridge and RTAM.

It allows you to choose the properties, specify their values, generate the script and download it as a .bat file.

## Developer notes

The tool is built using REACT JS 16.x and packaged with WebPack 4.x. 

 - To run the dev server execute: npm start.
 - To generate production build: npm run build.
 - For commits and pull requests make sure that there are no errors on the syntax by running npm run lint, a precommit hook is enabled and you won't be allowed to do commits if the linter finds errors in the syntax or code style.
 - To automatically fix code style errors run: npm run lint -- --fix.

## Change log
v1.3.2
 - Added show/hide sticky buttons to client, iti and rtam properties

V1.3.1
 - Added dynamic data functionality for "Include ITI Bridge" and "Include RTAM" fields. 
 
V1.3
 - Moved whole project to webpack 4.
 - Added full support to internet explorer 9+.
 
V1.2
 - Added APA 6.7 support.
   properties added: EGCMSCOMCTRL.
   Properties removed: EGSVNHTTPS, EGSVNIP, EGSVNPORT, EGSYNCINTERVAL, RANODELIST.
   
V1.1
 - 64 bit msi file name not working bug fix.
 - Added 32 or 64 bit architecture select option.
