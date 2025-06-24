import { Train, Bus, Car } from "lucide-react";

export default function Transportation() {
  const transportOptions = [
    {
      icon: Train,
      title: "지하철",
      info: [
        "2호선 강남역 3번 출구",
        "도보 5분",
        "9호선 신논현역 1번 출구",
        "도보 7분"
      ],
      bgColor: "bg-green-500"
    },
    {
      icon: Bus,
      title: "버스",
      info: [
        "간선버스: 146, 740, 750",
        "지선버스: 3414, 6411",
        "광역버스: 1005, 7007",
        "강남역 정류장 하차"
      ],
      bgColor: "bg-blue-500"
    },
    {
      icon: Car,
      title: "자가용",
      info: [
        "건물 지하 주차장 이용",
        "주차요금: 시간당 2,000원",
        "방문시 주차할인 가능",
        "(3시간 무료)"
      ],
      bgColor: "bg-red-500"
    }
  ];

  return (
    <section className="py-20 bg-neutral">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-secondary text-center mb-12">교통편 안내</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {transportOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className={`w-16 h-16 ${option.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className="text-white text-2xl" size={24} />
                </div>
                <h3 className="font-semibold text-secondary mb-3">{option.title}</h3>
                <div className="text-gray-600 text-sm space-y-1">
                  {option.info.map((line, lineIndex) => (
                    <p key={lineIndex}>{line}</p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
