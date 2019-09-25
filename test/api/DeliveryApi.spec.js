/**
 * Netilion API Documentation
 * Welcome to the Netilion API Documentation, which provides interactive access and documentation to our REST API. Please visit our developer portal for further instructions and information: https://developer.netilion.endress.com/ 
 *
 * OpenAPI spec version: 01.00.00
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.7
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.NetilionApiDocumentation);
  }
}(this, function(expect, NetilionApiDocumentation) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new NetilionApiDocumentation.DeliveryApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DeliveryApi', function() {
    describe('addAssetsToDelivery', function() {
      it('should call addAssetsToDelivery successfully', function(done) {
        //uncomment below and update the code to test addAssetsToDelivery
        //instance.addAssetsToDelivery(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addDocumentsToDelivery', function() {
      it('should call addDocumentsToDelivery successfully', function(done) {
        //uncomment below and update the code to test addDocumentsToDelivery
        //instance.addDocumentsToDelivery(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addPurchaseOrdersToDelivery', function() {
      it('should call addPurchaseOrdersToDelivery successfully', function(done) {
        //uncomment below and update the code to test addPurchaseOrdersToDelivery
        //instance.addPurchaseOrdersToDelivery(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createDelivery', function() {
      it('should call createDelivery successfully', function(done) {
        //uncomment below and update the code to test createDelivery
        //instance.createDelivery(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteDelivery', function() {
      it('should call deleteDelivery successfully', function(done) {
        //uncomment below and update the code to test deleteDelivery
        //instance.deleteDelivery(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAssetsOfDelivery', function() {
      it('should call getAssetsOfDelivery successfully', function(done) {
        //uncomment below and update the code to test getAssetsOfDelivery
        //instance.getAssetsOfDelivery(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDeliveries', function() {
      it('should call getDeliveries successfully', function(done) {
        //uncomment below and update the code to test getDeliveries
        //instance.getDeliveries(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDeliveryById', function() {
      it('should call getDeliveryById successfully', function(done) {
        //uncomment below and update the code to test getDeliveryById
        //instance.getDeliveryById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDeliveryIdStatus', function() {
      it('should call getDeliveryIdStatus successfully', function(done) {
        //uncomment below and update the code to test getDeliveryIdStatus
        //instance.getDeliveryIdStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDocumentsOfDelivery', function() {
      it('should call getDocumentsOfDelivery successfully', function(done) {
        //uncomment below and update the code to test getDocumentsOfDelivery
        //instance.getDocumentsOfDelivery(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPurchaseOrdersOfDelivery', function() {
      it('should call getPurchaseOrdersOfDelivery successfully', function(done) {
        //uncomment below and update the code to test getPurchaseOrdersOfDelivery
        //instance.getPurchaseOrdersOfDelivery(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeAssetsFromDelivery', function() {
      it('should call removeAssetsFromDelivery successfully', function(done) {
        //uncomment below and update the code to test removeAssetsFromDelivery
        //instance.removeAssetsFromDelivery(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeDocumentsFromDelivery', function() {
      it('should call removeDocumentsFromDelivery successfully', function(done) {
        //uncomment below and update the code to test removeDocumentsFromDelivery
        //instance.removeDocumentsFromDelivery(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removePurchaseOrdersFromDelivery', function() {
      it('should call removePurchaseOrdersFromDelivery successfully', function(done) {
        //uncomment below and update the code to test removePurchaseOrdersFromDelivery
        //instance.removePurchaseOrdersFromDelivery(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceAssetsOfDelivery', function() {
      it('should call replaceAssetsOfDelivery successfully', function(done) {
        //uncomment below and update the code to test replaceAssetsOfDelivery
        //instance.replaceAssetsOfDelivery(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceDocumentsOfDelivery', function() {
      it('should call replaceDocumentsOfDelivery successfully', function(done) {
        //uncomment below and update the code to test replaceDocumentsOfDelivery
        //instance.replaceDocumentsOfDelivery(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replacePurchaseOrdersOfDelivery', function() {
      it('should call replacePurchaseOrdersOfDelivery successfully', function(done) {
        //uncomment below and update the code to test replacePurchaseOrdersOfDelivery
        //instance.replacePurchaseOrdersOfDelivery(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateDelivery', function() {
      it('should call updateDelivery successfully', function(done) {
        //uncomment below and update the code to test updateDelivery
        //instance.updateDelivery(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
