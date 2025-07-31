import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BadgeDollarSign,

  CheckCircle,

} from "lucide-react";
import { EnhancedImage } from "@/components/ui/enhanced-image";

export default function LineOfCredit() {
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
                    Line of Credit
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    A flexible loan that you can access as needed to borrow up
                    to a certain amount over time. A line of credit allows you
                    to borrow funds for planned and unexpected expenses with a
                    low rate. The approval process is fast and requires minimal
                    paperwork.
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
                    src="/line-of-credit.jpg"
                    alt="Line of credit funding"
                    className="object-cover w-full h-full"
                    fallbackSrc="/images/test-business-funding.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Funding Details Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight mb-8 text-center">
              Revolving line of credit for instant access to funds
            </h2>
            <div className="max-w-3xl mx-auto space-y-12">
              <div className="space-y-8">
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
                        A business making more than $20,000 with owner(s) FICO
                        scores above a 600 is provided with a revolving Line of
                        Credit (LOC) at low rates
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span>Rate range: 4.8%-24.99%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span>
                        LOC is paid on a consistent predetermined schedule
                        (weekly or monthly)
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span>LOC terms are 6, 12, or 18 months</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span>
                        More funds are available to draw as the principal is
                        paid down
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span>Credit lines up to $250,000</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span>
                        Approvals are extremely fast, and the credit limit can
                        increase as long as there is a good repayment history
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
                    <h2 className="text-2xl font-bold">Rates are based on</h2>
                  </div>
                  <div className="space-y-3 pl-14">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span>Credit score and profile</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span>Time in business</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span>Monthly revenue</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span>Industry</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                      <span className="text-xl font-bold text-emerald-600">
                        3
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold">Required documents</h2>
                  </div>
                  <div className="space-y-3 pl-14">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span>
                        3-6 months of recent bank statements or securely linking
                        the business bank account
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span>
                        Application with basic details about the business and
                        merchant
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span>Driver's license</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span>Voided check</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span>Proof of Address</span>
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
                    <h2 className="text-2xl font-bold">Ask Yourself</h2>
                  </div>
                  <div className="space-y-3 pl-14">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span>
                        Do you have any existing debt on your balance sheet? If
                        yes, what are the balances owed and who are the balances
                        owed to?
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span>
                        Do you anticipate needing funding anytime in the next 12
                        months?
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span>
                        What do you intend to do with the funds from a line of
                        credit?
                      </span>
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
                    <h2 className="text-2xl font-bold">Good to know</h2>
                  </div>
                  <div className="space-y-3 pl-14">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span>
                        Why not set up a line of credit now for a rainy day, as
                        you won't be paying anything until you draw from it?
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span>
                        Repayment can be made on a weekly or monthly basis
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span>
                        Great option for business owners with a 600+ FICO score
                        and grossing at least $20,000 per month
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Service Card - Merchant Cash Advance */}
        <section className="w-full py-6 flex justify-center">
          <div className="container px-3">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-[#DCE3F4]">
              <div className="p-4 space-y-3">
                <h3 className="inline-block bg-emerald-600 text-white text-sm font-medium px-3 py-1 rounded shadow-sm">
                  Merchant Cash Advance
                </h3>
                <p className="text-[#2A4BA0] text-sm leading-snug">
                  Provides unsecured working capital to small business owners on
                  future credit card sales.
                </p>
                <div className="w-full overflow-hidden rounded-lg">
                  <EnhancedImage
                    src="/merchant-cash-advance.jpg"
                    alt="Merchant Cash Advance Funding"
                    className="w-full h-[140px] object-cover"
                    fallbackSrc="/placeholder.jpg"
                  />
                </div>
                <div>
                  <Link href="/merchant-cash-advance" passHref>
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 text-xs rounded-md shadow inline-flex items-center gap-1.5">
                      Find out more
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Button>
                  </Link>
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
                Ready to Get Your Line of Credit?
              </h2>
              <p className="max-w-[600px] opacity-90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Apply now for a flexible line of credit and get instant access
                to funds when you need them. Low rates and fast approval
                process.
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
