import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CookiesPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Cookies Policy | TE IRENE LTD</title>
        <meta name="description" content="Learn about how TE IRENE LTD uses cookies and similar technologies on our website." />
      </Helmet>
      <Header />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Cookies Policy</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">1. What Are Cookies</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
                They are widely used to make websites work more efficiently and to provide information to website owners.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">2. How We Use Cookies</h2>
              <p>
                We use cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Essential Cookies:</strong> These are necessary for the website to function properly and cannot be switched off.</li>
                <li><strong>Performance Cookies:</strong> These help us understand how visitors interact with our website by collecting anonymous information.</li>
                <li><strong>Functional Cookies:</strong> These enable enhanced functionality and personalization, such as remembering your preferences.</li>
                <li><strong>Analytics Cookies:</strong> These help us analyze website traffic and usage patterns to improve our services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">3. Types of Cookies We Use</h2>
              <p>
                <strong>Session Cookies:</strong> These are temporary cookies that expire when you close your browser.
              </p>
              <p>
                <strong>Persistent Cookies:</strong> These remain on your device for a set period or until you delete them manually.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">4. Third-Party Cookies</h2>
              <p>
                We may also use third-party cookies from trusted partners to help us analyze website usage, 
                deliver relevant content, and improve your experience. These third parties have their own privacy policies 
                governing how they use cookies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">5. Managing Cookies</h2>
              <p>
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>View what cookies are stored on your device</li>
                <li>Delete all or specific cookies</li>
                <li>Block all cookies or specific types</li>
                <li>Set preferences for certain websites</li>
              </ul>
              <p className="mt-4">
                Please note that disabling cookies may affect the functionality of our website and your user experience.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">6. Changes to This Policy</h2>
              <p>
                We may update this Cookies Policy from time to time to reflect changes in technology, legislation, 
                or our data practices. We encourage you to review this page periodically.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">7. Contact Us</h2>
              <p>
                If you have any questions about our use of cookies, please contact us at:
              </p>
              <p className="mt-2">
                <strong>TE IRENE LTD</strong><br />
                Email: info@teireneltd.com
              </p>
            </section>

            <p className="text-sm text-muted-foreground mt-8">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CookiesPolicy;
