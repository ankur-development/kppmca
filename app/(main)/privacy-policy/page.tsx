"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm leading-6 text-muted-foreground">
          <p>
            At KPPM and Associates, we are committed to safeguarding your privacy and ensuring
            the security of your personal information. This Privacy Policy outlines how we collect,
            use, disclose, and protect the information you provide to us. By using our services or
            visiting our website, you consent to the practices described in this policy.
          </p>

          <Separator />

          <h3 className="text-base font-semibold text-foreground">Information We Collect</h3>
          <p>
            <strong>Personal Information:</strong> We may collect personal information, including but
            not limited to your name, contact details, email address, and other identifiable
            information when you engage with our services, submit inquiries, or use our website.
          </p>
          <p>
            <strong>Usage Information:</strong> We collect information about how you interact with
            our website and services, including your IP address, browser type, and usage patterns.
            This information is used to improve our website and services.
          </p>

          <Separator />

          <h3 className="text-base font-semibold text-foreground">How We Use Your Information</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Providing Services:</strong> We use your personal information to provide the
              services you request, including but not limited to tax consultancy, business advisory,
              and compliance services.
            </li>
            <li>
              <strong>Communication:</strong> We may use your contact information to communicate
              with you about our services, updates, and important information.
            </li>
            <li>
              <strong>Improving Services:</strong> Your usage information helps us analyze and
              enhance our services, tailor our content, and improve the user experience.
            </li>
            <li>
              <strong>Legal Compliance:</strong> We may use and disclose your information to comply
              with legal obligations, such as tax regulations and reporting requirements.
            </li>
          </ul>

          <Separator />

          <h3 className="text-base font-semibold text-foreground">Information Sharing</h3>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to third parties
            without your consent, except when required by law or when necessary for providing our
            services. We may share your information with trusted service providers who assist us in
            operating our website and conducting our business.
          </p>

          <Separator />

          <h3 className="text-base font-semibold text-foreground">Data Security</h3>
          <p>
            We employ industry-standard security measures to protect your personal information from
            unauthorized access, disclosure, alteration, and destruction. While we strive to protect
            your personal information, no method of transmission over the internet or electronic
            storage is entirely secure, and we cannot guarantee absolute security.
          </p>

          <Separator />

          <h3 className="text-base font-semibold text-foreground">Your Rights</h3>
          <p>
            You have the right to access, correct, or delete your personal information held by us.
            If you wish to exercise these rights or have any concerns about your data, please
            contact us using the information provided below.
          </p>

          <Separator />

          <h3 className="text-base font-semibold text-foreground">Changes to this Privacy Policy</h3>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices
            or for other operational, legal, or regulatory reasons. Thus, we advise you to review
            this page periodically for any changes.
          </p>

          <Separator />

          <h3 className="text-base font-semibold text-foreground">Contact Us</h3>
          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy or how we
            handle your personal information, please contact us.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
