import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, BadgeDollarSign, CheckCircle } from "lucide-react";
import { EnhancedImage } from "@/components/ui/enhanced-image";

export default function TermLoan() {
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
                    Term Loan
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    A term loan gives you the cash to grow your business,
                    whether it be to renovate office space or buy inventory. You
                    borrow a lump sum upfront for a specific purpose and repay
                    over time with fixed, equal payments.
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
                    src="/term-loan.jpg"
                    alt="Term Loan Funding"
                    className="object-cover w-full h-full"
                    fallbackSrc="/images/test-business-funding.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Funding Details */}
        <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight mb-8 text-center">
              Long-term financing with terms that will position you for growth
            </h2>
            <div className="max-w-3xl mx-auto space-y-12">
              {/* 1. How funding works */}
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
                  <Item text="A business with strong credit is provided with a long term loan at our lowest rates" />
                  <Item text="Loan is paid off in monthly increments" />
                  <Item text="Rate range: 7.9% – 24.99%" />
                  <Item text="Loan is paid off over a period of 1-5 years" />
                </div>
              </div>

              {/* 2. Rates are based on */}
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
                  <Item text="Industry" />
                  <Item text="The use of funds" />
                  <Item text="Your credit" />
                  <Item text="Overall financial health/profitability of the business" />
                </div>
              </div>

              {/* 3. Ask Yourself */}
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
                  <Item text="Are you currently receiving any term loan financing?" />
                  <Item text="Have you successfully paid off any past term loans?" />
                  <Item text="What do you intend to do with your term loan?" />
                </div>
              </div>

              {/* 4. Required documents */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                    <span className="text-xl font-bold text-emerald-600">
                      4
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold">Required Documents</h2>
                </div>
                <div className="space-y-3 pl-14">
                  <Item text="6 months most recent bank statements" />
                  <Item text="2 most recent years of business tax returns + 1 year personal" />
                  <Item text="Debt schedule" />
                  <Item text="Personal financial statements – updated within last 60 days (balance sheet and P&L for any deal over $800,000)" />
                </div>
              </div>

              {/* 5. Good to know */}
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
                  <Item text="Getting funded for a term loan is a more time-consuming process, usually taking between 2–3 weeks for approval" />
                  <Item text="Term loans offer the most generous loan rates available" />
                  <Item text="If you do not qualify, we’ll pinpoint the reasons and help you build up to an approval" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Service Card - Credit Servicing */}
        <section className="w-full py-6 flex justify-center">
          <div className="container px-3">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-[#DCE3F4]">
              <div className="p-4 space-y-3">
                <h3 className="inline-block bg-emerald-600 text-white text-sm font-medium px-3 py-1 rounded shadow-sm">
                  Credit Servicing
                </h3>
                <p className="text-[#2A4BA0] text-sm leading-snug">
                  Fix your credit score in a heartbeat and put your mind to
                  ease.
                </p>
                <div className="w-full overflow-hidden rounded-lg">
                  <EnhancedImage
                    src="/credit-repair.jpg"
                    alt="Credit Servicing"
                    className="w-full h-[140px] object-cover"
                    fallbackSrc="/placeholder.jpg"
                  />
                </div>
                <div>
                  <Link href="/credit-servicing" passHref>
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

function Item({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
      <span>{text}</span>
    </div>
  );
}
