"use client";

import React from "react";
import { Mail, Linkedin, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Team() {
  const teamMembers = [
    {
      name: "Darshan Pahade",
      description:
        "Darshan is a seasoned Chartered Accountant with over 15 years of experience in tax planning and compliance, helping clients navigate complex financial regulations.",
      email: "darshan@kppmca.in",
      linkedin: "https://linkedin.com/in/darshan-pahade",
      image: "/images/team/darshan-pahade.jpg",
    },
    {
      name: "Harshal Pahade",
      description:
        "Harshal specializes in audit and assurance, ensuring accuracy and transparency in financial reporting for businesses of all sizes.",
      email: "harshal@kppmca.in",
      linkedin: "https://linkedin.com/in/harshal-pahade",
      image: "/images/team/harshal-pahade.jpg",
    },
    {
      name: "Nilesh Kulkarni",
      description:
        "Nilesh leads our business advisory services, providing strategic insights to drive growth and operational efficiency.",
      email: "nilesh@kppmca.in",
      linkedin: "https://linkedin.com/in/nilesh-kulkarni",
      image: "/images/team/nilesh-kulkarni.jpg",
    },
    {
      name: "Priya Agarwal",
      description:
        "Priya is an expert in accounting and bookkeeping, streamlining financial processes for small and medium enterprises.",
      email: "priya@kppmca.in",
      linkedin: "https://linkedin.com/in/priya-agarwal",
      image: "/images/team/priya-agarwal.jpg",
    },
    {
      name: "Gaurav R. Patil",
      description:
        "Gaurav focuses on corporate finance, assisting clients with mergers, acquisitions, and financial restructuring.",
      email: "gaurav@kppmca.in",
      linkedin: "https://linkedin.com/in/gaurav-r-patil",
      image: "/images/team/gaurav-r.patil.jpg", // still with dot
    },
    {
      name: "Manish Jain",
      description:
        "Manish provides compliance services, ensuring clients meet all regulatory requirements with ease and confidence.",
      email: "manish@kppmca.in",
      linkedin: "https://linkedin.com/in/manish-jain",
      image: "/images/team/manish-jain.jpg",
    },
    {
      name: "Owaise Momin",
      description:
        "Owaise advises clients on taxation and investment strategies, maximizing returns with smart planning.",
      email: "owaise@kppmca.in",
      linkedin: "https://linkedin.com/in/owaise-momin",
      image: "/images/team/owaise-momin.jpg",
    },
    {
      name: "Swati Kulkarni",
      description:
        "Swati specializes in financial reporting, ensuring clarity and transparency for stakeholders.",
      email: "swati@kppmca.in",
      linkedin: "https://linkedin.com/in/swati-kulkarni",
      image: "/images/team/swati-kulkarni.jpg",
    },
  ];

  return (
    <section
      id="team"
      className="py-16 md:py-24 bg-muted relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-bl-full opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/10 rounded-tr-full opacity-30"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-8">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.history.back()}
              className="flex items-center gap-2 text-primary hover:text-primary/80"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
          </div>
          <div className="space-y-8 mb-12 text-center">
            <div className="w-fit mx-auto bg-accent text-primary px-4 py-1 rounded-full text-sm font-medium">
              Our Team
            </div>
            <h2 className="text-3xl md:text-4xl text-foreground font-bold">
              Meet Our Expert Chartered Accountants
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our dedicated team at KPPM brings diverse expertise to help you
              achieve your financial goals with confidence and precision.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="flex flex-col overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl"
              >
                <CardHeader className="p-0">
                  <div className="relative w-full h-64">
                    <Image
                      src={member.image}
                      alt={`${member.name}'s profile`}
                      fill
                      className="object-cover object-top rounded-t-2xl"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <CardTitle className="text-xl mt-4 text-center">
                    {member.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 flex-1 flex flex-col space-y-4 text-center">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                  <div className="space-y-2 mt-auto">
                    <div className="flex items-center justify-center gap-2">
                      <Mail className="h-5 w-5 text-primary" />
                      <a
                        href={`mailto:${member.email}`}
                        className="text-muted-foreground hover:text-primary text-sm"
                      >
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Linkedin className="h-5 w-5 text-primary" />
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary text-sm"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
