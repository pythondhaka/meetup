
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Building, Users } from "lucide-react";

export const OrganizersSection = () => {
  const organizers = [
    {
      name: "Tamal Anwar Chowdhury",
      title: "Technical Docs Writer at Kinde Australia PT, Tech Educator",
      roles: ["Organizer, Python Dhaka", "Co-organizer Python Bangladesh"],
      icon: User
    },
    {
      name: "Md. Taufiqul Haque Khan Tusar",
      title: "NLP & Backend Engineer at LaLoka Labs",
      roles: ["Organizer, AI/ML community Bangladesh", "Co-organizer Python Bangladesh"],
      icon: User
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-python-yellow text-python-blue-dark">
            Meet the Team
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Event <span className="text-python-blue">Organizers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Python Dhaka is organized by passionate community leaders who are dedicated to 
            growing Bangladesh's Python ecosystem and fostering connections among developers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {organizers.map((organizer, index) => (
            <Card key={index} className="border-2 hover:border-python-blue transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-python-blue to-python-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                  <organizer.icon className="h-10 w-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{organizer.name}</h3>
                
                <div className="mb-4">
                  <div className="flex items-center justify-center text-gray-600 mb-2">
                    <Building className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">{organizer.title}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  {organizer.roles.map((role, roleIndex) => (
                    <div key={roleIndex} className="flex items-center justify-center">
                      <Users className="h-4 w-4 mr-2 text-python-blue" />
                      <Badge variant="outline" className="text-python-blue border-python-blue text-sm">
                        {role}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-python-blue/10 to-python-yellow/10 rounded-2xl p-6 max-w-2xl mx-auto">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Want to get involved?</h4>
            <p className="text-gray-600 text-sm">
              Python Dhaka is always looking for passionate volunteers and community contributors. 
              Join our Discord or reach out through our community channels to learn how you can help!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
