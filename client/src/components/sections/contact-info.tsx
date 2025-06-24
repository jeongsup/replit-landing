import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/ui/contact-form";

export default function ContactInfo() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map Container */}
          <div>
            <h2 className="text-2xl font-semibold text-secondary mb-6">위치 안내</h2>
            <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                alt="Seoul business district with modern skyscrapers" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary bg-opacity-20 flex items-center justify-center">
                <div className="text-white text-center">
                  <MapPin className="text-4xl mb-4 mx-auto" size={48} />
                  <p className="text-lg font-semibold">지도가 여기에 표시됩니다</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-secondary mb-6">연락처 정보</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">주소</h3>
                    <p className="text-gray-600">
                      서울특별시 강남구 테헤란로 123<br />
                      ABC빌딩 12층 1201호
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">전화번호</h3>
                    <p className="text-gray-600">02-1234-5678</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">이메일</h3>
                    <p className="text-gray-600">info@company.co.kr</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">운영시간</h3>
                    <div className="text-gray-600">
                      <p>평일: 오전 9시 - 오후 6시</p>
                      <p>토요일: 오전 9시 - 오후 1시</p>
                      <p>일요일 및 공휴일: 휴무</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
