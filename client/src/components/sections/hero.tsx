import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-800"></div>
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          혁신과 성장을 이끄는<br />
          <span className="text-yellow-300">믿을 수 있는 파트너</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          고객과 함께 성장하며 더 나은 미래를 만들어갑니다
        </p>
        <Button 
          onClick={scrollToAbout}
          className="bg-accent hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          자세히 알아보기
        </Button>
      </div>
    </section>
  );
}
