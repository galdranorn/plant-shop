# Plant shop project
Front-end of the plant shop based on PSD files.
[Click here to view live](https://plant-shop-79b92.firebaseapp.com/)


## Getting Started

 If demo is not enough download the repo, keep calm and `npm install`.

Then:

 - If you want to open the project locally, run:
`npm start`
Project will be running locally on localhost:3000.

 - If you want to build production version, run:
`npm run build`
Project will be build in /build folder.


## Functionalities

- Sorting products by name or value, ascending or descending.
- Products pagination on the main page.
- Add products to the cart from single product page view.
- Increase or decrease value and delete product from the cart view.
- Use code ‘spring2019’ for 20% or ’monstera’ for 10% discount in the cart view.
- Prepare cart summary.


## Developed with
- [Sass](https://sass-lang.com/) – CSS preprocessor
- [React](https://github.com/facebook/react) – JavaScript library
- [Redux](https://github.com/reduxjs/redux) - state container for JavaScript apps 
- [BootStrap](https://github.com/twbs/bootstrap) - HTML, CSS, and JavaScript framework
- [ReactStrap](https://reactstrap.github.io/) - stateless React components for Bootstrap 4.


## CSS classes

For CSS classes [BEM](http://getbem.com/) convention was used: block__element--modifier scheme, only classes used to style the components. 

Some BootStrap classes are used for RWD.


## Files structure

Files structure looks like below:

 - /src - components, actions and reducers for app
	 - /actions - actions defined for Cart and ProductPage components
	 - /reducers - reducers for all defined actions and data about products
	 - /components - all components in more or less logical order
 - /public
	 - /images - all photos, icons and splash
 - /build - production version of app
	 - /js 
	 - /css

## Copyrights

Hello, I'm [galdranorn](https://github.com/galdranorn). Thanks for enjoying my app. 

Any comments regarding code is welcome.

Made with ❤ in 2019
