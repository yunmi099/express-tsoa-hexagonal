import { RegisterRoutes } from '@express-hexagonal-practice/generated/routes';
import * as swaggerDocument from '@express-hexagonal-practice/generated/swagger.json';
import express, { Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import { errorHandler } from './api/common/response';

/**
 * App data setting
 */
const app = express();
const port: number = 3000;
const cors = require('cors');
// CORS 전체 허용 설정
app.use(cors());

// 또는 특정 설정으로 CORS 전체 허용
app.use(
  cors({
    origin: '*', // 모든 도메인 허용
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // 모든 메서드 허용
    allowedHeaders: ['Content-Type', 'Authorization'], // 모든 헤더 허용
    credentials: true // 쿠키를 포함한 자격 증명 허용
  })
);
/**
 * Register router
 */
// 라우터 생성 및 등록
const basePath = '/api/v1';
const router = express.Router();
RegisterRoutes(router);

// basePath에 라우터 적용
app.use(basePath, router);

app.get('/', async (req: Request, res: Response) => {
  res.send('hello express-hexagonal-practice');
});

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Swagger JSON 직접 제공
app.get('/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerDocument);
});
/**
 * App boot
 */
app.use(errorHandler);
app.listen(port, () => console.log(`SERVER ON! PORT : ${port}`));
