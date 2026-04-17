import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Give from "./pages/Give";
import Ministries from "./pages/Ministries";
import MeetThePastors from "./pages/MeetThePastors";
import Events from "./pages/Events";
import Podcast from "./pages/Podcast";
import VoicesOfVision from "./pages/VoicesOfVision";
import WhatWeBelieve from "./pages/WhatWeBelieve";
import Connect from "./pages/Connect";
import JourneyWithJesus from "./pages/JourneyWithJesus";
import LeadershipLab from "./pages/LeadershipLab";
import DailyWord from "./pages/DailyWord";
import NextGenLab from "./pages/NextGenLab";
import BibleStudy from "./pages/BibleStudy";
import Gallery from "./pages/Gallery";
import Reveal from "./pages/Reveal";
import PhotoReview from "./pages/PhotoReview";
import WorshipTeam from "./pages/WorshipTeam";
import WrittenWord from "./pages/WrittenWord";
import LegacyOfLove from "./pages/LegacyOfLove";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/give" component={Give} />
      <Route path="/ministries" component={Ministries} />
      <Route path="/meet-the-pastors" component={MeetThePastors} />
      <Route path="/events" component={Events} />
      <Route path="/podcast" component={Podcast} />
      <Route path="/voices-of-vision" component={VoicesOfVision} />
      <Route path="/what-we-believe" component={WhatWeBelieve} />
      <Route path="/connect" component={Connect} />
      <Route path="/journey-with-jesus" component={JourneyWithJesus} />
      <Route path="/leadership-lab" component={LeadershipLab} />
      <Route path="/daily-word" component={DailyWord} />
      <Route path="/nextgen-lab" component={NextGenLab} />
      <Route path="/bible-study" component={BibleStudy} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/worship-team" component={WorshipTeam} />
      <Route path="/legacy-of-love" component={LegacyOfLove} />
      <Route path="/written-word" component={WrittenWord} />
      <Route path="/reveal" component={Reveal} />
      <Route path="/photo-review" component={PhotoReview} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
