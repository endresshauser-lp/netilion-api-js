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
    define(['ApiClient', 'model/NestedIDHref', 'model/NestedIDHrefTag'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NestedIDHref'), require('./NestedIDHrefTag'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.DataExportResponse = factory(root.NetilionApiDocumentation.ApiClient, root.NetilionApiDocumentation.NestedIDHref, root.NetilionApiDocumentation.NestedIDHrefTag);
  }
}(this, function(ApiClient, NestedIDHref, NestedIDHrefTag) {
  'use strict';




  /**
   * The DataExportResponse model module.
   * @module model/DataExportResponse
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>DataExportResponse</code>.
   * @alias module:model/DataExportResponse
   * @class
   * @param status {Number} 
   * @param type {String} can be complete or measurements
   * @param createdAt {String} 
   * @param user {module:model/NestedIDHref} 
   */
  var exports = function(status, type, createdAt, user) {
    var _this = this;

    _this['status'] = status;
    _this['type'] = type;


    _this['created_at'] = createdAt;






    _this['user'] = user;



  };

  /**
   * Constructs a <code>DataExportResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DataExportResponse} obj Optional instance to populate.
   * @return {module:model/DataExportResponse} The populated <code>DataExportResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Number');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('start_date')) {
        obj['start_date'] = ApiClient.convertToType(data['start_date'], 'String');
      }
      if (data.hasOwnProperty('end_date')) {
        obj['end_date'] = ApiClient.convertToType(data['end_date'], 'String');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
      }
      if (data.hasOwnProperty('finished_at')) {
        obj['finished_at'] = ApiClient.convertToType(data['finished_at'], 'String');
      }
      if (data.hasOwnProperty('export_file_name')) {
        obj['export_file_name'] = ApiClient.convertToType(data['export_file_name'], 'String');
      }
      if (data.hasOwnProperty('export_content_type')) {
        obj['export_content_type'] = ApiClient.convertToType(data['export_content_type'], 'String');
      }
      if (data.hasOwnProperty('export_file_size')) {
        obj['export_file_size'] = ApiClient.convertToType(data['export_file_size'], 'String');
      }
      if (data.hasOwnProperty('export_updated_at')) {
        obj['export_updated_at'] = ApiClient.convertToType(data['export_updated_at'], 'String');
      }
      if (data.hasOwnProperty('export_fingerprint')) {
        obj['export_fingerprint'] = ApiClient.convertToType(data['export_fingerprint'], 'String');
      }
      if (data.hasOwnProperty('user')) {
        obj['user'] = NestedIDHref.constructFromObject(data['user']);
      }
      if (data.hasOwnProperty('instrumentation')) {
        obj['instrumentation'] = NestedIDHrefTag.constructFromObject(data['instrumentation']);
      }
      if (data.hasOwnProperty('download_href')) {
        obj['download_href'] = ApiClient.convertToType(data['download_href'], 'String');
      }
      if (data.hasOwnProperty('available_until')) {
        obj['available_until'] = ApiClient.convertToType(data['available_until'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} status
   */
  exports.prototype['status'] = undefined;
  /**
   * can be complete or measurements
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {String} start_date
   */
  exports.prototype['start_date'] = undefined;
  /**
   * @member {String} end_date
   */
  exports.prototype['end_date'] = undefined;
  /**
   * @member {String} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * @member {String} finished_at
   */
  exports.prototype['finished_at'] = undefined;
  /**
   * @member {String} export_file_name
   */
  exports.prototype['export_file_name'] = undefined;
  /**
   * @member {String} export_content_type
   */
  exports.prototype['export_content_type'] = undefined;
  /**
   * @member {String} export_file_size
   */
  exports.prototype['export_file_size'] = undefined;
  /**
   * @member {String} export_updated_at
   */
  exports.prototype['export_updated_at'] = undefined;
  /**
   * @member {String} export_fingerprint
   */
  exports.prototype['export_fingerprint'] = undefined;
  /**
   * @member {module:model/NestedIDHref} user
   */
  exports.prototype['user'] = undefined;
  /**
   * @member {module:model/NestedIDHrefTag} instrumentation
   */
  exports.prototype['instrumentation'] = undefined;
  /**
   * download link
   * @member {String} download_href
   */
  exports.prototype['download_href'] = undefined;
  /**
   * date until the download is available, after that the download will automatically removed
   * @member {String} available_until
   */
  exports.prototype['available_until'] = undefined;



  return exports;
}));

