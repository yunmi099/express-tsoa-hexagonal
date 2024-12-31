/**
 * Interface representing the parameters for searching news articles.
 *
 * @interface NewsSearchRequest
 *
 * @author Yunmi Jung
 * @date 2024-08-19
 *
 **/

export interface NewsSearchRequest {
  searchAfter: string[];
  lastId: number;
  order: string;
  type: number;
  language: string;
  startDate: string;
  endDate: string;
  customMenuId: string;
}
