
import { Card, CardContent } from "@/components/ui/card";
import { Code, Users, Lightbulb, Coffee } from "lucide-react";

export const AboutSection = () => {
  const features = [
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Learn from industry experts and discover the latest Python technologies and best practices."
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Connect with fellow Python enthusiasts, developers, and tech leaders from across Bangladesh."
    },
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description: "Explore cutting-edge projects, startup ideas, and innovative solutions built with Python."
    },
    {
      icon: Coffee,
      title: "Networking",
      description: "Enjoy meaningful conversations over refreshments and build lasting professional relationships."
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why <span className="text-python-blue">Python Dhaka?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Python Dhaka is Bangladesh's premier Python community event, bringing together developers, 
            data scientists, and tech enthusiasts for an afternoon of learning, networking, and inspiration. 
            Join us for 3 hours of amazing talks, hands-on workshops, and meaningful connections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-python-blue to-python-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dhaka Landmarks Illustration */}
        <div className="bg-gradient-to-r from-python-blue to-python-blue-dark rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Celebrating Dhaka's Tech Spirit</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            From the iconic Shaheed Minar to the modern Sangsad Bhaban, Dhaka represents progress and innovation. 
            Our Python community embodies the same spirit of growth and technological advancement.
          </p>
          <div className="flex justify-center items-center space-x-8 text-python-yellow">
            <div className="text-center">
              <div className="w-16 h-20 bg-python-yellow/20 rounded-t-full mb-2 mx-auto"></div>
              <p className="text-sm">Shaheed Minar</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-16 bg-python-yellow/20 rounded-lg mb-2 mx-auto"></div>
              <p className="text-sm">Sangsad Bhaban</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-24 bg-python-yellow/20 rounded-t-lg mb-2 mx-auto"></div>
              <p className="text-sm">Smrity Shoudho</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
