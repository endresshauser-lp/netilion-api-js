/**
 * Netilion API Documentation
 * Welcome to the Netilion API Documentation, which provides interactive access and documentation to our REST API. Please visit our developer portal for further instructions and information: https://developer.netilion.endress.com/ 
 *
 * OpenAPI spec version: 01.00.00
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import NestedIDHref from './NestedIDHref';

/**
* The AssetHealthConditionNested model module.
* @module model/AssetHealthConditionNested
* @version 01.00.00
*/
export default class AssetHealthConditionNested {
    /**
    * Constructs a new <code>AssetHealthConditionNested</code>.
    * @alias module:model/AssetHealthConditionNested
    * @class
    * @param id {Number} ID of the nested resources
    * @param diagnosisCode {String} diagnosis_code of the nested resource
    * @param assetStatus {module:model/NestedIDHref} 
    * @param channel {String} channel of the nested resource
    * @param module {String} module of the nested resource
    */

    constructor(id, diagnosisCode, assetStatus, channel, module) {
        
        
        this['id'] = id;
        this['diagnosis_code'] = diagnosisCode;
        this['asset_status'] = assetStatus;
        this['channel'] = channel;
        this['module'] = module;
        
    }

    /**
    * Constructs a <code>AssetHealthConditionNested</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AssetHealthConditionNested} obj Optional instance to populate.
    * @return {module:model/AssetHealthConditionNested} The populated <code>AssetHealthConditionNested</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AssetHealthConditionNested();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('diagnosis_code')) {
                obj['diagnosis_code'] = ApiClient.convertToType(data['diagnosis_code'], 'String');
            }
            if (data.hasOwnProperty('asset_status')) {
                obj['asset_status'] = NestedIDHref.constructFromObject(data['asset_status']);
            }
            if (data.hasOwnProperty('channel')) {
                obj['channel'] = ApiClient.convertToType(data['channel'], 'String');
            }
            if (data.hasOwnProperty('module')) {
                obj['module'] = ApiClient.convertToType(data['module'], 'String');
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = ApiClient.convertToType(data['links'], Object);
            }
        }
        return obj;
    }

    /**
    * ID of the nested resources
    * @member {Number} id
    */
    id = undefined;
    /**
    * diagnosis_code of the nested resource
    * @member {String} diagnosis_code
    */
    diagnosis_code = undefined;
    /**
    * @member {module:model/NestedIDHref} asset_status
    */
    asset_status = undefined;
    /**
    * channel of the nested resource
    * @member {String} channel
    */
    channel = undefined;
    /**
    * module of the nested resource
    * @member {String} module
    */
    module = undefined;
    /**
    * @member {Object} links
    */
    links = undefined;




}