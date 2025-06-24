import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you would typically send the form data to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "문의가 접수되었습니다",
        description: "빠른 시일 내에 연락드리겠습니다.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "오류가 발생했습니다",
        description: "다시 시도해주세요.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-neutral p-8 rounded-xl">
      <h3 className="text-xl font-semibold text-secondary mb-6">문의하기</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2">
            이름
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="성함을 입력해주세요"
            required
            className="w-full"
          />
        </div>
        <div>
          <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2">
            이메일
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="이메일을 입력해주세요"
            required
            className="w-full"
          />
        </div>
        <div>
          <Label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2">
            문의내용
          </Label>
          <Textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            placeholder="문의하실 내용을 입력해주세요"
            required
            className="w-full"
          />
        </div>
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
        >
          {isSubmitting ? "전송 중..." : "문의 보내기"}
        </Button>
      </form>
    </div>
  );
}
