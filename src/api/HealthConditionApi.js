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

import ApiClient from "../ApiClient";
import ErrorResponse from '../model/ErrorResponse';
import HealthConditionRequest from '../model/HealthConditionRequest';
import HealthConditionResponse from '../model/HealthConditionResponse';
import HealthConditionsResponse from '../model/HealthConditionsResponse';

/**
* HealthCondition service.
* @module api/HealthConditionApi
* @version 01.00.00
*/
export default class HealthConditionApi {

    /**
    * Constructs a new HealthConditionApi. 
    * @alias module:api/HealthConditionApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create a new health condition
     * Health condition must have a diagnosis_code, a protocol and a device ident
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/HealthConditionResponse} and HTTP response
     */
    createHealthConditionWithHttpInfo(body) {
      let postBody = body;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API-Key', 'Authentication'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = HealthConditionResponse;

      return this.apiClient.callApi(
        '/health_conditions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a new health condition
     * Health condition must have a diagnosis_code, a protocol and a device ident
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/HealthConditionResponse}
     */
    createHealthCondition(body) {
      return this.createHealthConditionWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a health condition
     * Delete a specific resource identified by the id in the URL.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteHealthConditionWithHttpInfo(id) {
      let postBody = null;

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API-Key', 'Authentication'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/health_conditions/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a health condition
     * Delete a specific resource identified by the id in the URL.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteHealthCondition(id) {
      return this.deleteHealthConditionWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a single health condition
     * Get a specific health condition identified by the id in the URL. Possible include value: &#x60;&#x60;asset_status,tenant,causes,causes.remedies&#x60;&#x60;
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/HealthConditionResponse} and HTTP response
     */
    getHealthConditionByIdWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'include': opts['include']
      };
      let headerParams = {
        'Accept-Language': opts['acceptLanguage']
      };
      let formParams = {
      };

      let authNames = ['API-Key', 'Authentication'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = HealthConditionResponse;

      return this.apiClient.callApi(
        '/health_conditions/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single health condition
     * Get a specific health condition identified by the id in the URL. Possible include value: &#x60;&#x60;asset_status,tenant,causes,causes.remedies&#x60;&#x60;
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/HealthConditionResponse}
     */
    getHealthConditionById(id, opts) {
      return this.getHealthConditionByIdWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a range of health conditions
     * Returns a list of all health conditions. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.  Possible include value: &#x60;&#x60;asset_status,tenant,causes,causes.remedies&#x60;&#x60;
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/HealthConditionsResponse} and HTTP response
     */
    getHealthConditionsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
        'include': opts['include'],
        'asset_status_id': opts['assetStatusId'],
        'tenant_id': opts['tenantId'],
        'diagnosis_code': opts['diagnosisCode'],
        'device_ident': opts['deviceIdent'],
        'protocol': opts['protocol'],
        'protocol_version': opts['protocolVersion'],
        'hidden': opts['hidden'],
        'order_by': opts['orderBy']
      };
      let headerParams = {
        'Accept-Language': opts['acceptLanguage']
      };
      let formParams = {
      };

      let authNames = ['API-Key', 'Authentication'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = HealthConditionsResponse;

      return this.apiClient.callApi(
        '/health_conditions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a range of health conditions
     * Returns a list of all health conditions. You can apply query parameters in the request to get a filtered list. If the query has no matches, the response will show an empty array.  Possible include value: &#x60;&#x60;asset_status,tenant,causes,causes.remedies&#x60;&#x60;
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/HealthConditionsResponse}
     */
    getHealthConditions(opts) {
      return this.getHealthConditionsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a health condition
     * Update accessible parameters of the requested resource.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    updateHealthConditionWithHttpInfo(body, id) {
      let postBody = body;

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API-Key', 'Authentication'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/health_conditions/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a health condition
     * Update accessible parameters of the requested resource.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    updateHealthCondition(body, id) {
      return this.updateHealthConditionWithHttpInfo(body, id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}