 import Home from "views/Home/Home";
 import Committee from "views/Committees/Committees";
 import Speaker from "views/Speaker/Speaker";
 import Publication from "views/Publication/Publication";
 import Latestnews from "views/Latestnews/Latestnews";
 import Agenda from "views/Agenda/Agenda";
 import Venue from "views/Venue/Venue";
 import Visit from "views/Visit/Visit";
 
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
 ];
 
 
 
 export { routes };
 