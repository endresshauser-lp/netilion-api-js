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
    define(['ApiClient', 'model/Options'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Options'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.Features1 = factory(root.NetilionApiDocumentation.ApiClient, root.NetilionApiDocumentation.Options);
  }
}(this, function(ApiClient, Options) {
  'use strict';




  /**
   * The Features1 model module.
   * @module model/Features1
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>Features1</code>.
   * @alias module:model/Features1
   * @class
   * @param id {Number} Id of the feature
   * @param href {String} URL of feature
   * @param featureKey {String} feature_key of product feature
   */
  var exports = function(id, href, featureKey) {
    var _this = this;

    _this['id'] = id;
    _this['href'] = href;
    _this['feature_key'] = featureKey;


  };

  /**
   * Constructs a <code>Features1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Features1} obj Optional instance to populate.
   * @return {module:model/Features1} The populated <code>Features1</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('href')) {
        obj['href'] = ApiClient.convertToType(data['href'], 'String');
      }
      if (data.hasOwnProperty('feature_key')) {
        obj['feature_key'] = ApiClient.convertToType(data['feature_key'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('options')) {
        obj['options'] = ApiClient.convertToType(data['options'], [Options]);
      }
    }
    return obj;
  }

  /**
   * Id of the feature
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * URL of feature
   * @member {String} href
   */
  exports.prototype['href'] = undefined;
  /**
   * feature_key of product feature
   * @member {String} feature_key
   */
  exports.prototype['feature_key'] = undefined;
  /**
   * description text of the product feature
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {Array.<module:model/Options>} options
   */
  exports.prototype['options'] = undefined;



  return exports;
}));

