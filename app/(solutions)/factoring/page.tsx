import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BadgeDollarSign,
  CheckCircle,
} from "lucide-react";
import { EnhancedImage } from "@/components/ui/enhanced-image";

export default function Factoring() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between mx-auto pl-5 pr-7">
          <div className="flex items-center gap-2 font-bold">
            <Link href="/" className="flex items-center gap-2">
              <BadgeDollarSign className="h-6 w-6 text-emerald-600" />
              <span className="text-xl">Easy Services</span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-6" aria-label="Main Navigation">
            <Link
              href="#solutions"
              className="text-sm font-medium transition-colors hover:text-emerald-600"
            >
              Solutions
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium transition-colors hover:text-emerald-600"
            >
              FAQs
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium transition-colors hover:text-emerald-600"
            >
              Contact Us
            </Link>
            <Link
              href="/apply"
              className="text-sm font-medium transition-colors hover:text-emerald-600"
            >
              Apply Now
            </Link>
          </nav>
          <div className="flex items-center sm:pr-0">
            <Link href="/apply" passHref>
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                Get Funded
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}

        <section className="w-full py-12 md:py-24 lg:py-16 bg-gradient-to-b from-white to-emerald-50 flex justify-center items-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Factoring
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    A business advance collateralized by your outstanding
                    invoices. Invoice factoring is a way for small businesses to
                    take out a loan against unpaid customer invoices to quickly
                    unlock funds from pending invoices for operational expenses
                    and growth opportunities.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/apply" passHref>
                    <Button
                      size="lg"
                      className="bg-emerald-600 hover:bg-emerald-700"
                    >
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/" passHref>
                    <Button size="lg" variant="outline">
                      Back to the home page
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[300px] w-full overflow-hidden rounded-xl bg-muted md:h-[400px] lg:h-[500px]">
                  <EnhancedImage
                    src="/factoring.jpg"
                    alt="Invoice Factoring"
                    className="object-cover w-full h-full"
                    fallbackSrc="/images/test-business-funding.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight mb-8 text-center">
              Factoring made simple
            </h2>
            <div className="max-w-3xl mx-auto space-y-12">
              {/* Step 1 */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                    <span className="text-xl font-bold text-emerald-600">
                      1
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold">How funding works</h2>
                </div>
                <div className="space-y-3 pl-14">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <span>
                      An invoice is a bill for goods or services already
                      provided
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <span>
                      A business sells its invoices to a third party (the
                      factor) in order to meet its current obligations
                    </span>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                    <span className="text-xl font-bold text-emerald-600">
                      2
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold">Rates are based on</h2>
                </div>
                <div className="space-y-3 pl-14">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <span>The invoice holder's credit worthiness</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <span>
                      The length of time until the invoice will be paid
                    </span>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                    <span className="text-xl font-bold text-emerald-600">
                      3
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold">Ask Yourself</h2>
                </div>
                <div className="space-y-3 pl-14">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <span>Are you currently factoring any invoices?</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <span>
                      Do you presently have a need for additional cash flow?
                    </span>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                    <span className="text-xl font-bold text-emerald-600">
                      4
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold">Required documents</h2>
                </div>
                <div className="space-y-3 pl-14">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <span>Sample invoice</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <span>Accounts receivable aging report</span>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                    <span className="text-xl font-bold text-emerald-600">
                      5
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold">Good to know</h2>
                </div>
                <div className="space-y-3 pl-14">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <span>
                      We only factor business to business transactions
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <span>
                      Residual account; represents an ongoing relationship
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <span>
                      With factoring you have the chance to get paid for your
                      invoices right away – no need to wait
                    </span>
                  </div>
                </div>
              </div>

              {/* Apply Button */}
              <div className="pt-8 text-center">
                <Link href="/apply" passHref>
                  <Button
                    size="lg"
                    className="bg-emerald-600 hover:bg-emerald-700"
                  >
                    Apply now!
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-emerald-600 text-white flex justify-center">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Application form
              </h2>
              <p className="max-w-[600px] opacity-90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                P.O. Financing - We provide working business capital based on
                your business' projected future sales
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
              href="#"
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
              href="#"
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
