import {Navbar} from "../../ui";
import {Navigate, Route, Routes} from "react-router-dom";
import {DcPage, HeroPage, MarvelPage, SearchPage} from "../pages";

export const HereoesRoutes = () => {

    return (
        <>
            <Navbar/>
            <div className="container">
                <Routes>
                    <Route path="marvel" element={<MarvelPage />}/>
                    <Route path="dc" element={<DcPage/>}/>
                    <Route path="search" element={<SearchPage />}/>
                    <Route path="hero" element={<HeroPage/>}/>
                    <Route path="/" element={<Navigate to="/marvel"/>}/>
                  {/*  <Route path="/*" element={<Navigate to="/marvel"/>}/>*/}
                </Routes>
            </div>
        </>
    );
}