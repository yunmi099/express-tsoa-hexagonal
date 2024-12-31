import { Link } from 'src/domains/common/core/domain/entity/link';
import { NewsDto } from '../dto/newsDto';
import { ImageLink } from './imgLink';

export class News {
  private readonly timestamp: Date; // 게시 시간
  private readonly time: string; // hh:mm:ss 형식
  private readonly category: string;
  private readonly subcategory: string; // 데이터의 'subgory'에 맞춤
  private readonly title: string;
  private readonly titleHl: string = ''; // 현재 데이터에서 하이라이트 없음, 기본값 처리
  private readonly content: string;
  private readonly contentHl: string = ''; // 현재 데이터에서 하이라이트 없음, 기본값 처리
  private readonly press: string;
  private readonly pressHl: string = ''; // 현재 데이터에서 하이라이트 없음, 기본값 처리
  private readonly link: Link;
  private readonly imageLink: ImageLink;
  private readonly hasEn: number; // 데이터의 'forcely' 필드로 매핑
  private readonly id: number;
  private readonly searchAfter: string[] = []; // 현재 데이터에 없음, 기본값 처리
  private readonly newsId: string;
  private readonly date: string;
  private readonly createdAt: Date;
  private readonly updatedAt: Date;
  private readonly deletedAt: Date | null = null; // 데이터에 deletedAt 필드 없음

  constructor(
    id: number,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date | null,
    timestamp: Date,
    time: string,
    category: string,
    subcategory: string,
    title: string,
    content: string,
    press: string,
    link: string,
    imageLink: string,
    hasEn: number,
    titleHl: string = '',
    contentHl: string = '',
    pressHl: string = '',
    searchAfter: string[] = [],
    newsId: string,
    date: string
  ) {
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
    this.timestamp = timestamp;
    this.time = time;
    this.category = category;
    this.subcategory = subcategory;
    this.title = title;
    this.titleHl = titleHl;
    this.content = content;
    this.contentHl = contentHl;
    this.press = press;
    this.pressHl = pressHl;
    this.link = new Link(link);
    this.imageLink = new ImageLink(imageLink);
    this.hasEn = hasEn;
    this.searchAfter = searchAfter;
    this.newsId = newsId;
    this.date = date;
  }

  convertToDto(): NewsDto {
    return new NewsDto(
      this.id,
      this.createdAt,
      this.updatedAt,
      this.deletedAt,
      this.timestamp,
      this.time,
      this.subcategory,
      this.category,
      this.title,
      this.titleHl,
      this.content,
      this.contentHl,
      this.press,
      this.pressHl,
      this.link,
      this.imageLink,
      this.hasEn,
      this.searchAfter,
      this.newsId,
      this.date
    );
  }
}
