/**
 * IndusWebsite
 * IndusWebsite
 *
 * The version of the OpenAPI document: Phase 1
 * Contact: deekshithkr19@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { GetArticleModel } from './getArticleModel';


export interface GetArticleModelPagedResponse { 
    readonly pageIndex?: number;
    readonly totalPages?: number;
    readonly totalRecords?: number;
    readonly data?: Array<GetArticleModel> | null;
    readonly hasPreviousPage?: boolean;
    readonly hasNextPage?: boolean;
}

