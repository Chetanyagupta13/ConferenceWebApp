 import Home from "views/Home/Home";
 import Committee from "views/Committees/Committees";
 import Speaker from "views/Speaker/Speaker";
 import Publication from "views/Publication/Publication";
 import Latestnews from "views/Latestnews/Latestnews";

 
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
     
 ];
 
 
 
 export { routes };
 