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
    define(['ApiClient', 'model/NestedID', 'model/ProductOptionBase'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NestedID'), require('./ProductOptionBase'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.ProductOptionRequest = factory(root.NetilionApiDocumentation.ApiClient, root.NetilionApiDocumentation.NestedID, root.NetilionApiDocumentation.ProductOptionBase);
  }
}(this, function(ApiClient, NestedID, ProductOptionBase) {
  'use strict';




  /**
   * The ProductOptionRequest model module.
   * @module model/ProductOptionRequest
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>ProductOptionRequest</code>.
   * @alias module:model/ProductOptionRequest
   * @class
   * @extends module:model/ProductOptionBase
   */
  var exports = function() {
    var _this = this;
    ProductOptionBase.call(_this);

  };

  /**
   * Constructs a <code>ProductOptionRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductOptionRequest} obj Optional instance to populate.
   * @return {module:model/ProductOptionRequest} The populated <code>ProductOptionRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ProductOptionBase.constructFromObject(data, obj);
      if (data.hasOwnProperty('product_feature')) {
        obj['product_feature'] = NestedID.constructFromObject(data['product_feature']);
      }
    }
    return obj;
  }

  exports.prototype = Object.create(ProductOptionBase.prototype);
  exports.prototype.constructor = exports;

  /**
   * @member {module:model/NestedID} product_feature
   */
  exports.prototype['product_feature'] = undefined;



  return exports;
}));

