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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/NestedID', 'model/NodeTypeBase'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NestedID'), require('./NodeTypeBase'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.NodeTypeRequest = factory(root.NetilionApiDocumentation.ApiClient, root.NetilionApiDocumentation.NestedID, root.NetilionApiDocumentation.NodeTypeBase);
  }
}(this, function(ApiClient, NestedID, NodeTypeBase) {
  'use strict';




  /**
   * The NodeTypeRequest model module.
   * @module model/NodeTypeRequest
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>NodeTypeRequest</code>.
   * @alias module:model/NodeTypeRequest
   * @class
   * @extends module:model/NodeTypeBase
   * @param name {String} Supports translations. Whitespaces are trimmed.
   */
  var exports = function(name) {
    var _this = this;
    NodeTypeBase.call(_this, name);

  };

  /**
   * Constructs a <code>NodeTypeRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NodeTypeRequest} obj Optional instance to populate.
   * @return {module:model/NodeTypeRequest} The populated <code>NodeTypeRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      NodeTypeBase.constructFromObject(data, obj);
      if (data.hasOwnProperty('tenant')) {
        obj['tenant'] = NestedID.constructFromObject(data['tenant']);
      }
    }
    return obj;
  }

  exports.prototype = Object.create(NodeTypeBase.prototype);
  exports.prototype.constructor = exports;

  /**
   * @member {module:model/NestedID} tenant
   */
  exports.prototype['tenant'] = undefined;



  return exports;
}));

