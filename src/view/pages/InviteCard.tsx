import Hero from "../components/sections/Hero/Hero.tsx";
import Invitation from "../components/sections/Invitation.tsx";
import Location from "../components/sections/Location.tsx";
import Countdown from "../components/sections/Countdown.tsx";
import DressCode from "../components/sections/DressCode.tsx";
import Story from "../components/sections/Story.tsx";
import Wishes from "../components/sections/Wishes.tsx";
import RSVP from "../components/sections/RSVP/RSVP.tsx";

export default function InviteCard() {

    return (
        <main className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth">

            <Hero />

            <Invitation />

            <Countdown />

            <Location />

            <DressCode />

            <Story />

            <Wishes />

            <RSVP />

        </main>
    );
}