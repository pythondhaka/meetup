
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Calendar, Users, Car, Coffee } from "lucide-react";

export const VenueSection = () => {
  const venueFeatures = [
    {
      icon: Users,
      title: "Capacity",
      description: "Spacious hall accommodating 100+ attendees comfortably"
    },
    {
      icon: Car,
      title: "Parking",
      description: "Ample parking space available for attendees"
    },
    {
      icon: Coffee,
      title: "Refreshments",
      description: "Tea, coffee, and light snacks provided"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Event <span className="text-python-blue">Details</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us at a convenient and accessible location in the heart of Dhaka for an 
            unforgettable Python community experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Venue Info */}
          <div>
            <Card className="border-0 shadow-xl bg-gradient-to-br from-python-blue to-python-blue-dark text-white mb-8">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <MapPin className="h-8 w-8 text-python-yellow mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold">MEC Conference Hall</h3>
                    <p className="text-blue-100">Shewrapara, Dhaka</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-python-yellow mr-2" />
                    <div>
                      <p className="text-sm text-blue-100">Date</p>
                      <p className="font-semibold">July 2025 (TBA)</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-python-yellow mr-2" />
                    <div>
                      <p className="text-sm text-blue-100">Time</p>
                      <p className="font-semibold">4:00 PM - 7:00 PM</p>
                    </div>
                  </div>
                </div>
                
                <Button 
                  variant="secondary" 
                  className="w-full bg-python-yellow text-python-blue-dark hover:bg-python-yellow-dark font-bold"
                >
                  View on Google Maps
                </Button>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {venueFeatures.map((feature, index) => (
                <Card key={index} className="text-center border-2 hover:border-python-blue transition-colors duration-300">
                  <CardContent className="p-4">
                    <feature.icon className="h-8 w-8 text-python-blue mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Event Schedule */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Event Schedule</h3>
            <div className="space-y-4">
              <div className="flex items-center p-4 bg-slate-50 rounded-lg border-l-4 border-python-blue">
                <div className="text-python-blue font-bold text-lg mr-4 min-w-[80px]">4:00 PM</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Registration & Networking</h4>
                  <p className="text-gray-600 text-sm">Welcome drinks and community mingling</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-slate-50 rounded-lg border-l-4 border-python-yellow">
                <div className="text-python-blue font-bold text-lg mr-4 min-w-[80px]">4:30 PM</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Opening & Keynote</h4>
                  <p className="text-gray-600 text-sm">Welcome address and keynote presentation</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-slate-50 rounded-lg border-l-4 border-python-blue">
                <div className="text-python-blue font-bold text-lg mr-4 min-w-[80px]">5:15 PM</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Technical Sessions</h4>
                  <p className="text-gray-600 text-sm">Deep dive talks and presentations</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-slate-50 rounded-lg border-l-4 border-python-yellow">
                <div className="text-python-blue font-bold text-lg mr-4 min-w-[80px]">6:15 PM</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Lightning Talks</h4>
                  <p className="text-gray-600 text-sm">Community spotlights and quick demos</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-slate-50 rounded-lg border-l-4 border-python-blue">
                <div className="text-python-blue font-bold text-lg mr-4 min-w-[80px]">7:00 PM</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Closing & Networking</h4>
                  <p className="text-gray-600 text-sm">Final thoughts and extended networking</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
