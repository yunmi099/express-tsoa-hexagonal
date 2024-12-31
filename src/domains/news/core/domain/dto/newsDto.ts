import { BaseDto } from '@express-hexagonal-practice/domains/common/core/domain/dto/baseDto';
import { Link } from '@express-hexagonal-practice/domains/common/core/domain/entity/link';
import { ImageLink } from '../entity/imgLink';

export class NewsDto extends BaseDto {
  constructor(
    public readonly id: number,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly deletedAt: Date | null, // nullable 처리
    public readonly timestamp: Date, // News 클래스의 timestamp 필드에 매핑
    public readonly time: string, // hh:mm:ss
    public readonly category: string,
    public readonly subcategory: string, // subcategory 필드 추가
    public readonly title: string,
    public readonly titleHl: string = '', // 기본값 처리
    public readonly content: string,
    public readonly contentHl: string = '', // 기본값 처리
    public readonly press: string,
    public readonly pressHl: string = '', // 기본값 처리
    public readonly link: Link,
    public readonly imageLink: ImageLink,
    public readonly hasEn: number, // forcely에 매핑됨
    public readonly searchAfter: string[] = [], // 기본값 처리
    public readonly newsId: string,
    public readonly date: string
  ) {
    super(id, createdAt, updatedAt, deletedAt);
  }
}
