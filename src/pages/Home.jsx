import HomeBanner from "../components/HomeOptions/HomeBanner";
import MainCampaignAndCards from "../components/HomeOptions/MainCampaignAndCards";
import UpperNavbar from "../components/HomeOptions/UpperNavbar";

export default function Home(){
    return (
        <div>
            <HomeBanner/>
            <UpperNavbar/>
            <MainCampaignAndCards/>
        </div>
    )
}