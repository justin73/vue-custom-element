# vue-custom-element

This is a vue component wrapped by vue-custom-element and ready be to consumed by other frameworks such as angular, react,etc.



1. create regular vue component

2. in the index.js, import vue and vue-custom-element to wrap the vue component and export a class ready to be used

3. run npm command to rollup the js bundle file inside the dist and docs folder

4. publish the npm package with the main pointing to the dist js file or the docs js file

5. install the package in other frameworks and import the name of the package then the custom element is ready for use 