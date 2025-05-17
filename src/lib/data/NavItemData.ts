export const navItemData: NavItemProps[] = [
    {
        title: "Home",
        icon: "ri:home-fill",
        link: "/home",
    },
    {
        title: "Our Services",
        icon: "raphael:hammer",
        link: "/home",
        scrollTo: {base: 200, sm: 300, md: 400, lg: 500}
    },
    {
        title: "The Process",
        icon: "mdi:circular-arrows",
        link: "/home",
        scrollTo: {base: 1700, sm: 2120, md: 2150, lg: 1780}
    },
    {
        title: "About Us",
        icon: "gridicons:info",
        link: "/about-us",
    },
    {
        title: "Reviews",
        icon: "fluent:person-star-16-filled",
        link: "/reviews",
    },
 
    {
        title: "Gallery",
        icon: "ic:baseline-vrpano",
        
        dropdown: true,
        subMenu: [
        {
        title: "Johnsonville Villa",
        icon: "mdi:location",
        link: "/gallery/johnsonville-villa",
    },
    {
        title: "Thorndon Villa",
        icon: "mdi:location",
        link: "/gallery/thorndon-villa",
    },
    {
        title: "Plimmerton Beach House",
        icon: "mdi:location",
        link: "/gallery/plimmerton-beach-house",
    },
    /*{
        title: "Newtown Villa",
        icon: "mdi:location",
        link: "/gallery/newtown-villa",
    },*/
    {
        title: "Renovations at Riverstone Terraces",
        icon: "mdi:location",
        link: "/gallery/renovations-at-riverstone-terraces",
    },
    {
        title: "Renovations in Ngaio",
        icon: "mdi:location",
        link: "/gallery/renovations-in-ngaio",
    },
    {
        title: "Aotea Alterations",
        icon: "mdi:location",
        link: "/gallery/aotea-alterations",
    },
    
        
        ] 
    },
    {
        title: "Estimate My Job",
        icon: "ri:money-dollar-circle-fill",
        link: "/estimate-my-job",
    },
    {
        title: "Contact Us",
        icon: "mdi:email",
        link: "/contact-us",
    },
    
    
    
    
    
]