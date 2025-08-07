import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-earth-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-earth-primary mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to secure your land investment? Contact us today for personalized 
            service and expert guidance on your property journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-earth-primary">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-earth-primary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-earth-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-earth-primary mb-1">Office Location</h3>
                    <p className="text-muted-foreground">
                      Greenspot Tower, Eastern Bypass<br />
                      Juja, Kenya 00618
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-earth-primary/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-earth-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-earth-primary mb-1">Phone Number</h3>
                    <p className="text-muted-foreground">0746 333777</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-earth-primary/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-earth-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-earth-primary mb-1">Email Address</h3>
                    <p className="text-muted-foreground">info@chlrealtors.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-earth-primary/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-earth-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-earth-primary mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 4:00 PM<br />
                      Sunday: By Appointment
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-earth-primary text-primary-foreground">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Ready to Visit?</h3>
                <p className="mb-4 opacity-90">
                  Schedule a site visit to see your future land investment firsthand. 
                  Our team will guide you through available plots and answer all your questions.
                </p>
                <Button variant="secondary" className="w-full">
                  Schedule Site Visit
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-earth-primary">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your land requirements, budget, or any questions you have..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" variant="earth" size="lg">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;