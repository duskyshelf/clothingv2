# Clothingshop

![homepage](/readmeimages/homepage.png)

## About Clothingshop

(all notes about building, testing and file structure around this application can be found below)

#### Tools Used

Testing: Karma, Protractor  
Frameworks: Angular, Bootstrap

#### Comments about build

Clothing shop was built as an AngularJS single page application as I felt this was a simple setup that could meet all the features in the user stories.

This project was test driven using Karma for unit testing and then Protractor for feature testing.

I saved the product data as a local JSON file and called it through an Angular factory as I wanted to set the data up quickly, but with the option of moving it to an external API if required.

I initially built most of the logic in the controller with the intention of refactoring it into separate services as required. I have managed this with the voucher code logic (found in the voucher service), but due to time constraints there is still a lot of logic within the controller.

Styling was done using HTML/CSS and Bootstrap. I kept the styling very simple as I wanted to focus more on the testing and logic. Bootstrap was useful for making sure the site was responsive.

#### Improvements

I would liked to have taken more time to move a the basket methods out of the controller into a separate service. This would have been my next priority as this seems like a good opportunity to move the bulk of the remaining logic out of the controller.

My styling was relatively simple, and whilst functional could be improved.

## How to build

All commands assume you are running this from terminal.

1. Clone this repo and open the containing folder
  * `git clone https://github.com/duskyshelf/clothingshop.git`
2. Make sure you have node and bower: `node -v` and `bower -v`  
3. Run `bower install`  
4. Run `npm install`  
5. Run `http-server`  
6. Visit: [http://localhost:8080/ ](http://localhost:8080/ )  

### Testing

Run the following commands from terminal to run the tests

##### Karma (Unit Tests):  
1. `karma start test/karma.conf.js`

##### Protractor (Feature Tests):
(these will require separate terminal windows)  
1. `webdriver-manager start`  
2. `http-server`  
3. `protractor test/protractor.conf.js`  


### Discount codes

* fiveoff - £5 off all orders
* tenoff - £10 off baskets greater than £50
* 15off - £15 off orders containing footwear and over £75

### File structure

This was built using AngularJS

**Public File** | **Location**
--- | ---
**Homepage** | public/index.html
**Angular module** | public/js/app.js
**Controller** | public/js/shopFrontController.js
**Voucher Service** | public/js/voucherService.js
**Product List (JSON)** | public/js/ProductList.JSON
**Product Factory** | public/js/productFactory.js
**Stylesheet** | public/css/stylesheet.css

**Test File** | **Location**
--- | ---
**Karma Config** | test/karma.conf.js
**Karna Controller Test File** | test/unit/shopController.spec.js
**Karma Factory Test File** | test/unit/shopController.spec.js
**Protractor Config** | test/protractor.conf.js
**Protractor Feature Tests** | test/e2e/ShopFeatureSpec.js

    ├── README.md
    ├── bower.json
    ├── package.json
    ├── public
    │   ├── css
    │   │   └── stylesheet.css
    │   ├── favicon.ico
    │   ├── images
    │   │   └── fashion.jpg
    │   ├── index.html
    │   └── js
    │       ├── ProductList.json
    │       ├── app.js
    │       ├── productFactory.js
    │       ├── shopFrontController.js
    │       └── voucherService.js
    ├── readmeimages
    │   └── homepage.png
    └── test
        ├── e2e
        │   └── ShopFeatureSpec.js
        ├── karma.conf.js
        ├── protractor.conf.js
        └── unit
            ├── productfactory.spec.js
            └── shopController.spec.js
