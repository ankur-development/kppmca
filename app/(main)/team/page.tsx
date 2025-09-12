"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Team() {
  const teamMembers = [
    {
      name: "Darshan Pahade",
      qualifications: [
        "ACA, The Institute of Chartered Accountants of India, 2012",
        "Bachelor of Commerce, University of Pune, 2009",
        "Worked with KPMG and EY in Indirect Taxes Department",
      ],
      experience: [
        "Practicing since 2018",
        "Indirect and Direct Tax Consultancy",
        "Specialized in GST Compliances",
        "SEIS and MEIS Benefit schemes",
      ],
      image: "/images/team/darshan-pahade.jpg",
    },
    {
      name: "Harshal Pahade",
      qualifications: [
        "FCA, The Institute of Chartered Accountants of India, 2011",
        "Bachelor of Commerce, University of Pune, 2008",
        "Certificate Course in Indirect Taxes, ICAI",
      ],
      experience: [
        "Practicing since 2011",
        "Assurance and Risk Management",
        "Specialized in Indirect Taxation Consulting",
        "Appearing before various tax authorities at appellant level",
        "Acting as functional consultant in ERP implementation",
        "Designing systems for effective MIS reporting",
      ],
      image: "/images/team/harshal-pahade.jpg",
    },
    {
      name: "Nilesh Kulkarni",
      qualifications: [
        "FCA, The Institute of Chartered Accountants of India, 2008",
        "Master of Commerce, University of Pune, 2008",
        "Worked with a Big Four CA firm",
      ],
      experience: [
        "Practicing since 2010",
        "Assurance and Risk Management",
        "Costing analysis and Product strategy",
        "Acting as functional consultant in ERP system implementation",
        "Designing systems for effective MIS reporting",
        "Specialized in IFC compliance",
        "Specialized in Verifications and Certifications",
      ],
      image: "/images/team/nilesh-kulkarni.jpg",
    },
    {
      name: "Priya Agarwal",
      qualifications: [
        "ACA, The Institute of Chartered Accountants of India, 2012",
        "Bachelor of Commerce, University of Pune, 2009",
      ],
      experience: [
        "Practicing since 2015",
        "Direct Tax Consultancy",
        "Specialized in Tax Compliances in Real Estate Industry",
        "Cost & Budgeting Analysis",
      ],
      image: "/images/team/priya-agarwal.jpg",
    },
    {
      name: "Gaurav R. Patil",
      qualifications: [
        "FCA, The Institute of Chartered Accountants of India, 2012",
        "Master of Commerce, University of Pune, 2008",
        "Worked with well-known CA firm",
      ],
      experience: [
        "Practicing since 2012",
        "Assurance and Risk Management",
        "Specialized in designing internal control framework",
        "Handling Departmental Communication at various levels",
      ],
      image: "/images/team/gaurav-r-patil.jpg",
    },
    {
      name: "Manish Jain",
      qualifications: [
        "ACA, The Institute of Chartered Accountants of India, 2013",
        "Bachelor of Commerce, University of Pune, 2012",
      ],
      experience: [
        "Practicing since 2018",
        "Direct Tax Consultancy",
        "Specialized in Accounting and MIS of Manufacturing Companies",
      ],
      image: "/images/team/manish-jain.jpg",
    },
    {
      name: "Owaise Momin",
      qualifications: [
        "FCA, The Institute of Chartered Accountants of India, 2012",
        "Bachelor of Commerce, University of Pune, 2008",
        "Worked with well-known CA firm",
      ],
      experience: [
        "Practicing since 2012",
        "Accounts & Advisory Services",
        "Direct Tax Consultancy",
        "Audit & Assurance",
        "Costing Analysis, Budgeting & Cost Control Audit",
        "Handling Departmental Communication at various levels",
      ],
      image: "/images/team/owaise-momin.jpg",
    },
    {
      name: "Swati Kulkarni",
      qualifications: [
        "ACA, The Institute of Chartered Accountants of India, 2012",
        "Master of Commerce, University of Pune, 2013",
      ],
      experience: [
        "Practicing since 2015",
        "Direct Tax Consultancy",
        "Specialized in MIS Consulting",
        "Handling multicountry clients MIS",
        "Specialized in IND AS and International transactions",
      ],
      image: "/images/team/swati-kulkarni.jpg",
    },
  ];

  return (
    <section
      id="team"
      className="py-16 md:py-24 bg-gradient-to-b from-muted to-background relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-bl-full opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/5 rounded-tr-full opacity-20"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-8">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.history.back()}
              className="flex items-center gap-2 text-primary border-primary/20 hover:bg-primary/10"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
          </div>
          <div className="space-y-8 mb-12 text-center">
            <div className="w-fit mx-auto bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">
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
                className="flex flex-col overflow-hidden bg-background border border-border/50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <CardHeader className="p-0">
                  <div className="relative w-full h-64">
                    <Image
                      src={member.image}
                      alt={`${member.name}'s profile`}
                      fill
                      className="object-cover object-top rounded-t-xl"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <CardTitle className="text-xl mt-4 text-center font-semibold text-foreground">
                    {member.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 flex-1 flex flex-col space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-primary">Qualifications</h4>
                    <ul className="text-sm text-muted-foreground list-disc list-inside">
                      {member.qualifications.map((qual, i) => (
                        <li key={i}>{qual}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-primary">Experience</h4>
                    <ul className="text-sm text-muted-foreground list-disc list-inside">
                      {member.experience.map((exp, i) => (
                        <li key={i}>{exp}</li>
                      ))}
                    </ul>
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