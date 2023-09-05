/* tslint:disable */
/* eslint-disable */
/**
 * swapi.dev
 * Adapted schema for swapi.dev
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { Configuration } from "../configuration";
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from "axios";
import globalAxios from "axios";
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from "../common";
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError,
} from "../base";
// @ts-ignore
import { Species } from "../models";
/**
 * SpeciesApi - axios parameter creator
 * @export
 */
export const SpeciesApiAxiosParamCreator = function (
  configuration?: Configuration,
) {
  return {
    /**
     * Get a specific species by id.
     * @param {string} id Id of the species.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSpeciesById: async (
      id: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getSpeciesById", "id", id);
      const localVarPath = `/api/species/{id}`.replace(
        `{${"id"}}`,
        encodeURIComponent(String(id)),
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication apikeyQuery required
      await setApiKeyToObject(localVarQueryParameter, "code", configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * SpeciesApi - functional programming interface
 * @export
 */
export const SpeciesApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = SpeciesApiAxiosParamCreator(configuration);
  return {
    /**
     * Get a specific species by id.
     * @param {string} id Id of the species.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getSpeciesById(
      id: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Species>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getSpeciesById(
        id,
        options,
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration,
      );
    },
  };
};

/**
 * SpeciesApi - factory interface
 * @export
 */
export const SpeciesApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = SpeciesApiFp(configuration);
  return {
    /**
     * Get a specific species by id.
     * @param {SpeciesApiGetSpeciesByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSpeciesById(
      requestParameters: SpeciesApiGetSpeciesByIdRequest,
      options?: AxiosRequestConfig,
    ): AxiosPromise<Species> {
      return localVarFp
        .getSpeciesById(requestParameters.id, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for getSpeciesById operation in SpeciesApi.
 * @export
 * @interface SpeciesApiGetSpeciesByIdRequest
 */
export interface SpeciesApiGetSpeciesByIdRequest {
  /**
   * Id of the species.
   * @type {string}
   * @memberof SpeciesApiGetSpeciesById
   */
  readonly id: string;
}

/**
 * SpeciesApi - object-oriented interface
 * @export
 * @class SpeciesApi
 * @extends {BaseAPI}
 */
export class SpeciesApi extends BaseAPI {
  /**
   * Get a specific species by id.
   * @param {SpeciesApiGetSpeciesByIdRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SpeciesApi
   */
  public getSpeciesById(
    requestParameters: SpeciesApiGetSpeciesByIdRequest,
    options?: AxiosRequestConfig,
  ) {
    return SpeciesApiFp(this.configuration)
      .getSpeciesById(requestParameters.id, options)
      .then((request) => request(this.axios, this.basePath));
  }
}