import { PageWrapper } from "../../utils/pageWrapper";
import { Cover } from "./components/cover";
import { PricingAdvantages } from "./components/pricingAdvantages";
import { PricingTable } from "./components/pricingTable";

function Pricing() {
  return (
    <PageWrapper>
      <main>
        <Cover />
        <div className="md:px-14">
          <PricingAdvantages />
          <PricingTable />
        </div>
      </main>
    </PageWrapper>
  );
}

export default Pricing;
