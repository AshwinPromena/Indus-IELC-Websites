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
import { GetCurrentOpeningsModel } from './getCurrentOpeningsModel';


export interface GetCurrentOpeningsModelPagedResponse { 
    readonly pageIndex?: number;
    readonly totalPages?: number;
    readonly totalRecords?: number;
    readonly data?: Array<GetCurrentOpeningsModel> | null;
    readonly hasPreviousPage?: boolean;
    readonly hasNextPage?: boolean;
}
