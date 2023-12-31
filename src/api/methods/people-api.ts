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
import { Person } from "../models";
// @ts-ignore
import { PersonResult } from "../models";
/**
 * PeopleApi - axios parameter creator
 * @export
 */
export const PeopleApiAxiosParamCreator = function (
  configuration?: Configuration,
) {
  return {
    /**
     * Get all people.
     * @param {number} [page]
     * @param {string} [search]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPeople: async (
      page?: number,
      search?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/people`;
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

      if (page !== undefined) {
        localVarQueryParameter["page"] = page;
      }

      if (search !== undefined) {
        localVarQueryParameter["search"] = search;
      }

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
    /**
     * Get a specific person by id.
     * @param {string} id Id of the person.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPersonById: async (
      id: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getPersonById", "id", id);
      const localVarPath = `/api/people/{id}`.replace(
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
 * PeopleApi - functional programming interface
 * @export
 */
export const PeopleApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = PeopleApiAxiosParamCreator(configuration);
  return {
    /**
     * Get all people.
     * @param {number} [page]
     * @param {string} [search]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getPeople(
      page?: number,
      search?: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<PersonResult>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getPeople(
        page,
        search,
        options,
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration,
      );
    },
    /**
     * Get a specific person by id.
     * @param {string} id Id of the person.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getPersonById(
      id: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Person>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getPersonById(
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
 * PeopleApi - factory interface
 * @export
 */
export const PeopleApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = PeopleApiFp(configuration);
  return {
    /**
     * Get all people.
     * @param {PeopleApiGetPeopleRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPeople(
      requestParameters: PeopleApiGetPeopleRequest = {},
      options?: AxiosRequestConfig,
    ): AxiosPromise<PersonResult> {
      return localVarFp
        .getPeople(requestParameters.page, requestParameters.search, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Get a specific person by id.
     * @param {PeopleApiGetPersonByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPersonById(
      requestParameters: PeopleApiGetPersonByIdRequest,
      options?: AxiosRequestConfig,
    ): AxiosPromise<Person> {
      return localVarFp
        .getPersonById(requestParameters.id, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for getPeople operation in PeopleApi.
 * @export
 * @interface PeopleApiGetPeopleRequest
 */
export interface PeopleApiGetPeopleRequest {
  /**
   *
   * @type {number}
   * @memberof PeopleApiGetPeople
   */
  readonly page?: number;

  /**
   *
   * @type {string}
   * @memberof PeopleApiGetPeople
   */
  readonly search?: string;
}

/**
 * Request parameters for getPersonById operation in PeopleApi.
 * @export
 * @interface PeopleApiGetPersonByIdRequest
 */
export interface PeopleApiGetPersonByIdRequest {
  /**
   * Id of the person.
   * @type {string}
   * @memberof PeopleApiGetPersonById
   */
  readonly id: string;
}

/**
 * PeopleApi - object-oriented interface
 * @export
 * @class PeopleApi
 * @extends {BaseAPI}
 */
export class PeopleApi extends BaseAPI {
  /**
   * Get all people.
   * @param {PeopleApiGetPeopleRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PeopleApi
   */
  public getPeople(
    requestParameters: PeopleApiGetPeopleRequest = {},
    options?: AxiosRequestConfig,
  ) {
    return PeopleApiFp(this.configuration)
      .getPeople(requestParameters.page, requestParameters.search, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Get a specific person by id.
   * @param {PeopleApiGetPersonByIdRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PeopleApi
   */
  public getPersonById(
    requestParameters: PeopleApiGetPersonByIdRequest,
    options?: AxiosRequestConfig,
  ) {
    return PeopleApiFp(this.configuration)
      .getPersonById(requestParameters.id, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
