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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.NetilionApiDocumentation) {
      root.NetilionApiDocumentation = {};
    }
    root.NetilionApiDocumentation.SubscriptionBase = factory(root.NetilionApiDocumentation.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SubscriptionBase model module.
   * @module model/SubscriptionBase
   * @version 01.00.00
   */

  /**
   * Constructs a new <code>SubscriptionBase</code>.
   * @alias module:model/SubscriptionBase
   * @class
   */
  var exports = function() {
    var _this = this;














  };

  /**
   * Constructs a <code>SubscriptionBase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubscriptionBase} obj Optional instance to populate.
   * @return {module:model/SubscriptionBase} The populated <code>SubscriptionBase</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('display_name')) {
        obj['display_name'] = ApiClient.convertToType(data['display_name'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('external_reference')) {
        obj['external_reference'] = ApiClient.convertToType(data['external_reference'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('notification_status')) {
        obj['notification_status'] = ApiClient.convertToType(data['notification_status'], 'String');
      }
      if (data.hasOwnProperty('customer_purchase_order')) {
        obj['customer_purchase_order'] = ApiClient.convertToType(data['customer_purchase_order'], 'String');
      }
      if (data.hasOwnProperty('start_date')) {
        obj['start_date'] = ApiClient.convertToType(data['start_date'], 'String');
      }
      if (data.hasOwnProperty('end_date')) {
        obj['end_date'] = ApiClient.convertToType(data['end_date'], 'String');
      }
      if (data.hasOwnProperty('billed_until')) {
        obj['billed_until'] = ApiClient.convertToType(data['billed_until'], 'String');
      }
      if (data.hasOwnProperty('external_user_reference')) {
        obj['external_user_reference'] = ApiClient.convertToType(data['external_user_reference'], 'String');
      }
      if (data.hasOwnProperty('external_plan_variant_reference')) {
        obj['external_plan_variant_reference'] = ApiClient.convertToType(data['external_plan_variant_reference'], 'String');
      }
      if (data.hasOwnProperty('asset_quota')) {
        obj['asset_quota'] = ApiClient.convertToType(data['asset_quota'], 'Number');
      }
      if (data.hasOwnProperty('storage_quota')) {
        obj['storage_quota'] = ApiClient.convertToType(data['storage_quota'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Name of the subscription
   * @member {String} display_name
   */
  exports.prototype['display_name'] = undefined;
  /**
   * Description of the subscription
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * can be used to store id of external subscription managment system
   * @member {String} external_reference
   */
  exports.prototype['external_reference'] = undefined;
  /**
   * status of the subscription, can be open, confirmed, cancelled, scheduled_update (used to mark a successor subscription), non_renewing
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * status of the mail notification for the subscription, can be no_notification, first_notification, second_notification or alert_notification
   * @member {String} notification_status
   */
  exports.prototype['notification_status'] = undefined;
  /**
   * reference for customer system
   * @member {String} customer_purchase_order
   */
  exports.prototype['customer_purchase_order'] = undefined;
  /**
   * start date of the subscription
   * @member {String} start_date
   */
  exports.prototype['start_date'] = undefined;
  /**
   * end date of the subscription
   * @member {String} end_date
   */
  exports.prototype['end_date'] = undefined;
  /**
   * end date of the subscription
   * @member {String} billed_until
   */
  exports.prototype['billed_until'] = undefined;
  /**
   * can be used to store user id of external subscription managment system
   * @member {String} external_user_reference
   */
  exports.prototype['external_user_reference'] = undefined;
  /**
   * can be used to store paln variant of external subscription managment system
   * @member {String} external_plan_variant_reference
   */
  exports.prototype['external_plan_variant_reference'] = undefined;
  /**
   * number of bought assets
   * @member {Number} asset_quota
   */
  exports.prototype['asset_quota'] = undefined;
  /**
   * number of bought storage (in bytes)
   * @member {Number} storage_quota
   */
  exports.prototype['storage_quota'] = undefined;



  return exports;
}));

