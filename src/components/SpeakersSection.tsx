import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mic, Calendar, Send } from "lucide-react";

export const SpeakersSection = () => {
  const speakingSlots = [
    {
      title: "Keynote Speaker",
      duration: "18 minutes",
      description: "Opening keynote on the future of Python in Bangladesh's tech ecosystem"
    },
    {
      title: "Technical Deep Dive",
      duration: "18 minutes", 
      description: "Advanced Python concepts, frameworks, or emerging technologies"
    },
    {
      title: "Community Spotlight",
      duration: "18 minutes",
      description: "Python projects making impact in Bangladesh or open source contributions"
    },
    {
      title: "Lightning Talk",
      duration: "18 minutes",
      description: "Quick insights, tips, or project showcases from community members"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-python-yellow text-python-blue-dark">
            Call for Speakers
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Share Your <span className="text-python-blue">Python Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We're looking for passionate speakers to share their knowledge, experiences, and insights 
            with the Python Dhaka community. Whether you're a seasoned developer or just starting out, 
            we want to hear your story.
          </p>
          
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-400 p-4 rounded-lg max-w-2xl mx-auto">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-red-400 mr-2" />
              <p className="text-red-800 font-medium">
                Proposal Deadline: June 30, 2025
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {speakingSlots.map((slot, index) => (
            <Card key={index} className="border-2 hover:border-python-blue transition-colors duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-gray-900">{slot.title}</CardTitle>
                  <Badge variant="outline" className="text-python-blue border-python-blue">
                    {slot.duration}
                  </Badge>
                </div>
                <CardDescription className="text-gray-600">
                  {slot.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-500">
                  <Mic className="h-4 w-4 mr-2" />
                  <span>Available speaking slot</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-python-blue to-python-blue-dark rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Speak?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Submit your speaking proposal and join our lineup of amazing speakers. 
            We provide speaker support, mentorship, and a platform to showcase your expertise.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-sm">
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-semibold text-python-yellow mb-2">What to Include</h4>
              <ul className="text-blue-100 space-y-1">
                <li>• Talk title & abstract</li>
                <li>• Speaker bio</li>
                <li>• Previous speaking experience</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-semibold text-python-yellow mb-2">We Provide</h4>
              <ul className="text-blue-100 space-y-1">
                <li>• Technical support</li>
                <li>• Speaker mentorship</li>
                <li>• Recording & promotion</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-semibold text-python-yellow mb-2">Topics We Love</h4>
              <ul className="text-blue-100 space-y-1">
                <li>• Python frameworks</li>
                <li>• Data science & AI</li>
                <li>• Open source projects</li>
              </ul>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="bg-python-yellow text-python-blue-dark hover:bg-python-yellow-dark font-bold px-8 py-4 text-lg transition-all transform hover:scale-105"
          >
            <Send className="h-5 w-5 mr-2" />
            Submit Speaking Proposal
          </Button>
        </div>
      </div>
    </section>
  );
};
