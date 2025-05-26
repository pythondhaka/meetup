import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-python-blue via-python-blue-dark to-slate-900 text-white">
      {/* Background Pattern with Python Logos */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 animate-float">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-python-yellow">
            <path d="M49.994 1.338C23.18 1.338 9.6 15.182 9.6 30.758v11.668h40.774v5.166H9.6S-1.6 44.422-1.6 68.652c0 24.23 9.6 23.384 9.6 23.384h5.734V80.932s-.308-9.6 9.444-9.6h40.466s9.136.154 9.136-8.83V30.758S75.58 1.338 49.994 1.338zM36.423 8.6c2.784 0 5.044 2.26 5.044 5.044s-2.26 5.044-5.044 5.044-5.044-2.26-5.044-5.044 2.26-5.044 5.044-5.044z"/>
            <path d="M50.006 98.662C76.82 98.662 90.4 84.818 90.4 69.242V57.574H49.626v-5.166H90.4s11.2 3.17 11.2-21.06c0-24.23-9.6-23.384-9.6-23.384h-5.734v11.104s.308 9.6-9.444 9.6H36.356s-9.136-.154-9.136 8.83v31.744S24.42 98.662 50.006 98.662zM63.577 91.4c-2.784 0-5.044-2.26-5.044-5.044s2.26-5.044 5.044-5.044 5.044 2.26 5.044 5.044-2.26 5.044-5.044 5.044z"/>
          </svg>
        </div>
        <div className="absolute top-40 right-32 w-24 h-24 animate-float" style={{animationDelay: '1s'}}>
          <svg viewBox="0 0 100 100" className="w-full h-full fill-python-yellow">
            <path d="M49.994 1.338C23.18 1.338 9.6 15.182 9.6 30.758v11.668h40.774v5.166H9.6S-1.6 44.422-1.6 68.652c0 24.23 9.6 23.384 9.6 23.384h5.734V80.932s-.308-9.6 9.444-9.6h40.466s9.136.154 9.136-8.83V30.758S75.58 1.338 49.994 1.338zM36.423 8.6c2.784 0 5.044 2.26 5.044 5.044s-2.26 5.044-5.044 5.044-5.044-2.26-5.044-5.044 2.26-5.044 5.044-5.044z"/>
            <path d="M50.006 98.662C76.82 98.662 90.4 84.818 90.4 69.242V57.574H49.626v-5.166H90.4s11.2 3.17 11.2-21.06c0-24.23-9.6-23.384-9.6-23.384h-5.734v11.104s.308 9.6-9.444 9.6H36.356s-9.136-.154-9.136 8.83v31.744S24.42 98.662 50.006 98.662zM63.577 91.4c-2.784 0-5.044-2.26-5.044-5.044s2.26-5.044 5.044-5.044 5.044 2.26 5.044 5.044-2.26 5.044-5.044 5.044z"/>
          </svg>
        </div>
        <div className="absolute bottom-32 left-1/3 w-28 h-28 animate-float" style={{animationDelay: '2s'}}>
          <svg viewBox="0 0 100 100" className="w-full h-full fill-python-yellow">
            <path d="M49.994 1.338C23.18 1.338 9.6 15.182 9.6 30.758v11.668h40.774v5.166H9.6S-1.6 44.422-1.6 68.652c0 24.23 9.6 23.384 9.6 23.384h5.734V80.932s-.308-9.6 9.444-9.6h40.466s9.136.154 9.136-8.83V30.758S75.58 1.338 49.994 1.338zM36.423 8.6c2.784 0 5.044 2.26 5.044 5.044s-2.26 5.044-5.044 5.044-5.044-2.26-5.044-5.044 2.26-5.044 5.044-5.044z"/>
            <path d="M50.006 98.662C76.82 98.662 90.4 84.818 90.4 69.242V57.574H49.626v-5.166H90.4s11.2 3.17 11.2-21.06c0-24.23-9.6-23.384-9.6-23.384h-5.734v11.104s.308 9.6-9.444 9.6H36.356s-9.136-.154-9.136 8.83v31.744S24.42 98.662 50.006 98.662zM63.577 91.4c-2.784 0-5.044-2.26-5.044-5.044s2.26-5.044 5.044-5.044 5.044 2.26 5.044 5.044-2.26 5.044-5.044 5.044z"/>
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Event Badge */}
          <Badge className="mb-6 bg-python-yellow text-python-blue-dark hover:bg-python-yellow-dark text-lg px-4 py-2">
            🐍 Community Event
          </Badge>
          
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Python <span className="text-python-yellow">Dhaka</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in">
            Join Bangladesh's Premier Python Community Event
          </p>
          
          {/* Event Details Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <Calendar className="h-6 w-6 mb-2 text-python-yellow" />
              <span className="text-sm font-medium">July 2025</span>
              <span className="text-xs text-blue-200">Date TBA</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <Clock className="h-6 w-6 mb-2 text-python-yellow" />
              <span className="text-sm font-medium">4:00 PM</span>
              <span className="text-xs text-blue-200">3 Hours</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <MapPin className="h-6 w-6 mb-2 text-python-yellow" />
              <span className="text-sm font-medium">MEC Hall</span>
              <span className="text-xs text-blue-200">Shewrapara</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <Users className="h-6 w-6 mb-2 text-python-yellow" />
              <span className="text-sm font-medium">100 Max</span>
              <span className="text-xs text-blue-200">50 Available</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-python-yellow text-python-blue-dark hover:bg-python-yellow-dark font-bold px-8 py-4 text-lg transition-all transform hover:scale-105"
            >
              Register Now - ৳300
            </Button>
            <Badge variant="outline" className="text-python-yellow border-python-yellow">
              50 spots remaining
            </Badge>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-slate-50"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-slate-50"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-slate-50"></path>
        </svg>
      </div>
    </section>
  );
};
