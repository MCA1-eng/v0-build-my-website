import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, BadgeDollarSign, CheckCircle } from "lucide-react";
import { EnhancedImage } from "@/components/ui/enhanced-image";

export default function MerchantCashAdvance() {
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
                    MCA
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Alternative to lengthy approval processes and strict credit
                    requirements for traditional term loans. An MCA provides
                    unsecured capital to small business owners on future credit
                    card sales, providing small businesses an alternative to
                    traditional bank loans. MCA quickly provides cash for
                    businesses, allowing you to borrow against future earnings
                    to access that capital today.
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
                    src="/merchant-cash-advance.jpg"
                    alt="Merchant cash advance funding"
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
              Unsecured working capital when your business needs it
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
                        Factor rate range: 15% – 49%; the advance is at a fixed
                        rate, not an APR
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span>
                        Repayment can be made on either a Daily, Weekly,
                        Bi-Weekly, or Monthly payment
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span>
                        Repayment terms range from 30 days up to 24 months
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span>
                        Repayment can be made through ACH Debits or Credit Card
                        Processing holdbacks
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span>
                        Funds can be sent in as quick as one business day
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span>
                        Funding amounts range from $2,000 up to $2,000,000
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
                      <span>Average monthly revenue</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span>Time in business</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span>Credit profile</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span>Overall financial health / profitability</span>
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
                      <span>1-page data form (application)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span>3-6 months of business bank statements</span>
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
                      <span>
                        Additional stipulations may be requested, such as: proof
                        of ownership, financials (P&L and balance sheet), tax
                        returns, accounts receivable reports
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
                      <span>How do you plan on using the funding?</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span>How quickly do you need funding?</span>
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
                        Even if your credit score is low or you have negative
                        financial history or the business is less than one year
                        old, there are still funding options with a merchant
                        cash advance
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span>
                        We can consolidate existing merchant cash advances to
                        lower payments and increase cash flow
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span>
                        This is a fast and convenient process with minimal
                        paperwork and same-day funding available
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span>
                        When the balance is 50% paid, your business will be
                        eligible for additional funding
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span>
                        Great option of any business that is grossing $10,000 in
                        revenue per month and has been in business for at least
                        6 months
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Service Card (Styled for easyservice.info theme) */}
        <section className="w-full py-6 flex justify-center">
          <div className="container px-3">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-[#DCE3F4]">
              <div className="p-4 space-y-3">
                <h3 className="inline-block bg-emerald-600 text-white text-sm font-medium px-3 py-1 rounded shadow-sm">
                  Line of Credit
                </h3>
                <p className="text-[#2A4BA0] text-sm leading-snug">
                  A fast approval process requiring minimal paperwork to provide
                  you with a flexible loan.
                </p>
                <div className="w-full overflow-hidden rounded-lg">
                  <EnhancedImage
                    src="/business-funding.jpg"
                    alt="Line of Credit Funding"
                    className="w-full h-[140px] object-cover"
                    fallbackSrc="/placeholder.jpg"
                  />
                </div>
                <div>
                  <Link href="/line-of-credit" passHref>
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
                Ready to Get Funded?
              </h2>
              <p className="max-w-[600px] opacity-90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Apply now for merchant cash advance funding and get the capital
                your business needs in as little as 24 hours.
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
