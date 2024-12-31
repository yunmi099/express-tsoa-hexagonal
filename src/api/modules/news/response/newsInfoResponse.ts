import { NewsDto } from 'src/domains/news/core/domain/dto/newsDto';

/**
 * Interface representing the response structure for news information.
 *
 * @interface NewsInfoResponse
 *
 * @author Yunmi Jung
 * @date 2024-08-19
 *
 * @example
 * const newsInfo: NewsInfoResponse = {
 *   code: 200,
 *   data: {
 *     count: 321,
 *     list: [{
 *       searchAfter: ["20230418", "19:15", "https://www.nikkei.com/article/DGXZQOUB267YU0W4A720C2000000/"],
 *       newsId: "https://www.nikkei.com/article/DGXZQOUB267YU0W4A720C2000000/",
 *       date: "20210208",
 *       time: "10:11",
 *       category: "キャッシュレス",
 *       title: "セゾン、カード審査を大幅刷新　信用度別に手続き簡素化",
 *       titleHl: "<mark>セゾン、カード審査を大幅刷新</mark>　信用度別に手続き簡素化",
 *       content: " 日経の記事利用サービスについて 企業での記事共有や会議資料への転載・複製、注文印刷などをご希望の方は、リンク先をご覧ください。",
 *       contentHl: "<mark>개인형 이동장치</mark>로 인한 시민 불편 최소화 및 안전 보장 기대 광주CBS 이승훈 기자 정순애 ...",
 *       press: "日経電子版",
 *       pressHl: "<mark>日経電子版</mark>",
 *       link: "https://www.nikkei.com/article/DGXZQOUB267YU0W4A720C2000000/",
 *       imgLink: "https://www.yomiuri.co.jp//media/2024/08/20240808-OYT1I50051-1.jpg?type=large",
 *       hasEn: 0
 *     }]
 *   }
 * };
 *
 * @apiParam {string} [keyword] - The search keyword.
 *
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   "code": 200,
 *   "data": {
 *     "count": 321,
 *     "list": [{
 *       "searchAfter": ["20230418", "19:15", "https://www.nikkei.com/article/DGXZQOUB267YU0W4A720C2000000/"],
 *       "newsId": "https://www.nikkei.com/article/DGXZQOUB267YU0W4A720C2000000/",
 *       "date": "20210208",
 *       "time": "10:11",
 *       "category": "キャッシュレス",
 *       "title": "セゾン、カード審査を大幅刷新　信用度別に手続き簡素化",
 *       "titleHl": "<mark>セゾン、カード審査を大幅刷新</mark>　信用度別に手続き簡素化",
 *       "content": " 日経の記事利用サービスについて 企業での記事共有や会議資料への転載・複製、注文印刷などをご希望の方は、リンク先をご覧ください。",
 *       "contentHl": "<mark>개인형 이동장치</mark>로 인한 시민 불편 최소화 및 안전 보장 기대 광주CBS 이승훈 기자 정순애 ...",
 *       "press": "日経電子版",
 *       "pressHl": "<mark>日経電子版</mark>",
 *       "link": "https://www.nikkei.com/article/DGXZQOUB267YU0W4A720C2000000/",
 *       "imgLink": "https://www.yomiuri.co.jp//media/2024/08/20240808-OYT1I50051-1.jpg?type=large",
 *       "hasEn": 0
 *     }]
 *   }
 * }
 */

/**
 * Class representing a list of news information responses.
 */
export class NewsInfoResponses {
  count: number;
  list: NewsInfoResponse[];

  constructor(dtos: NewsDto[]) {
    this.count = dtos.length;
    this.list = dtos.map(dto => new NewsInfoResponse(dto));
  }
}

/**
 * Class representing a single news information response.
 */
export class NewsInfoResponse {
  searchAfter: string[];
  newsId: string;
  date: string;
  time: string;
  category: string;
  subcategory: string; // subcategory 추가
  title: string;
  titleHl: string;
  content: string;
  contentHl: string;
  press: string;
  pressHl: string;
  link: string;
  imgLink: string;
  hasEn: number;

  constructor(dto: NewsDto) {
    this.searchAfter = dto.searchAfter;
    this.newsId = dto.newsId;
    this.date = dto.date;
    this.time = dto.time;
    this.category = dto.category;
    this.subcategory = dto.subcategory; // subcategory 추가
    this.title = dto.title;
    this.titleHl = dto.titleHl;
    this.content = dto.content;
    this.contentHl = dto.contentHl;
    this.press = dto.press;
    this.pressHl = dto.pressHl;
    this.link = dto.link.getUrl(); // Link 객체의 URL 추출
    this.imgLink = dto.imageLink ? dto.imageLink.getUrl() : ''; // ImageLink 객체의 URL 추출
    this.hasEn = dto.hasEn;
  }
}
