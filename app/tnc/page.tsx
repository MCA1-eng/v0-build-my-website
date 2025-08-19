import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, BadgeDollarSign, CheckCircle } from "lucide-react";

export default function TermsConditions() {
  return (
    <div className="flex min-h-screen flex-col">
     

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-16 bg-gradient-to-b from-white to-emerald-50 flex justify-center items-center">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Terms & Conditions
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto">
                Please read these terms carefully before using our website and services.
              </p>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-8">
                  By using our website and services, including text messaging, you agree to these terms.
                </p>

                {/* Section 1 */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100">
                      <span className="text-lg font-bold text-emerald-600">1</span>
                    </div>
                    <h2 className="text-2xl font-bold">Introduction</h2>
                  </div>
                  <p className="pl-12 text-muted-foreground">
                    These Terms and Conditions govern your use of <strong>Easy Services</strong> website and our services. If you disagree, please do not use our website or services.
                  </p>
                </div>

                {/* Section 2 */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100">
                      <span className="text-lg font-bold text-emerald-600">2</span>
                    </div>
                    <h2 className="text-2xl font-bold">Using Our Website</h2>
                  </div>
                  <div className="pl-12 space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Age Restriction:</strong> You must be at least 18 years old to use our website and services, including text messaging.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Legal Use Only:</strong> You may not use our website or text messaging for any illegal or unauthorised purpose. You must obey all relevant laws.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Changes:</strong> We may modify, stop, or remove any part of our website, services, or content without notice.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Your Responsibility:</strong> You are responsible for how you use any information or materials from our website, including text messages. We are not liable for any issues that arise.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 3 */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100">
                      <span className="text-lg font-bold text-emerald-600">3</span>
                    </div>
                    <h2 className="text-2xl font-bold">Intellectual Property</h2>
                  </div>
                  <p className="pl-12 text-muted-foreground">
                    All text, images, logos, software, videos, and text message content on our website are protected by copyright and other laws. You may not copy, distribute, change, or use any of our content without our written permission.
                  </p>
                </div>

                {/* Section 4 */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100">
                      <span className="text-lg font-bold text-emerald-600">4</span>
                    </div>
                    <h2 className="text-2xl font-bold">Privacy</h2>
                  </div>
                  <div className="pl-12 space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Privacy Policy:</strong> Our Privacy Policy explains how we collect, use, and protect your data, including information you share through text messages. By using our website and text messaging, you agree to our Privacy Policy.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>No Data Sharing:</strong> We do not share or sell your personal information, including the content of your text messages.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 5 */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100">
                      <span className="text-lg font-bold text-emerald-600">5</span>
                    </div>
                    <h2 className="text-2xl font-bold">No Guarantees</h2>
                  </div>
                  <div className="pl-12 space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Information:</strong> Information on our website is for general knowledge only. We do not guarantee it is accurate, complete, or reliable.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>No Liability:</strong> We are not responsible for any losses or problems that may occur from using our website, text messaging services, or any information they provide.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 6 */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100">
                      <span className="text-lg font-bold text-emerald-600">6</span>
                    </div>
                    <h2 className="text-2xl font-bold">Other Websites</h2>
                  </div>
                  <p className="pl-12 text-muted-foreground">
                    We may link to third-party websites. We are not responsible for their content or how they handle your data. Use them at your own risk.
                  </p>
                </div>

                {/* Section 7 */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100">
                      <span className="text-lg font-bold text-emerald-600">7</span>
                    </div>
                    <h2 className="text-2xl font-bold">Limitation of Liability</h2>
                  </div>
                  <p className="pl-12 text-muted-foreground">
                    As allowed by law, <strong>Easy Services</strong> is not liable for any damages (direct, indirect, or otherwise) caused by using our website, services, or text messaging.
                  </p>
                </div>

                {/* Section 8 */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100">
                      <span className="text-lg font-bold text-emerald-600">8</span>
                    </div>
                    <h2 className="text-2xl font-bold">Your Responsibility to Protect Us</h2>
                  </div>
                  <p className="pl-12 text-muted-foreground">
                    You will protect <strong>Easy Services</strong> including its officers, directors, employees, and affiliates, from any claims, losses, or expenses (including legal costs) arising from your use of our website or if you break these Terms and Conditions.
                  </p>
                </div>

                {/* Section 9 */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100">
                      <span className="text-lg font-bold text-emerald-600">9</span>
                    </div>
                    <h2 className="text-2xl font-bold">Laws and Disputes</h2>
                  </div>
                  <p className="pl-12 text-muted-foreground">
                    These Terms and Conditions are governed by the laws of Palm Beach County, Florida. Any disputes relating to these terms will be resolved in the courts of Palm Beach County, Florida.
                  </p>
                </div>

                {/* Section 10 */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100">
                      <span className="text-lg font-bold text-emerald-600">10</span>
                    </div>
                    <h2 className="text-2xl font-bold">Changes to These Terms</h2>
                  </div>
                  <p className="pl-12 text-muted-foreground">
                    We may change these Terms and Conditions at any time. If we do, your continued use of our website and services, including text messaging, means you accept the updated terms.
                  </p>
                </div>

                {/* Section 11 */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100">
                      <span className="text-lg font-bold text-emerald-600">11</span>
                    </div>
                    <h2 className="text-2xl font-bold">Contact</h2>
                  </div>
                  <p className="pl-12 text-muted-foreground">
                    For questions about these Terms and Conditions, please email us at: <strong>info@easyservices.info</strong>
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
                Have Questions?
              </h2>
              <p className="max-w-[600px] opacity-90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                If you have any questions about these terms or need clarification on any of our policies, we're here to help.
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
              href="/tnc"
              className="text-sm font-medium transition-colors hover:text-emerald-600"
            >
              Terms
            </Link>
            <Link
              href="#"
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