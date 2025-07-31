import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BadgeDollarSign,
  Building,
  CreditCard,
  TrendingUp,
  Shield,
  Wrench,
  FileText,
  Globe,
  Users,
  Calculator,
} from "lucide-react";
import { EnhancedImage } from "@/components/ui/enhanced-image";

export default function Solutions() {
  const solutions = [
    {
      title: "MCA",
      description:
        "An alternative to traditional bank loans with fast approval and minimal paperwork. Funding amounts range from $2,000 to $2,000,000.",
      features: [
        "Same-day funding available",
        "Minimal paperwork required",
        "No collateral needed",
        "Bad credit accepted",
      ],
      icon: <BadgeDollarSign className="h-8 w-8 text-emerald-600" />,
      image: "/merchant-cash-advance.jpg",
      fallback: "/images/test-business-funding.jpg",
      link: "/merchant-cash-advance",
      rates: "Rates based on financial health and industry",
    },
    {
      title: "Line of Credit",
      description:
        "Flexible funding that provides instant access to funds with revolving credit. Great for businesses with 600+ FICO score and $20,000+ monthly revenue.",
      features: [
        "Revolving credit access",
        "Low rates available",
        "Fast approval process",
        "Access funds as needed",
      ],
      icon: <CreditCard className="h-8 w-8 text-emerald-600" />,
      image: "/line-of-credit.jpg",
      fallback: "/images/test-funding-process.jpg",
      link: "/line-of-credit",
      rates: "Low rates for qualified businesses",
    },
    {
      title: "Term Loan",
      description:
        "Traditional business loans with specified monthly repayment schedules. Best rates available for businesses with strong credit histories.",
      features: [
        "Rates from 7.9% to 24.99%",
        "2-3 week approval process",
        "Fixed monthly payments",
        "Long-term financing",
      ],
      icon: <Building className="h-8 w-8 text-emerald-600" />,
      image: "/term-loan.jpg",
      fallback: "/images/test-business-owner.jpg",
      link: "/term-loan",
      rates: "Best rates for strong credit",
    },
    {
      title: "Equipment Financing",
      description:
        "Fast financing for up to 100% of equipment value. Equipment serves as collateral with competitive rates based on equipment condition.",
      features: [
        "Up to 100% financing",
        "Equipment as collateral",
        "Fast approval process",
        "Tax benefits available",
      ],
      icon: <Wrench className="h-8 w-8 text-emerald-600" />,
      image: "/equipment-financing.jpg",
      fallback: "/images/test-business-funding.jpg",
      link: "/equipment-financing",
      rates: "Based on equipment value and condition",
    },
    {
      title: "Invoice Factoring",
      description:
        "Get paid immediately by selling your outstanding invoices. Rates based on your customer's creditworthiness and invoice terms.",
      features: [
        "Immediate payment",
        "No debt incurred",
        "Customer credit-based",
        "Improved cash flow",
      ],
      icon: <FileText className="h-8 w-8 text-emerald-600" />,
      image: "/factoring.jpg",
      fallback: "/images/test-funding-process.jpg",
      link: "/factoring",
      rates: "Based on customer creditworthiness",
    },
    {
      title: "Purchase Order Financing",
      description:
        "Secure funding to fulfill large orders without taking on debt. Use funds specifically to satisfy purchase orders.",
      features: [
        "No debt incurred",
        "Single transaction support",
        "Simple application",
        "Order-specific funding",
      ],
      icon: <TrendingUp className="h-8 w-8 text-emerald-600" />,
      image: "/po-financing.jpg",
      fallback: "/images/test-business-owner.jpg",
      link: "/po-financing",
      rates: "Based on order security and terms",
    },
    {
      title: "SBA 7(a) Loan",
      description:
        "Government-backed loans offering affordable financing with low interest rates and extended repayment terms up to 25 years.",
      features: [
        "Up to $5 million",
        "25-year terms available",
        "No prepayment penalties",
        "Government-backed",
      ],
      icon: <Shield className="h-8 w-8 text-emerald-600" />,
      image: "/sba-loan.jpg",
      fallback: "/images/test-business-funding.jpg",
      link: "/sba-loan",
      rates: "Low government-backed rates",
    },
    {
      title: "Credit Servicing",
      description:
        "Improve your credit score to qualify for better funding and rates. Remove problematic entries and raise your score in as little as 3 months.",
      features: [
        "Credit repair services",
        "3-month improvement",
        "Better funding access",
        "Lower insurance rates",
      ],
      icon: <TrendingUp className="h-8 w-8 text-emerald-600" />,
      image: "/credit-repair.jpg",
      fallback: "/images/test-funding-process.jpg",
      link: "/credit-servicing",
      rates: "Pricing by quotation",
    },
  ];

  const additionalServices = [
    {
      title: "Credit Card Processing",
      description:
        "State-of-the-art payment processing with the best rates on the market, including wireless and online capabilities.",
      icon: <CreditCard className="h-6 w-6 text-emerald-600" />,
      link: "/credit-card-processing",
    },
    {
      title: "SEO & Digital Marketing",
      description:
        "Increase your online visibility and drive traffic with innovative web marketing solutions and search engine optimization.",
      icon: <Globe className="h-6 w-6 text-emerald-600" />,
      link: "/seo",
    },
    {
      title: "HR/Payroll Services",
      description:
        "Comprehensive payroll and HR management services with benefits administration and workers compensation.",
      icon: <Users className="h-6 w-6 text-emerald-600" />,
      link: "/hr-payroll",
    },
    {
      title: "Bookkeeping Services",
      description:
        "Professional bookkeeping with monthly financial statements, balance sheets, and profit and loss reports.",
      icon: <Calculator className="h-6 w-6 text-emerald-600" />,
      link: "/bookkeeping",
    },
  ];

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
        <section className="w-full py-12 md:py-24 lg:py-16 bg-gradient-to-b from-white to-emerald-50 flex justify-center items-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Fast Business Funding When You Need It Most
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Easy Services provides merchant cash advances in as little
                    as 24 hours. No collateral required. Access $5,000 to
                    $500,000 for your business needs.
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
                  <Link href="#how-it-works" passHref>
                    <Button size="lg" variant="outline">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[300px] w-full overflow-hidden rounded-xl bg-muted md:h-[400px] lg:h-[500px]">
                  <EnhancedImage
                    src="/business-funding.jpg"
                    alt="Business owner reviewing finances"
                    className="object-cover w-full h-full"
                    fallbackSrc="/images/test-business-funding.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section
          id="how-it-works"
          className="w-full py-12 md:py-24 lg:py-32 flex justify-center"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  How Merchant Cash Advance Works
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A simple process designed to get your business the funding it
                  needs quickly.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              {[
                {
                  title: "1. Apply Online",
                  description:
                    "Fill out our simple application form and upload your last 3 months of bank statements.",
                  icon: <Building className="h-10 w-10 text-emerald-600" />,
                  image: "/apply-online.jpg",
                  fallback: "/images/test-business-owner.jpg",
                },
                {
                  title: "2. Get Approved",
                  description:
                    "Receive a funding decision within 24 hours with flexible terms tailored to your business.",
                  icon: <Clock className="h-10 w-10 text-emerald-600" />,
                  image: "/funding-process.jpg",
                  fallback: "/images/test-funding-process.jpg",
                },
                {
                  title: "3. Receive Funds",
                  description:
                    "Once approved, funds are deposited directly into your business bank account.",
                  icon: (
                    <BadgeDollarSign className="h-10 w-10 text-emerald-600" />
                  ),
                  image: "/funding.jpg",
                  fallback: "/images/test-business-funding.jpg",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-4 rounded-lg border p-6"
                >
                  <div className="h-40 w-full mb-2 overflow-hidden rounded-lg">
                    <EnhancedImage
                      src={step.image}
                      alt={step.title}
                      className="h-full w-full object-cover"
                      fallbackSrc={step.fallback}
                      width={320}
                      height={160}
                    />
                  </div>
                  {step.icon}
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-center text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
         <section
          id="benefits"
          className="w-full py-12 md:py-24 lg:py-32 bg-emerald-50 flex justify-center"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Benefits of Our Merchant Cash Advance
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Why thousands of businesses choose our funding solutions.
                </p>
              </div>
            </div>
            <div className="grid gap-6 pt-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Fast Approval",
                  description:
                    "Get approved in as little as 24 hours, not weeks or months like traditional loans.",
                },
                {
                  title: "Simple Repayment",
                  description:
                    "Repayments are made as a percentage of your daily credit card sales.",
                },
                {
                  title: "No Collateral Required",
                  description:
                    "Unsecured funding means your business assets remain free and clear.",
                },
                {
                  title: "Bad Credit Accepted",
                  description:
                    "We focus on your business performance, not just your credit score.",
                },
                {
                  title: "Flexible Use of Funds",
                  description:
                    "Use the money for inventory, equipment, marketing, or any business need.",
                },
                {
                  title: "High Approval Rate",
                  description:
                    "We approve 85% of applications, much higher than traditional bank loans.",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex flex-col space-y-2 rounded-lg border bg-white p-6"
                >
                  <h3 className="text-xl font-bold">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}
        {/* Main Solutions Grid - This replaces the "how-it-works" section */}
        <section
          id="solutions"
          className="w-full py-12 md:py-24 lg:py-32 flex justify-center"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Our Funding Solutions
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose from our comprehensive range of funding options
                  designed to meet your specific business needs.
                </p>
              </div>
            </div>

            <div className="grid gap-6 pt-12 md:grid-cols-2 xl:grid-cols-2">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="flex flex-col rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow max-w-md mx-auto"
                >
                  <div className="relative mb-3 h-60 w-full overflow-hidden rounded-lg">
                    <EnhancedImage
                      src={solution.image}
                      alt={solution.title || "Solution image"}
                      fallbackSrc={solution.fallback}
                      width={400}
                      height={240}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="mb-2 flex items-center gap-2">
                    <span className="text-emerald-600">{solution.icon}</span>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {solution.title}
                    </h3>
                  </div>

                  <p className="text-sm text-gray-600 mb-3">
                    {solution.description}
                  </p>

                  <div className="mb-3">
                    <p className="text-sm font-medium text-emerald-600 mb-1">
                      {solution.rates}
                    </p>
                    <ul className="text-sm text-gray-500 space-y-1">
                      {solution.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href={solution.link} passHref>
                    <Button
                      className="w-full bg-emerald-600 text-white hover:bg-emerald-700 transition-colors text-sm py-2"
                      aria-label={`Learn more about ${solution.title}`}
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="benefits"
          className="w-full py-12 md:py-24 lg:py-32 bg-emerald-50 flex justify-center"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Additional Business Services
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Complete business solutions to help you grow and manage your
                  operations effectively.
                </p>
              </div>
            </div>
            <div className="grid gap-6 pt-8 md:grid-cols-2 lg:grid-cols-4">
              {additionalServices.map((service, index) => (
                <div
                  key={index}
                  className="flex flex-col space-y-4 rounded-lg border bg-white p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3">
                    {service.icon}
                    <h3 className="text-lg font-bold">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm flex-1">
                    {service.description}
                  </p>
                  <Link href={service.link} passHref>
                    <Button variant="outline" size="sm" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="faq"
          className="w-full py-12 md:py-24 lg:py-32 flex justify-center"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get answers to common questions about our merchant cash
                  advance program.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-4 pt-8">
              {[
                {
                  question: "What is a Merchant Cash Advance?",
                  answer:
                    "A Merchant Cash Advance is not a loan, but a purchase of your future credit card sales. We provide you with a lump sum of capital, and in return, we collect a percentage of your daily credit card sales until the advance is paid back.",
                },
                {
                  question: "How much funding can I get?",
                  answer:
                    "Funding amounts typically range from $5,000 to $500,000, depending on your business's monthly revenue and time in business.",
                },
                {
                  question: "What are the requirements to qualify?",
                  answer:
                    "To qualify, your business should be operational for at least 6 months, have a minimum of $10,000 in monthly revenue, and have at least 3 months of bank statements to review.",
                },
                {
                  question: "How long does the application process take?",
                  answer:
                    "Our application process is quick and straightforward. You can complete the application in minutes, and receive a funding decision within 24 hours.",
                },
                {
                  question:
                    "How is a Merchant Cash Advance different from a traditional loan?",
                  answer:
                    "Unlike traditional loans with fixed monthly payments, a Merchant Cash Advance is repaid through a percentage of your daily credit card sales. This means payments flex with your business – you pay less on slow days and more on busy days.",
                },
              ].map((faq, index) => (
                <div key={index} className="rounded-lg border p-6">
                  <h3 className="text-lg font-bold">{faq.question}</h3>
                  <p className="mt-2 text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-emerald-600 text-white flex justify-center">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to grow your business?
              </h2>
              <p className="max-w-[600px] opacity-90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Apply now and get the funding you need in as little as 24 hours.
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
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer id="contact" className="border-t py-6 md:py-0">
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
