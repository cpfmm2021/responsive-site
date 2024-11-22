import { motion } from 'framer-motion';

export default function Signup() {
  return (
    <div className="min-h-screen pt-20 pb-12 flex flex-col bg-gray-50 dark:bg-gray-900">
      <div className="container flex-grow flex items-center justify-center">
        <motion.div 
          className="max-w-md w-full mx-auto rounded-lg shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="px-6 py-8 bg-white dark:bg-gray-800">
            <h2 className="text-3xl font-bold text-center mb-8">
              회원가입
            </h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  이름
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                  placeholder="홍길동"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  이메일
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  비밀번호
                </label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                  placeholder="••••••••"
                />
              </div>
              <div>
                <label htmlFor="password-confirm" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  비밀번호 확인
                </label>
                <input
                  type="password"
                  id="password-confirm"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                  placeholder="••••••••"
                />
              </div>
              <div className="flex items-center">
                <input
                  id="terms"
                  type="checkbox"
                  className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                  <span>
                    <a href="#" className="text-primary hover:text-primary/80">이용약관</a>
                    {' '}및{' '}
                    <a href="#" className="text-primary hover:text-primary/80">개인정보처리방침</a>
                    에 동의합니다
                  </span>
                </label>
              </div>
              <button
                type="submit"
                className="w-full btn-primary"
              >
                회원가입
              </button>
            </form>
            <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
              이미 계정이 있으신가요?{' '}
              <a href="/login" className="text-primary hover:text-primary/80 font-medium">
                로그인
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
