import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const VerifyEmailPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState<'verifying' | 'success' | 'error'>('verifying');
  const [message, setMessage] = useState('이메일을 인증하는 중입니다...');

  useEffect(() => {
    const verifyEmail = async () => {
      const token = searchParams.get('token');
      if (!token) {
        setStatus('error');
        setMessage('유효하지 않은 인증 링크입니다.');
        return;
      }

      try {
        const response = await fetch(`http://localhost:5000/api/auth/verify-email/${token}`, {
          method: 'GET',
          credentials: 'include'
        });

        const data = await response.json();

        if (response.ok) {
          setStatus('success');
          setMessage('이메일이 성공적으로 인증되었습니다.');
          setTimeout(() => {
            navigate('/login');
          }, 3000);
        } else {
          setStatus('error');
          setMessage(data.message || '이메일 인증에 실패했습니다.');
        }
      } catch (error) {
        setStatus('error');
        setMessage('서버와의 통신 중 오류가 발생했습니다.');
      }
    };

    verifyEmail();
  }, [searchParams, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            이메일 인증
          </h2>
        </div>
        <div className={`rounded-md p-4 ${
          status === 'verifying' ? 'bg-blue-50' :
          status === 'success' ? 'bg-green-50' :
          'bg-red-50'
        }`}>
          <div className={`text-sm ${
            status === 'verifying' ? 'text-blue-700' :
            status === 'success' ? 'text-green-700' :
            'text-red-700'
          }`}>
            {message}
          </div>
        </div>
        {status === 'error' && (
          <div className="text-center">
            <button
              onClick={() => navigate('/login')}
              className="text-indigo-600 hover:text-indigo-500"
            >
              로그인 페이지로 이동
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyEmailPage;
