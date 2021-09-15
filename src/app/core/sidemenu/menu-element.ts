export const menus = [
    {
        'name': 'Dashboard',
        'icon': 'dashboard',
        'link': '/auth/dashboard',
        'open': true,
        //'chip': { 'value': 1, 'color': 'accent' },
       /*  'sub': [
            {
                'name': 'Dashboard',
                'link': '/auth/dashboard',
                'icon': 'dashboard',
                'chip': false,
                'open': true,
            }
        ] */
    },
    {

        'name': 'Sales management',
        'icon': 'money',
        'open': false,
        'link': false,
        'sub': [
            {
                'name': 'Sales history',
                'icon': 'history',
                'link': 'tables/vente',
                'open': false,

            },
            {
                'name': 'sell',
                'icon': 'add_shopping_cart',
                'open': false,
                'link': 'forms/vente_forms',
            },
            // {
            //     'name': 'nvd3',
            //     'icon': 'pie_chart',
            //     'open': false,
            //     'link': 'charts/nvd3-charts',
            // }
        ]
    }, 
    {

        'name': 'User Management',
        'icon': 'people',
        'open': false,
        'link': false,
        'sub': [
            {
                'name': 'Add User',
                'icon': 'person_add',
                'link': 'forms/utilisateur_forms',
                'open': false,

            },
            {
                'name': 'Users list',
                'icon': 'people',
                'open': false,
                'link': 'tables/utilisateur',
            },
            // {
            //     'name': 'nvd3',
            //     'icon': 'pie_chart',
            //     'open': false,
            //     'link': 'charts/nvd3-charts',
            // }
        ]
    }, 
    {

        'name': 'Medicines management',
        'icon': 'pie_chart_outlined',
        'open': false,
        'link': false,
        'sub': [
            {
                'name': 'Add Medicine',
                'icon': 'add_circle',
                'link': 'forms/medicament_forms',
                'open': false,

            },
            {
                'name': 'List Medicine',
                'icon': 'list',
                'open': false,
                'link': 'tables/medicament',
            },
            // {
            //     'name': 'nvd3',
            //     'icon': 'pie_chart',
            //     'open': false,
            //     'link': 'charts/nvd3-charts',
            // }
        ]
    }, 
    {

        'name': 'Pharma management',
        'icon': 'local_hospital',
        'open': false,
        'link': false,
        'sub': [
            {
                'name': 'add a drug store',
                'icon': 'local_pharmacy',
                'link': 'forms/pharmacie_forms',
                'open': false,

            },
            {
                'name': 'Drugstores list',
                'icon': 'list',
                'open': false,
                'link': 'tables/pharmacie',
            },
            // {
            //     'name': 'nvd3',
            //     'icon': 'pie_chart',
            //     'open': false,
            //     'link': 'charts/nvd3-charts',
            // }
        ]
    }, 
    {

        'name': 'Batch management',
        'icon': 'archive',
        'open': false,
        'link': false,
        'sub': [
            {
                'name': 'Add batch',
                'icon': 'add_circle',
                'link': 'forms/lot_forms',
                'open': false,

            },
            {
                'name': 'List batch',
                'icon': 'format_list_numbered',
                'open': false,
                'link': 'tables/lot',
            },
            // {
            //     'name': 'nvd3',
            //     'icon': 'pie_chart',
            //     'open': false,
            //     'link': 'charts/nvd3-charts',
            // }
        ]
    }, 
    {

        'name': 'search a drug',
        'icon': 'search',
        'open': false,
        'link': false,      
            
    }, 

];
