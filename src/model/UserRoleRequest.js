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
    define(['ApiClient', 'model/NestedIDHref', 'model/UserRoleBase'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NestedIDHref'), require('./UserRoleBase'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.UserRoleRequest = factory(root.NetilionApiDocumentation.ApiClient, root.NetilionApiDocumentation.NestedIDHref, root.NetilionApiDocumentation.UserRoleBase);
  }
}(this, function(ApiClient, NestedIDHref, UserRoleBase) {
  'use strict';




  /**
   * The UserRoleRequest model module.
   * @module model/UserRoleRequest
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>UserRoleRequest</code>.
   * @alias module:model/UserRoleRequest
   * @class
   * @extends module:model/UserRoleBase
   * @param name {String} Userroles' name. The value must be unique. Whitespaces are trimmed
   */
  var exports = function(name) {
    var _this = this;
    UserRoleBase.call(_this, name);

  };

  /**
   * Constructs a <code>UserRoleRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserRoleRequest} obj Optional instance to populate.
   * @return {module:model/UserRoleRequest} The populated <code>UserRoleRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      UserRoleBase.constructFromObject(data, obj);
      if (data.hasOwnProperty('tenant')) {
        obj['tenant'] = NestedIDHref.constructFromObject(data['tenant']);
      }
    }
    return obj;
  }

  exports.prototype = Object.create(UserRoleBase.prototype);
  exports.prototype.constructor = exports;

  /**
   * @member {module:model/NestedIDHref} tenant
   */
  exports.prototype['tenant'] = undefined;



  return exports;
}));

