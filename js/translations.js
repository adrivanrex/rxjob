/**
 * INSPINIA - Responsive Admin Theme
 * Copyright 2015 Webapplayers.com
 *
 */
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
            FREE: "It's Free and forever will be",
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

        })
        .translations('bis', {
            DASHBOARD: 'Palibut',
            WELCOME: 'Pakighalubilo sa kalibutan og utingakaya ang palibut sa Merkadu.',
            FIND: "Pangita",
            Manage: "Atimana",
            "your tasks with the Merkadu agile Board": "imong mga buluhaton gamit ang merkadu Eagile Boarda.",
            "the freshest items": "ang pinaka bag.o nga mga gamit",
            "It's Free and forever will be": "Kanunay nga libre",
            FREE: "libre ang pag gamit",
            INTERACT: "lihoka",
            DISCOVER: "diskubreha",
            CREATE: "Maghimo",
            MISCELLANEOUS: "Lahi lahi",
            Activity: "Actibidad",
            TODO: "Buhatonon",
            Title: "Titulo",
            Price: "Presyo",
            Quantity: "Kadaghanon"
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
    .module('inspinia')
    .config(config)
