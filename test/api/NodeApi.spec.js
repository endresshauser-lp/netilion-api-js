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
    instance = new NetilionApiDocumentation.NodeApi();
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

  describe('NodeApi', function() {
    describe('addAssetsToNode', function() {
      it('should call addAssetsToNode successfully', function(done) {
        //uncomment below and update the code to test addAssetsToNode
        //instance.addAssetsToNode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addDocumentsToNode', function() {
      it('should call addDocumentsToNode successfully', function(done) {
        //uncomment below and update the code to test addDocumentsToNode
        //instance.addDocumentsToNode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addInstrumentationsToNode', function() {
      it('should call addInstrumentationsToNode successfully', function(done) {
        //uncomment below and update the code to test addInstrumentationsToNode
        //instance.addInstrumentationsToNode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createNodes', function() {
      it('should call createNodes successfully', function(done) {
        //uncomment below and update the code to test createNodes
        //instance.createNodes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteNode', function() {
      it('should call deleteNode successfully', function(done) {
        //uncomment below and update the code to test deleteNode
        //instance.deleteNode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAssetsOfNode', function() {
      it('should call getAssetsOfNode successfully', function(done) {
        //uncomment below and update the code to test getAssetsOfNode
        //instance.getAssetsOfNode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDocumentsOfNode', function() {
      it('should call getDocumentsOfNode successfully', function(done) {
        //uncomment below and update the code to test getDocumentsOfNode
        //instance.getDocumentsOfNode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInstrumentationsOfNode', function() {
      it('should call getInstrumentationsOfNode successfully', function(done) {
        //uncomment below and update the code to test getInstrumentationsOfNode
        //instance.getInstrumentationsOfNode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNodeIdType', function() {
      it('should call getNodeIdType successfully', function(done) {
        //uncomment below and update the code to test getNodeIdType
        //instance.getNodeIdType(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNodeTypesOptions', function() {
      it('should call getNodeTypesOptions successfully', function(done) {
        //uncomment below and update the code to test getNodeTypesOptions
        //instance.getNodeTypesOptions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNodes', function() {
      it('should call getNodes successfully', function(done) {
        //uncomment below and update the code to test getNodes
        //instance.getNodes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNodesById', function() {
      it('should call getNodesById successfully', function(done) {
        //uncomment below and update the code to test getNodesById
        //instance.getNodesById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSpecificationsOfNode', function() {
      it('should call getSpecificationsOfNode successfully', function(done) {
        //uncomment below and update the code to test getSpecificationsOfNode
        //instance.getSpecificationsOfNode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeAssetsFromNode', function() {
      it('should call removeAssetsFromNode successfully', function(done) {
        //uncomment below and update the code to test removeAssetsFromNode
        //instance.removeAssetsFromNode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeDocumentsFromNode', function() {
      it('should call removeDocumentsFromNode successfully', function(done) {
        //uncomment below and update the code to test removeDocumentsFromNode
        //instance.removeDocumentsFromNode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeInstrumentationsFromNode', function() {
      it('should call removeInstrumentationsFromNode successfully', function(done) {
        //uncomment below and update the code to test removeInstrumentationsFromNode
        //instance.removeInstrumentationsFromNode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeSpecificationsFromNode', function() {
      it('should call removeSpecificationsFromNode successfully', function(done) {
        //uncomment below and update the code to test removeSpecificationsFromNode
        //instance.removeSpecificationsFromNode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('renameSpecificationsOfNode', function() {
      it('should call renameSpecificationsOfNode successfully', function(done) {
        //uncomment below and update the code to test renameSpecificationsOfNode
        //instance.renameSpecificationsOfNode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceAssetsOfNode', function() {
      it('should call replaceAssetsOfNode successfully', function(done) {
        //uncomment below and update the code to test replaceAssetsOfNode
        //instance.replaceAssetsOfNode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceDocumentsOfNode', function() {
      it('should call replaceDocumentsOfNode successfully', function(done) {
        //uncomment below and update the code to test replaceDocumentsOfNode
        //instance.replaceDocumentsOfNode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceInstrumentationsOfNode', function() {
      it('should call replaceInstrumentationsOfNode successfully', function(done) {
        //uncomment below and update the code to test replaceInstrumentationsOfNode
        //instance.replaceInstrumentationsOfNode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateNode', function() {
      it('should call updateNode successfully', function(done) {
        //uncomment below and update the code to test updateNode
        //instance.updateNode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateSpecificationsOfNode', function() {
      it('should call updateSpecificationsOfNode successfully', function(done) {
        //uncomment below and update the code to test updateSpecificationsOfNode
        //instance.updateSpecificationsOfNode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
