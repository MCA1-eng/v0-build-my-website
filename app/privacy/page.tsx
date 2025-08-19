import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, BadgeDollarSign, CheckCircle, Shield } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="flex min-h-screen flex-col">
   
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-16 bg-gradient-to-b from-white to-emerald-50 flex justify-center items-center">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4">
              <div className="flex justify-center mb-4">
                <Shield className="h-16 w-16 text-emerald-600" />
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Privacy Policy
              </h1>
              <h2 className="text-2xl font-semibold text-emerald-600 mb-4">
                Protecting Your Privacy
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto">
                We value your privacy. This Privacy Policy outlines how we collect, utilize, share, and safeguard your information when you use our website ("Site") and services, including text messaging.
              </p>
              <p className="text-sm text-muted-foreground">
                By using our services, you agree to the terms of this policy.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="prose prose-lg max-w-none">
                
                {/* What We Collect */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100">
                      <span className="text-lg font-bold text-emerald-600">1</span>
                    </div>
                    <h2 className="text-2xl font-bold">What We Collect</h2>
                  </div>
                  <div className="pl-12 space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Personally Identifiable Information (PII):</strong> This includes your name, email, address, phone number, and any other details you directly provide, even through a text message.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Non-Personally Identifiable Information (Non-PII):</strong> Technical data like your IP address, browser, device details, website usage, including how you use our text messaging.
                      </div>
                    </div>
                  </div>
                </div>

                {/* How We Use Your Data */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100">
                      <span className="text-lg font-bold text-emerald-600">2</span>
                    </div>
                    <h2 className="text-2xl font-bold">How We Use Your Data</h2>
                  </div>
                  <div className="pl-12 space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Service Delivery:</strong> To provide and enhance our services, including our text messaging.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Communication:</strong> Responding to your questions (including those via text), and for marketing if you opt-in.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Analytics:</strong> Understanding how you use our Site and text features to make improvements.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Legal Compliance:</strong> Fulfilling legal requirements.
                      </div>
                    </div>
                  </div>
                </div>

                {/* We Do Not Sell Your Data */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100">
                      <span className="text-lg font-bold text-emerald-600">3</span>
                    </div>
                    <h2 className="text-2xl font-bold">We Do Not Sell Your Data</h2>
                  </div>
                  <p className="pl-12 text-muted-foreground">
                    Your information, including that shared via text, is never sold.
                  </p>
                </div>

                {/* Security Measures */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100">
                      <span className="text-lg font-bold text-emerald-600">4</span>
                    </div>
                    <h2 className="text-2xl font-bold">Security Measures</h2>
                  </div>
                  <p className="pl-12 text-muted-foreground">
                    We take reasonable steps to protect your data against unauthorized access or misuse. However, no internet-based system is 100% secure.
                  </p>
                </div>

                {/* Third-Parties */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100">
                      <span className="text-lg font-bold text-emerald-600">5</span>
                    </div>
                    <h2 className="text-2xl font-bold">Third-Parties</h2>
                  </div>
                  <p className="pl-12 text-muted-foreground">
                    We only share your information when legally obligated or to provide necessary services. We ensure they handle your data securely and in line with this Privacy Policy.
                  </p>
                </div>

                {/* Cookies */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100">
                      <span className="text-lg font-bold text-emerald-600">6</span>
                    </div>
                    <h2 className="text-2xl font-bold">Cookies, etc.</h2>
                  </div>
                  <p className="pl-12 text-muted-foreground">
                    We may use cookies and similar technologies for better user experience, analytics, and personalization. You can manage these settings in your browser.
                  </p>
                </div>

                {/* External Links */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100">
                      <span className="text-lg font-bold text-emerald-600">7</span>
                    </div>
                    <h2 className="text-2xl font-bold">External Links</h2>
                  </div>
                  <p className="pl-12 text-muted-foreground">
                    We may link to other websites. Please review their privacy policies as we are not responsible for their practices.
                  </p>
                </div>

                {/* Children's Privacy */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100">
                      <span className="text-lg font-bold text-emerald-600">8</span>
                    </div>
                    <h2 className="text-2xl font-bold">Children's Privacy</h2>
                  </div>
                  <p className="pl-12 text-muted-foreground">
                    Our services, including texting, are not for children under 13. We do not intentionally gather their data.
                  </p>
                </div>

                {/* Updates */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100">
                      <span className="text-lg font-bold text-emerald-600">9</span>
                    </div>
                    <h2 className="text-2xl font-bold">Updates</h2>
                  </div>
                  <p className="pl-12 text-muted-foreground">
                    This Privacy Policy may change. The "Last Updated" date reflects revisions. Continued use of our services means you accept any changes.
                  </p>
                </div>

                {/* Questions */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100">
                      <span className="text-lg font-bold text-emerald-600">10</span>
                    </div>
                    <h2 className="text-2xl font-bold">Questions?</h2>
                  </div>
                  <p className="pl-12 text-muted-foreground">
                    If you have questions about this policy or our data practices related to text messaging, contact us at: <strong>info@easyservices.info</strong>
                  </p>
                </div>

                {/* Last Updated */}
                <div className="pt-8 text-center bg-emerald-50 rounded-lg p-6">
                  <p className="text-sm text-muted-foreground">
                    <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>

                {/* Back Button */}
                <div className="pt-8 text-center">
                  <Link href="/" passHref>
                    <Button
                      size="lg"
                      className="bg-emerald-600 hover:bg-emerald-700"
                    >
                      Back to Home
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-emerald-600 text-white flex justify-center">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Your Privacy Matters
              </h2>
              <p className="max-w-[600px] opacity-90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're committed to protecting your personal information and maintaining transparency about our data practices. Have questions about how we handle your data?
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <Link href="/apply" passHref>
                <Button
                  size="lg"
                  className="bg-white text-emerald-600 hover:bg-gray-100"
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-emerald-700 hover:text-white"
              >
                Call (877) 763-6186
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left pl-5">
            © {new Date().getFullYear()} Easy Services. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="/terms"
              className="text-sm font-medium transition-colors hover:text-emerald-600"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-sm font-medium transition-colors hover:text-emerald-600"
            >
              Privacy
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium transition-colors hover:text-emerald-600"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}