import { CheckCircle } from "lucide-react";

export default function About() {
  return (
    <section className="py-20 bg-neutral" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">회사 소개</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            우리는 고객의 성공을 위해 최선을 다하는 전문적인 솔루션 제공업체입니다
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Modern office workspace with employees collaborating" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-secondary">우리의 미션</h3>
            <p className="text-gray-600 leading-relaxed">
              혁신적인 기술과 창의적인 솔루션으로 고객의 비즈니스 성장을 돕고, 
              지속 가능한 가치를 창출하여 사회에 기여하는 것이 우리의 사명입니다.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-primary text-xl mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-secondary">전문성</h4>
                  <p className="text-gray-600">깊이 있는 전문 지식과 풍부한 경험</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-primary text-xl mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-secondary">신뢰성</h4>
                  <p className="text-gray-600">약속을 지키는 신뢰할 수 있는 파트너십</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-primary text-xl mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-secondary">혁신</h4>
                  <p className="text-gray-600">끊임없는 연구개발과 창의적 사고</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
