import { Settings, TrendingUp, Shield } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Settings,
      title: "솔루션 개발",
      description: "고객 맞춤형 소프트웨어 솔루션 개발 및 시스템 통합 서비스를 제공합니다."
    },
    {
      icon: TrendingUp,
      title: "컨설팅",
      description: "비즈니스 프로세스 최적화와 디지털 전환을 위한 전문 컨설팅을 제공합니다."
    },
    {
      icon: Shield,
      title: "보안 서비스",
      description: "정보보안 및 사이버 보안 솔루션으로 안전한 비즈니스 환경을 구축합니다."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">주요 서비스</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            고객의 다양한 니즈에 맞춘 전문적인 서비스를 제공합니다
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="text-center p-8 rounded-xl bg-neutral hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="text-white text-2xl" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
