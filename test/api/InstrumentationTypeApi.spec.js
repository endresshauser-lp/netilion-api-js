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
    instance = new NetilionApiDocumentation.InstrumentationTypeApi();
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

  describe('InstrumentationTypeApi', function() {
    describe('createInstrumentationType', function() {
      it('should call createInstrumentationType successfully', function(done) {
        //uncomment below and update the code to test createInstrumentationType
        //instance.createInstrumentationType(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteInstrumentationType', function() {
      it('should call deleteInstrumentationType successfully', function(done) {
        //uncomment below and update the code to test deleteInstrumentationType
        //instance.deleteInstrumentationType(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInstrumentationIdType', function() {
      it('should call getInstrumentationIdType successfully', function(done) {
        //uncomment below and update the code to test getInstrumentationIdType
        //instance.getInstrumentationIdType(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInstrumentationTypeById', function() {
      it('should call getInstrumentationTypeById successfully', function(done) {
        //uncomment below and update the code to test getInstrumentationTypeById
        //instance.getInstrumentationTypeById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInstrumentationTypes', function() {
      it('should call getInstrumentationTypes successfully', function(done) {
        //uncomment below and update the code to test getInstrumentationTypes
        //instance.getInstrumentationTypes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInstrumentationTypesOptions', function() {
      it('should call getInstrumentationTypesOptions successfully', function(done) {
        //uncomment below and update the code to test getInstrumentationTypesOptions
        //instance.getInstrumentationTypesOptions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateInstrumentationType', function() {
      it('should call updateInstrumentationType successfully', function(done) {
        //uncomment below and update the code to test updateInstrumentationType
        //instance.updateInstrumentationType(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
