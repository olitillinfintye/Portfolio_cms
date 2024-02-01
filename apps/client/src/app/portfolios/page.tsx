import Footer from '@client/components/Sections/Footer';
import Portfolio from '@client/components/Sections/Portfolios/Portfolio';
import getPortfolios from '@client/libs/server/portfolios/getPortfolio';

export default async function Page() {
  const portfoliosData = await getPortfolios()
  return (
    <main>
      <section className="w-full max-w-7xl mx-auto  my-12 py-12 px-4 md:my-16 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 items-center justify-center">
          {portfoliosData.data.map((portfolio) => (
            <Portfolio portfolio={portfolio.attributes}  />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
