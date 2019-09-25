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
    instance = new NetilionApiDocumentation.Links8();
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

  describe('Links8', function() {
    it('should create an instance of Links8', function() {
      // uncomment below and update the code to test Links8
      //var instance = new NetilionApiDocumentation.Links8();
      //expect(instance).to.be.a(NetilionApiDocumentation.Links8);
    });

    it('should have the property assets (base name: "assets")', function() {
      // uncomment below and update the code to test the property assets
      //var instance = new NetilionApiDocumentation.Links8();
      //expect(instance).to.be();
    });

    it('should have the property documents (base name: "documents")', function() {
      // uncomment below and update the code to test the property documents
      //var instance = new NetilionApiDocumentation.Links8();
      //expect(instance).to.be();
    });

    it('should have the property instrumentations (base name: "instrumentations")', function() {
      // uncomment below and update the code to test the property instrumentations
      //var instance = new NetilionApiDocumentation.Links8();
      //expect(instance).to.be();
    });

    it('should have the property specifications (base name: "specifications")', function() {
      // uncomment below and update the code to test the property specifications
      //var instance = new NetilionApiDocumentation.Links8();
      //expect(instance).to.be();
    });

  });

}));
