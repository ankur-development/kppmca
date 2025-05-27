"use client";

import React from "react";
import { Mail, Linkedin, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Team() {
  const teamMembers = [
    {
      name: "Amit Sharma",
      description:
        "Amit is a seasoned Chartered Accountant with over 15 years of experience in tax planning and compliance, helping clients navigate complex financial regulations.",
      email: "amit@kppmca.in",
      linkedin: "https://linkedin.com/in/amit-sharma",
    },
    {
      name: "Priya Patel",
      description:
        "Priya specializes in audit and assurance, ensuring accuracy and transparency in financial reporting for businesses of all sizes.",
      email: "priya@kppmca.in",
      linkedin: "https://linkedin.com/in/priya-patel",
    },
    {
      name: "Rahul Desai",
      description:
        "Rahul leads our business advisory services, providing strategic insights to drive growth and operational efficiency.",
      email: "rahul@kppmca.in",
      linkedin: "https://linkedin.com/in/rahul-desai",
    },
    {
      name: "Sneha Gupta",
      description:
        "Sneha is an expert in accounting and bookkeeping, streamlining financial processes for small and medium enterprises.",
      email: "sneha@kppmca.in",
      linkedin: "https://linkedin.com/in/sneha-gupta",
    },
    {
      name: "Vikram Singh",
      description:
        "Vikram focuses on corporate finance, assisting clients with mergers, acquisitions, and financial restructuring.",
      email: "vikram@kppmca.in",
      linkedin: "https://linkedin.com/in/vikram-singh",
    },
    {
      name: "Anita Rao",
      description:
        "Anita provides compliance services, ensuring clients meet all regulatory requirements with ease and confidence.",
      email: "anita@kppmca.in",
      linkedin: "https://linkedin.com/in/anita-rao",
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
            <h2 className="text-3xl md:text-4xl text-foreground">
              Meet Our Expert Chartered Accountants
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our dedicated team at KPPM brings diverse expertise to help you
              achieve your financial goals with confidence and precision.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="p-4 gap-0 flex flex-col">
                <CardHeader className="p-0">
                  <div className="relative w-full h-48 mb-4">
                    <Image
                      src="/placeholder.svg"
                      alt={`${member.name}'s profile`}
                      fill
                      className="object-cover rounded-t-lg"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-4 flex-1 flex flex-col space-y-4">
                  <p className="text-muted-foreground">{member.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Mail className="h-5 w-5 text-primary" />
                      <a
                        href={`mailto:${member.email}`}
                        className="text-muted-foreground hover:text-primary"
                      >
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Linkedin className="h-5 w-5 text-primary" />
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>
                  {/* <Button
                    variant="outline"
                    asChild
                    className="w-full mt-auto"
                  >
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2"
                    >
                      Contact {member.name.split(" ")[0]}
                    </a>
                  </Button> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}