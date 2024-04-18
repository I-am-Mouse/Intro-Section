import databiz from "../assets/images/client-databiz.svg";
import audiophile from "../assets/images/client-audiophile.svg";
import maker from "../assets/images/client-maker.svg";
import meet from "../assets/images/client-meet.svg";

import desktopBG from "../assets/images/image-hero-desktop.png";
import mobileBG from "../assets/images/image-hero-mobile.png";

const Main = () => {
    return (
            <>
                <main className="flex">
                    <div>
                        <h1>Make remote work</h1>
                        <p>Get your team in sync, no matter your location. Streamline processes, 
                            create team rituals, and watch productivity soar.</p>
                        <button>Learn more</button><br/>
                        <a href="#"><img src={databiz} alt="databiz" /></a>
                        <a href="#"><img src={audiophile} alt="audiophile" /></a>
                        <a href="#"><img src={meet} alt="meet" /></a>
                        <a href="#"><img src={maker} alt="maker" /></a>
                    </div>
                    <div>
                        <img src={desktopBG} alt="desktopBG" />
                        <img src={mobileBG} alt="mobileBG" />
                    </div>
                </main>
            </>
    )
}
export default Main;