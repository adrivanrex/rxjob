
function config($translateProvider) {

    $translateProvider
        .translations('en', {

            // Define all menu elements
            DASHBOARD: 'Dashboard',
            GRAPHS: 'Graphs',
            MAILBOX: 'Mailbox',
            WIDGETS: 'Widgets',
            FORMS: 'Forms',
            APPVIEWS: 'App views',
            OTHERPAGES: 'Other pages',
            UIELEMENTS: 'UI elements',
            MISCELLANEOUS: 'Miscellaneous',
            GRIDOPTIONS: 'Grid options',
            TABLES: 'Tables',
            GALLERY: 'Gallery',
            MENULEVELS: 'Menu levels',
            ANIMATIONS: 'Animations',
            LANDING: 'Landing page',
            LAYOUTS: 'Layouts',
            FIND: "Find",
            FREE: "It's Free",
            INTERACT : "Inter act",
            DISCOVER : "Discover",
            CREATE : "Create",
            // Define some custom text
            WELCOME: 'Communicate with the world and trade around you on Merkadu',
            MESSAGEINFO: 'You have 42 messages and 6 notifications.',
            SEARCH: 'Search for something...',
            Activity: "Activity",
            TODO: "To-do",
            Title: "Title",
            Price: "Price",
            Quantity: "Quantity",
            AGILE: "Agile Board",
            CHATROOM: "Chat Room",
            "InProgress": "In Progress",
            "Completed": "Completed",
            "Contacts": "Contacts",
            MISCELLANEOUS: "Miscellaneous",
            Orders: "orders",
            "Total orders": "Total orders",
            "Statistic": "Statistic",
            "Accepted Orders": "Accepted Orders",
            "Manage": "Manage",
        })
        .translations('bis', {
            DASHBOARD: 'Palibut',
            WELCOME: 'Pakighalubilo sa kalibutan og utingakaya ang palibut sa Merkadu.',
            FIND: "Pangita",
            Manage: "Atimana",
            "your tasks with the Merkadu agile Board": "imong mga buluhaton gamit ang merkadu Agila Board.",
            "the latest items": "ang pinaka bag.o nga mga gamit",
            "It's Free": "Kanunay nga libre",
            FREE: "libre ni",
            INTERACT: "lihoka",
            DISCOVER: "diskubreha",
            CREATE: "Maghimo",
            MISCELLANEOUS: "Lahi lahi",
            Activity: "Actibidad",
            TODO: "Pangbuhaton",
            Title: "Titulo",
            Price: "Presyo",
            Quantity: "Kadaghanon",
            AGILE: "Agila",
            CHATROOM: "Storyahanan",
            "InProgress": "Buhatonon",
            "Completed": "Nahuman",
            "Contacts": "Kaila",
            "Orders": "sugo",
            "Total orders": "tanan sugo",
            "Statistic": "Transactionsugo",
            "Accepted Orders": "sugo nga nadawat",
            "Manage": "Dumala",
            ""
        })
        .translations('fil', {
            Contacts: "Kilala",
            WELCOME: "Maligayang pagdating!",
            FIND: "Maghanap",
            "the latest items": "ang pinakabagong mga gamit",
            TODO: "Gagawin",
            "InProgress": "Ginagawa",
            "Completed": "Nagawa",
            Discover: "Alamin",
            Manage: "Patakbuhin",
            "your tasks with the Merkadu agile Board": "ang mga alituntunin gamit ang Merkadu Agile Board",
            FREE: "Ito ay libre."




        })
        .translations('es', {

            // Define all menu elements
            DASHBOARD: 'Salpicadero',
            GRAPHS: 'Gráficos',
            MAILBOX: 'El correo',
            WIDGETS: 'Widgets',
            FORMS: 'Formas',
            APPVIEWS: 'Vistas app',
            OTHERPAGES: 'Otras páginas',
            UIELEMENTS: 'UI elements',
            MISCELLANEOUS: 'Misceláneo',
            GRIDOPTIONS: 'Cuadrícula',
            TABLES: 'Tablas',
            GALLERY: 'Galería',
            MENULEVELS: 'Niveles de menú',
            ANIMATIONS: 'Animaciones',
            LANDING: 'Página de destino',
            LAYOUTS: 'Esquemas',

            // Define some custom text
            WELCOME: 'Bienvenido Amelia',
            MESSAGEINFO: 'Usted tiene 42 mensajes y 6 notificaciones.',
            SEARCH: 'Busca algo ...',
        });

    $translateProvider.preferredLanguage('en');

}

angular
    .module('cabao')
    .config(config)
