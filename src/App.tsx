import {Route, Routes} from "react-router-dom";
import LandingPage from "./view/pages/LandingPage.tsx";
import InviteCard from "./view/pages/InviteCard.tsx";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<InviteCard />} />
            <Route path="/invite" element={<LandingPage />} />
        </Routes>
    )
}