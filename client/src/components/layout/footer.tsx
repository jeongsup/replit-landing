import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4">COMPANY</div>
            <p className="text-gray-300">
              혁신과 성장을 이끄는 믿을 수 있는 파트너로서 고객과 함께 더 나은 미래를 만들어갑니다.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">빠른 링크</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/company">
                  <a className="text-gray-300 hover:text-white transition-colors">회사소개</a>
                </Link>
              </li>
              <li>
                <Link href="/directions">
                  <a className="text-gray-300 hover:text-white transition-colors">오시는 길</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">연락처</h3>
            <div className="text-gray-300 space-y-1">
              <p>Tel: 02-1234-5678</p>
              <p>Email: info@company.co.kr</p>
              <p>서울특별시 강남구 테헤란로 123</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 COMPANY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
