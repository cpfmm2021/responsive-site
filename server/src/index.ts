import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// CORS 설정
app.use(cors({
  origin: 'http://localhost:1875',
  credentials: true
}));

// 미들웨어
app.use(express.json());

// 라우트
app.use('/api/auth', authRoutes);

// MongoDB 연결
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio')
  .then(() => {
    console.log('MongoDB 연결 성공');
    
    // 서버 시작
    app.listen(port, () => {
      console.log(`서버가 http://localhost:${port} 에서 실행 중입니다`);
    });
  })
  .catch((error) => {
    console.error('MongoDB 연결 실패:', error);
  });
