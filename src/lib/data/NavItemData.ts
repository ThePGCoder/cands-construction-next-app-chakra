export const navItemData: NavItemProps[] = [
    {
        title: "Home",
        icon: "ri:home-fill",
        link: "/home",
    },
    {
        title: "About Me",
        icon: "mdi-account-circle",
        link: "/about-me",
    },
 
    {
        title: "Showcase",
        icon: "tabler:world-www",
        
        dropdown: true,
        subMenu: [
        {title: "Project Management", icon: "mdi:chart-gantt", link: "/showcase/project-management"}, 
        {title: "Bathroom Cost Calculator", icon: "ri:money-dollar-circle-fill", link: "/showcase/bathroom-cost-calculator"}, 
        {title: "CS Innovations", icon: "lets-icons:3d-box-fill", link: "/showcase/cs-innovations"},
        {title: "Lux Car Detailing", icon: "mdi:car-side", link: "/showcase/lux-car-detailing"},
        
        ] 
    },
    {
        title: "Contact Me",
        icon: "ri:mail-fill",
        link: "/contact-me",
    },
    
    
    
    
]