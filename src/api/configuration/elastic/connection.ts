import { Client } from '@elastic/elasticsearch';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as yaml from 'js-yaml';
import * as path from 'path';

interface ElasticsearchConfig {
  host: string;
  port: string;
}

interface Config {
  elasticSearch: {
    live: ElasticsearchConfig;
    dev: ElasticsearchConfig;
    release: ElasticsearchConfig;
  };
}

dotenv.config();
// 환경에 따른 경로 설정
const isDocker = process.env.IS_DOCKER === 'true'; // Docker 환경인지 확인하는 플래그
const filePath = isDocker
  ? '/app/configuration.yml' // Docker 환경에서의 절대 경로
  : path.resolve(__dirname, '../../../../configuration.yml'); // 로컬 환경에서의 상대 경로
const fileContents = fs.readFileSync(filePath, 'utf8');
const config = yaml.load(fileContents) as Config;

const environment = process.env.NODE_ENV || 'dev';
const esConfig =
  config.elasticSearch[environment as keyof Config['elasticSearch']];

const client = new Client({
  node: esConfig.host,
  auth: {
    username: process.env.ELASTIC_USERNAME as string,
    password: process.env.ELASTIC_PASSWORD as string
  }
});
// Elasticsearch 연결 테스트
export async function testConnection() {
  try {
    await client.ping();
    console.log('Elasticsearch 연결 성공');
  } catch (error) {
    console.error('Elasticsearch 연결 실패:', error);
  }
}
export default client;
