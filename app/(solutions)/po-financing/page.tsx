import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, BadgeDollarSign, CheckCircle } from "lucide-react";
import { EnhancedImage } from "@/components/ui/enhanced-image";

export default function POFinancing() {
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
                    Purchase Order Financing - Fund Large Orders
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Get funding to fulfill large customer orders without
                    straining your cash flow. Access up to 100% of supplier
                    costs and accept orders that would otherwise be beyond your
                    capacity.
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
                  <Button size="lg" variant="outline">
                    Call (877) 763-6186
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[300px] w-full overflow-hidden rounded-xl bg-muted md:h-[400px] lg:h-[500px]">
                  <EnhancedImage
                    src="/po-financing.jpg"
                    alt="Purchase order financing for large orders"
                    className="object-cover w-full h-full"
                    fallbackSrc="/images/test-business-funding.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* P.O. Financing Details */}
        <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight mb-8 text-center">
              Easy P.O. Financing
            </h2>
            <div className="max-w-3xl mx-auto space-y-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                    <span className="text-xl font-bold text-emerald-600">
                      1
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold">How funding works</h3>
                </div>
                <div className="space-y-3 pl-14">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span>
                      Purchase orders are documents sent from a merchant to a
                      provider with a request for an order
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span>
                      A business sells its purchase orders to a third party to
                      obtain the funds necessary to satisfy the order
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                    <span className="text-xl font-bold text-emerald-600">
                      2
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold">Rates are based on</h3>
                </div>
                <div className="space-y-3 pl-14">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span>The security of the order</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span>The length of the funding</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span>Your credit</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                    <span className="text-xl font-bold text-emerald-600">
                      3
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold">Ask Yourself</h3>
                </div>
                <div className="space-y-3 pl-14">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span>Do you have any unfulfilled purchase orders?</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span>
                      Are you currently receiving purchase order financing?
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span>
                      Are you unable to make an initial payment for the order?
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                    <span className="text-xl font-bold text-emerald-600">
                      4
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold">Required documents</h3>
                </div>
                <div className="space-y-3 pl-14">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span>A list of unfulfilled purchase orders</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span>Financial statements</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                    <span className="text-xl font-bold text-emerald-600">
                      5
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold">Good to know</h3>
                </div>
                <div className="space-y-3 pl-14">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span>
                      Purchase order financing is NOT a loan and therefore, you
                      are not incurring any debt
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span>
                      The application required to establish a purchase order
                      relationship is much simpler than other types of financing
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span>
                      With purchase order financing you can ONLY use the funds
                      to assist with satisfying the order
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span>
                      Purchase order financing can support a single transaction
                      and/or grow with your company’s funding requirements
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-emerald-600 text-white flex justify-center">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to Accept Larger Orders?
              </h2>
              <p className="max-w-[600px] opacity-90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Don't let cash flow constraints limit your business growth. Get
                the funding you need to fulfill large orders and expand your
                business.
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
            © {new Date().getFullYear()} Premium Merchant Funding. All rights
            reserved.
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
