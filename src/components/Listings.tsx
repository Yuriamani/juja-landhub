import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { MapPin, Ruler, DollarSign, Eye } from "lucide-react";

const listings = [
  {
    id: 1,
    title: "Premium Plot - Mastore Area",
    size: "1/8 Acre",
    price: "Ksh 650,000",
    location: "Mastore, Juja",
    image: "/api/placeholder/400/300",
    features: ["Ready Title Deed", "Accessible Road", "Electricity Nearby"]
  },
  {
    id: 2,
    title: "Investment Plot - Juja Town",
    size: "1/8 Acre", 
    price: "Ksh 750,000",
    location: "Juja Town Center",
    image: "/api/placeholder/400/300",
    features: ["Prime Location", "Water Connection", "Tarmac Road"]
  },
  {
    id: 3,
    title: "Residential Plot - Kalimoni",
    size: "1/8 Acre",
    price: "Ksh 580,000",
    location: "Kalimoni, Juja",
    image: "/api/placeholder/400/300",
    features: ["Quiet Neighborhood", "School Nearby", "Shopping Center"]
  },
  {
    id: 4,
    title: "Corner Plot - Gateway",
    size: "1/8 Acre",
    price: "Ksh 720,000",
    location: "Gateway Mall Area",
    image: "/api/placeholder/400/300",
    features: ["Corner Plot", "Commercial Potential", "High Appreciation"]
  },
  {
    id: 5,
    title: "Family Plot - Mugutha",
    size: "1/8 Acre",
    price: "Ksh 620,000",
    location: "Mugutha, Juja",
    image: "/api/placeholder/400/300",
    features: ["Family Friendly", "Secure Area", "Good Drainage"]
  },
  {
    id: 6,
    title: "Investment Plot - Kenyatta University",
    size: "1/8 Acre",
    price: "Ksh 680,000",
    location: "Near Kenyatta University",
    image: "/api/placeholder/400/300",
    features: ["Student Housing Potential", "High Demand", "Transport Hub"]
  }
];

const Listings = () => {
  return (
    <section id="listings" className="py-20 bg-earth-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-earth-primary mb-4">
            Available Land Plots
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover prime 1/8-acre plots in Juja's most desirable locations. 
            Each plot comes with ready title deeds and excellent investment potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.map((listing) => (
            <Card key={listing.id} className="group hover:shadow-xl transition-shadow duration-300">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={listing.image} 
                  alt={listing.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-earth-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {listing.price}
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-earth-primary mb-2">
                  {listing.title}
                </h3>
                
                <div className="flex items-center gap-4 mb-4 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Ruler className="h-4 w-4" />
                    <span className="text-sm">{listing.size}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{listing.location}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  {listing.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-earth-primary rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button variant="earth" className="w-full">
                  <Eye className="mr-2 h-4 w-4" />
                  Request Viewing
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            View All Available Plots
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Listings;