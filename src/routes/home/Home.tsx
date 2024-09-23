import { PageWrapper } from "../../utils/pageWrapper";
import { Cover } from "./components/cover";
import { Possibilities } from "./components/possibilities";
import { NewApp } from "./components/newApp";
import { SendMoney } from "./components/sendMoney";
import { FlexAccount } from "./components/flexAccount";
import { Faq } from "./components/faq";
import { DownloadApp } from "./components/downlodApp";
import { ImagesFont } from "../../constants/appConstants";
function Home() {
  const {cover} = ImagesFont
  return (
    <PageWrapper>
      <main>
        <div style={{ backgroundImage: `url(${cover})`, backgroundSize:'cover' }} className="md:px-10">
          <Cover />
        </div>
        <div className="md:px-10">
          <Possibilities />
          <NewApp />
          <SendMoney />
        </div>
        <div>
          <FlexAccount />
          <Faq />
        </div>
        <div className="md:px-14">
          <DownloadApp />
          {/* <Question /> */}
          {/* <Help /> */}
        </div>
      </main>
    </PageWrapper>
  );
}

export default Home;
