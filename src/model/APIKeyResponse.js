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
    define(['ApiClient', 'model/APIKeyBase', 'model/NestedIDHref'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./APIKeyBase'), require('./NestedIDHref'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.APIKeyResponse = factory(root.NetilionApiDocumentation.ApiClient, root.NetilionApiDocumentation.APIKeyBase, root.NetilionApiDocumentation.NestedIDHref);
  }
}(this, function(ApiClient, APIKeyBase, NestedIDHref) {
  'use strict';




  /**
   * The APIKeyResponse model module.
   * @module model/APIKeyResponse
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>APIKeyResponse</code>.
   * @alias module:model/APIKeyResponse
   * @class
   * @extends module:model/APIKeyBase
   */
  var exports = function() {
    var _this = this;
    APIKeyBase.call(_this);




  };

  /**
   * Constructs a <code>APIKeyResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/APIKeyResponse} obj Optional instance to populate.
   * @return {module:model/APIKeyResponse} The populated <code>APIKeyResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      APIKeyBase.constructFromObject(data, obj);
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('api_key')) {
        obj['api_key'] = ApiClient.convertToType(data['api_key'], 'String');
      }
      if (data.hasOwnProperty('api_secret')) {
        obj['api_secret'] = ApiClient.convertToType(data['api_secret'], 'String');
      }
      if (data.hasOwnProperty('client_application')) {
        obj['client_application'] = NestedIDHref.constructFromObject(data['client_application']);
      }
    }
    return obj;
  }

  exports.prototype = Object.create(APIKeyBase.prototype);
  exports.prototype.constructor = exports;

  /**
   * Id of object
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * the api_key value
   * @member {String} api_key
   */
  exports.prototype['api_key'] = undefined;
  /**
   * API Key api_secret (only for oauth authentication)
   * @member {String} api_secret
   */
  exports.prototype['api_secret'] = undefined;
  /**
   * @member {module:model/NestedIDHref} client_application
   */
  exports.prototype['client_application'] = undefined;



  return exports;
}));

