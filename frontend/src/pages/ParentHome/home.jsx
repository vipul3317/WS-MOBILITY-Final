import React from "react";
import ParentNav from "../../components/navbar/parentNav";
import ParentHero from "../../components/hero/parentHero";
import ParentFooter from "../../components/footer/parentFooter";
import ScrollToTopButton from "../../utils/ScrollToTopButton";

const ParentHome = () => {
    return (
        <div id="home">
            <ScrollToTopButton />
            <ParentNav />
            <ParentHero />
            <ParentFooter />
        </div>
    )
}

export default ParentHome;