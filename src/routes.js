 import Home from "views/Home/Home";
 import Committee from "views/Committees/Committees";
 import Speaker from "views/Speaker/Speaker";
 import Publication from "views/Publication/Publication";
 import Latestnews from "views/Latestnews/Latestnews";

 import Agenda from "views/Participants/Agenda/Agenda";
 import Venue from "views/Participants/Venue/Venue";
 import Visit from "views/Participants/Visit/Visit";

 import Scopes from "views/CallForPapers/Scopes/Scopes";
 import ImportantDates from "views/CallForPapers/ImportantDates/ImportantDates";
 import SubmitNow from "views/CallForPapers/SubmitNow/SubmitNow";

 import Listener from "views/Listener/Listener";

 
 var routes = [
     {
         path: "/home",
         name: "Home",
         component: Home,
     },
     {
        path: "/committee",
        name: "Committee",
        component: Committee,
    },
     {
        path: "/speaker",
        name: "Speaker",
        component: Speaker,
    },
     {
        path: "/publication",
        name: "Publication",
        component: Publication,
    },
    {
        path: "/latestnews",
        name: "Latestnews",
        component: Latestnews,
    },
    {
        path: "/agenda",
        name: "Agenda",
        component: Agenda,
    }, 
    {
        path: "/venue",
        name: "Venue",
        component: Venue,
    },
    {
        path: "/visit",
        name: "Visit",
        component: Visit,
    },
    {
        path: "/listener",
        name: "Listener",
        component: Listener
    },
    {
        path: "/importantdates",
        name: "ImportantDates",
        component: ImportantDates
    },
    {
        path: "/scopes",
        name: "Scopes",
        component: Scopes
    },
    {
        path: "/submitnow",
        name: "SubmitNow",
        component: SubmitNow
    },
 ];
 
 
 
 export { routes };
 