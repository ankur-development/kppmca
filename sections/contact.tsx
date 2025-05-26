import { Mail, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-muted relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-bl-full opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/10 rounded-tr-full opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="w-fit bg-accent text-primary px-4 py-1 rounded-full text-sm font-medium">
                Get In Touch
              </div>
              <h2 className="text-3xl md:text-4xl text-foreground">
                Ready to Transform Your Financial Strategy?
              </h2>
              <p className="text-lg text-muted-foreground">
                Contact us today to schedule a consultation and discover how
                KPPM can help you achieve your financial goals with confidence.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-card p-3 rounded-full shadow-sm">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email Us</h3>
                    <p className="text-muted-foreground">info@kppmca.in</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-card p-3 rounded-full shadow-sm">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Call Us</h3>
                    <p className="text-muted-foreground">
                      9421520506, 9209186441
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-card p-3 rounded-full shadow-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6 text-primary"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Visit Us</h3>
                    <p className="text-muted-foreground">
                      4 Ambika Appt, Behind BSNL office,
Nal Stops, Karve Road, Erandwane
Pune - 411004.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Schedule a Consultation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-1"
                      >
                        Full Name
                      </label>
                      <Input id="name" placeholder="John Doe" />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-1"
                      >
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground mb-1"
                    >
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-foreground mb-1"
                    >
                      Service Interested In
                    </label>
                    <Select>
                      <SelectTrigger id="service"  className="w-full">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tax">
                          Tax Planning & Compliance
                        </SelectItem>
                        <SelectItem value="audit">Audit & Assurance</SelectItem>
                        <SelectItem value="accounting">
                          Accounting & Bookkeeping
                        </SelectItem>
                        <SelectItem value="advisory">
                          Business Advisory
                        </SelectItem>
                        <SelectItem value="compliance">
                          Compliance Services
                        </SelectItem>
                        <SelectItem value="finance">
                          Corporate Finance
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-1"
                    >
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us about your financial needs..."
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Submit Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
