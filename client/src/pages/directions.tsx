import ContactInfo from "@/components/sections/contact-info";
import Transportation from "@/components/sections/transportation";

export default function Directions() {
  return (
    <div>
      {/* Directions Hero */}
      <section className="py-20 bg-neutral">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-6">오시는 길</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            저희 사무실로 방문하시는 길을 안내드립니다. 언제든지 편리한 시간에 방문해 주세요.
          </p>
        </div>
      </section>

      <ContactInfo />
      <Transportation />
    </div>
  );
}
