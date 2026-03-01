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
