export default function Vision() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-blue-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">우리의 비전</h2>
        <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed">
          기술과 인간이 조화를 이루는 더 나은 세상을 만들어가며,<br />
          고객과 함께 지속 가능한 미래를 창조합니다.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">10+</div>
            <p className="text-lg">년간의 경험</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">500+</div>
            <p className="text-lg">완료된 프로젝트</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">100+</div>
            <p className="text-lg">만족한 고객</p>
          </div>
        </div>
      </div>
    </section>
  );
}
