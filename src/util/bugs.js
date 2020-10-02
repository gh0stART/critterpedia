const bugs = [
    {
        name: 'Common Butterfly',
        imgLarge: '/img/bugs/commonbutterfly.png',
        imgSmall: '/img/bugs/commonbutterfly-small.png',
        north: [
            'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'sept', 'oct', 'nov', 'dec'
        ],
        south: [
            'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'
        ],
        times: [
            '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm',
        ]
    },

    {
        name: 'Yellow Butterfly',
        imgLarge: '/img/bugs/yellowbutterfly.png',
        imgSmall: '/img/bugs/yellowbutterfly-small.png',
        north: [
           'mar', 'apr', 'may', 'jun', 'sept', 'oct',
        ],
        south: [
            'mar', 'apr', 'sept', 'oct', 'nov', 'dec'
        ],
        times: [
            '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm',
        ]
    },

    {
        name: 'Tiger Butterfly',
        imgLarge: '/img/bugs/tigerbutterfly.png',
        imgSmall: '/img/bugs/tigerbutterfly-small.png',
        north: [
            'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept',
        ],
        south: [
            'jan', 'feb', 'mar', 'sept', 'oct', 'nov', 'dec'
        ],
        times: [
            '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm',
        ]
    },

    {
        name: 'Peacock Butterfly',
        imgLarge: '/img/bugs/peacockbutterfly.png',
        imgSmall: '/img/bugs/peacockbutterfly-small.png',
        north: [
            'mar', 'apr', 'may', 'jun',
        ],
        south: [
            'sept', 'oct', 'nov', 'dec'
        ],
        times: [
            '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm',
        ]
    },

    {
        name: 'Common Bluebottle',
        imgLarge: '/img/bugs/commonbluebottle.png',
        imgSmall: '/img/bugs/commonbluebottle-small.png',
        north: [
            'apr', 'may', 'jun', 'jul', 'aug',
        ],
        south: [
            'jan', 'feb', 'oct', 'nov', 'dec'
        ],
        times: [
            '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm',
        ]
    },

    {
        name: 'Paper Kite Butterfly',
        imgLarge: '/img/bugs/paperkitebutterfly.png',
        imgSmall: '/img/bugs/paperkitebutterfly-small.png',
        north: [
            'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'
        ],
        south: [
            'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'
        ],
        times: [
            '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm',
        ]
    },

    {
        name: 'Great Purple Emperor',
        imgLarge: '/img/bugs/greatpurpleemperor.png',
        imgSmall: '/img/bugs/greatpurpleemperor-small.png',
        north: [
            'may', 'jun', 'jul', 'aug',
        ],
        south: [
            'jan', 'feb', 'nov', 'dec'
        ],
        times: [
            '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm',
        ]
    },

    {
        name: 'Monarch Butterfly',
        imgLarge: '/img/bugs/monarchbutterfly.png',
        imgSmall: '/img/bugs/monarchbutterfly-small.png',
        north: [
            'sept', 'oct', 'nov',
        ],
        south: [
            'mar', 'apr', 'may',
        ],
        times: [
            '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm',
        ]
    },

    {
        name: 'Emperor Butterfly',
        imgLarge: '/img/bugs/emperorbutterfly.png',
        imgSmall: '/img/bugs/emperorbutterfly-small.png',
        north: [
            'jan', 'feb', 'mar', 'jun', 'jul', 'aug', 'sept', 'dec'
        ],
        south: [
            'jan', 'feb', 'mar', 'jun', 'jul', 'aug', 'sept', 'dec'
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Agrias Butterfly',
        imgLarge: '/img/bugs/agriasbutterfly.png',
        imgSmall: '/img/bugs/agriasbutterfly-small.png',
        north: [
            'apr', 'may', 'jun', 'jul', 'aug', 'sept',
        ],
        south: [
            'jan', 'feb', 'oct', 'nov', 'dec'
        ],
        times: [
            '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm',
        ]
    },

    {
        name: 'Rajah Brookes Birdwing',
        imgLarge: '/img/bugs/rajahbrookesbirdwing.png',
        imgSmall: '/img/bugs/rajahbrookesbirdwing-small.png',
        north: [
            'jan', 'feb', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'dec'
        ],
        south: [
            'jan', 'feb', 'mar', 'jun', 'jul', 'aug', 'oct', 'nov', 'dec'
        ],
        times: [
            '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm',
        ]
    },

    {
        name: 'Queen Alexandras Birdwing',
        imgLarge: '/img/bugs/queenalexandrasbirdwing.png',
        imgSmall: '/img/bugs/queenalexandrasbirdwing-small.png',
        north: [
            'may', 'jun', 'jul', 'aug', 'sept',
        ],
        south: [
            'jan', 'feb', 'mar', 'nov', 'dec'
        ],
        times: [
            '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm',
        ]
    },

    {
        name: 'Moth',
        imgLarge: '/img/bugs/moth.png',
        imgSmall: '/img/bugs/moth-small.png',
        north: [
            'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'
        ],
        south: [
            'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'
        ],
        times: [
            '12am', '1am', '2am', '3am', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Atlas Moth',
        imgLarge: '/img/bugs/atlasmoth.png',
        imgSmall: '/img/bugs/atlasmoth-small.png',
        north: [
            'apr', 'may', 'jun', 'jul', 'aug', 'sept',
        ],
        south: [
            'jan', 'feb', 'mar', 'oct', 'nov', 'dec'
        ],
        times: [
            '12am', '1am', '2am', '3am', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Madagascan Sunset Moth',
        imgLarge: '/img/bugs/madagascansunsetmoth.png',
        imgSmall: '/img/bugs/madagascansunsetmoth-small.png',
        north: [
            'apr', 'may', 'jun', 'jul', 'aug', 'sept',
        ],
        south: [
            'jan', 'feb', 'mar', 'oct', 'nov', 'dec'
        ],
        times: [
            '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm',
        ]
    },

    {
        name: 'Long Locust',
        imgLarge: '/img/bugs/longlocust.png',
        imgSmall: '/img/bugs/longlocust-small.png',
        north: [
            'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov',
        ],
        south: [
            'jan', 'feb', 'mar', 'apr', 'may', 'oct', 'nov', 'dec'
        ],
        times: [
            '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm',
        ]
    },

    {
        name: 'Migratory Locust',
        imgLarge: '/img/bugs/migratorylocust.png',
        imgSmall: '/img/bugs/migratorylocust-small.png',
        north: [
            'aug', 'sept', 'oct', 'nov',
        ],
        south: [
            'feb', 'mar', 'apr', 'may',
        ],
        times: [
            '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm',
        ]
    },

    {
        name: 'Rice Grasshopper',
        imgLarge: '/img/bugs/ricegrasshopper.png',
        imgSmall: '/img/bugs/ricegrasshopper-small.png',
        north: [
            'aug', 'sept', 'oct', 'nov',
        ],
        south: [
            'feb', 'mar', 'apr', 'may',
        ],
        times: [
            '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm',
        ]
    },

    {
        name: 'Grasshopper',
        imgLarge: '/img/bugs/grasshopper.png',
        imgSmall: '/img/bugs/grasshopper-small.png',
        north: [
            'jul', 'aug', 'sept',
        ],
        south: [
            'jan', 'feb', 'mar',
        ],
        times: [
            '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm',
        ]
    },

    {
        name: 'Cricket',
        imgLarge: '/img/bugs/cricket.png',
        imgSmall: '/img/bugs/cricket-small.png',
        north: [
            'sept', 'oct', 'nov',
        ],
        south: [
            'mar', 'apr', 'may',
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Bell Cricket',
        imgLarge: '/img/bugs/bellcricket.png',
        imgSmall: '/img/bugs/bellcricket-small.png',
        north: [
            'sept', 'oct',
        ],
        south: [
            'mar', 'apr',
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Mantis',
        imgLarge: '/img/bugs/mantis.png',
        imgSmall: '/img/bugs/mantis-small.png',
        north: [
            'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov',
        ],
        south: [
            'jan', 'feb', 'mar', 'apr', 'may', 'sept', 'oct', 'nov', 'dec'
        ],
        times: [
            '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm',
        ]
    },

    {
        name: 'Orchid Mantis',
        imgLarge: '/img/bugs/orchidmantis.png',
        imgSmall: '/img/bugs/orchidmantis-small.png',
        north: [
            'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov',
        ],
        south: [
            'jan', 'feb', 'mar', 'apr', 'may', 'sept', 'oct', 'nov', 'dec'
        ],
        times: [
            '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm',
        ]
    },

    {
        name: 'Honeybee',
        imgLarge: '/img/bugs/honeybee.png',
        imgSmall: '/img/bugs/honeybee-small.png',
        north: [
            'mar', 'apr', 'may', 'jun', 'jul',
        ],
        south: [
            'jan', 'sept', 'oct', 'nov', 'dec'
        ],
        times: [
            '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm',
        ]
    },

    {
        name: 'Wasp',
        imgLarge: '/img/bugs/wasp.png',
        imgSmall: '/img/bugs/wasp-small.png',
        north: [
            'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'
        ],
        south: [
            'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Brown Cicada',
        imgLarge: '/img/bugs/browncicada.png',
        imgSmall: '/img/bugs/browncicada-small.png',
        north: [
            'jul', 'aug',
        ],
        south: [
            'jan', 'feb',
        ],
        times: [
            '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm',
        ]
    },

    {
        name: 'Robust Cicada',
        imgLarge: '/img/bugs/robustcicada.png',
        imgSmall: '/img/bugs/robustcicada-small.png',
        north: [
            'jul', 'aug',
        ],
        south: [
            'jan', 'feb',
        ],
        times: [
            '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm',
        ]
    },

    {
        name: 'Giant Cicada',
        imgLarge: '/img/bugs/giantcicada.png',
        imgSmall: '/img/bugs/giantcicada-small.png',
        north: [
            'jul', 'aug',
        ],
        south: [
            'jan', 'feb',
        ],
        times: [
            '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm',
        ]
    },

    {
        name: 'Walker Cicada',
        imgLarge: '/img/bugs/walkercicada.png',
        imgSmall: '/img/bugs/walkercicada-small.png',
        north: [
            'aug', 'sept',
        ],
        south: [
            'feb', 'mar',
        ],
        times: [
            '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm',
        ]
    },

    {
        name: 'Evening Cicada',
        imgLarge: '/img/bugs/eveningcicada.png',
        imgSmall: '/img/bugs/eveningcicada-small.png',
        north: [
            'jul', 'aug',
        ],
        south: [
            'jan', 'feb',
        ],
        times: [
            '4am', '5am', '6am', '7am', '4pm', '5pm', '6pm', '7pm',
        ]
    },

    {
        name: 'Cicada Shell',
        imgLarge: '/img/bugs/cicadashell.png',
        imgSmall: '/img/bugs/cicadashell-small.png',
        north: [
            'jul', 'aug',
        ],
        south: [
            'jan', 'feb',
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Red Dragonfly',
        imgLarge: '/img/bugs/reddragonfly.png',
        imgSmall: '/img/bugs/reddragonfly-small.png',
        north: [
            'sept', 'oct',
        ],
        south: [
            'mar', 'apr',
        ],
        times: [
            '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm',
        ]
    },

    {
        name: 'Darner Dragonfly',
        imgLarge: '/img/bugs/darnerdragonfly.png',
        imgSmall: '/img/bugs/darnerdragonfly-small.png',
        north: [
            'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct',
        ],
        south: [
            'jan', 'feb', 'mar', 'apr', 'oct', 'nov', 'dec'
        ],
        times: [
            '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm',
        ]
    },

    {
        name: 'Banded Dragonfly',
        imgLarge: '/img/bugs/bandeddragonfly.png',
        imgSmall: '/img/bugs/bandeddragonfly-small.png',
        north: [
            'may', 'jun', 'jul', 'aug', 'sept', 'oct',
        ],
        south: [
            'jan', 'feb', 'mar', 'apr', 'nov', 'dec'
        ],
        times: [
            '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm',
        ]
    },

    {
        name: 'Damselfly',
        imgLarge: '/img/bugs/damselfly.png',
        imgSmall: '/img/bugs/damselfly-small.png',
        north: [
            'jan', 'feb', 'nov', 'dec'
        ],
        south: [
            'may', 'jun', 'jul', 'aug',
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Firefly',
        imgLarge: '/img/bugs/firefly.png',
        imgSmall: '/img/bugs/firefly-small.png',
        north: [
            'jun',
        ],
        south: [
            'dec'
        ],
        times: [
            '12am', '1am', '2am', '3am', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Mole Cricket',
        imgLarge: '/img/bugs/molecricket.png',
        imgSmall: '/img/bugs/molecricket-small.png',
        north: [
            'jan', 'feb', 'mar', 'apr', 'may', 'nov', 'dec'
        ],
        south: [
            'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov',
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Pondskater',
        imgLarge: '/img/bugs/pondskater.png',
        imgSmall: '/img/bugs/pondskater-small.png',
        north: [
            'may', 'jun', 'jul', 'aug', 'sept',
        ],
        south: [
            'jan', 'feb', 'mar', 'nov', 'dec'
        ],
        times: [
            '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm',
        ]
    },

    {
        name: 'Diving Beetle',
        imgLarge: '/img/bugs/divingbeetle.png',
        imgSmall: '/img/bugs/divingbeetle-small.png',
        north: [
            'may', 'jun', 'jul', 'aug', 'sept',
        ],
        south: [
            'jan', 'feb', 'mar', 'nov', 'dec'
        ],
        times: [
            '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm',
        ]
    },

    {
        name: 'Giant Water Bug',
        imgLarge: '/img/bugs/giantwaterbug.png',
        imgSmall: '/img/bugs/giantwaterbug-small.png',
        north: [
            'apr', 'may', 'jun', 'jul', 'aug', 'sept',
        ],
        south: [
            'jan', 'feb', 'mar', 'oct', 'nov', 'dec'
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Stinkbug',
        imgLarge: '/img/bugs/stinkbug.png',
        imgSmall: '/img/bugs/stinkbug-small.png',
        north: [
            'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct',
        ],
        south: [
            'jan', 'feb', 'mar', 'apr', 'sept', 'oct', 'nov', 'dec'
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Man-faced Stink Bug',
        imgLarge: '/img/bugs/manfacedstinkbug.png',
        imgSmall: '/img/bugs/manfacedstinkbug-small.png',
        north: [
            'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct',
        ],
        south: [
            'jan', 'feb', 'mar', 'apr', 'sept', 'oct', 'nov', 'dec'
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Ladybug',
        imgLarge: '/img/bugs/ladybug.png',
        imgSmall: '/img/bugs/ladybug-small.png',
        north: [
            'mar', 'apr', 'may', 'jun', 'oct',
        ],
        south: [
            'apr', 'sept', 'oct', 'nov', 'dec'
        ],
        times: [
            '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm',
        ]
    },

    {
        name: 'Tiger Beetle',
        imgLarge: '/img/bugs/tigerbeetle.png',
        imgSmall: '/img/bugs/tigerbeetle-small.png',
        north: [
            'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 
        ],
        south: [
            'jan', 'feb', 'mar', 'apr', 'aug', 'sept', 'oct', 'nov', 'dec'
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Jewel beetle',
        imgLarge: '/img/bugs/jewelbeetle.png',
        imgSmall: '/img/bugs/jewelbeetle-small.png',
        north: [
            'apr', 'may', 'jun', 'jul', 'aug',
        ],
        south: [
            'jan', 'feb', 'oct', 'nov', 'dec'
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Violin Beetle',
        imgLarge: '/img/bugs/violinbeetle.png',
        imgSmall: '/img/bugs/violinbeetle-small.png',
        north: [
            'may', 'jun', 'sept', 'oct', 'nov',
        ],
        south: [
            'mar', 'apr', 'may', 'nov', 'dec'
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Citrus Long-horned Beetle',
        imgLarge: '/img/bugs/citruslonghornedbeetle.png',
        imgSmall: '/img/bugs/citruslonghornedbeetle-small.png',
        north: [
            'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'
        ],
        south: [
            'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Rosalia Batesi Beetle',
        imgLarge: '/img/bugs/rosaliabatesibeetle.png',
        imgSmall: '/img/bugs/rosaliabatesibeetle-small.png',
        north: [
            'may', 'jun', 'jul', 'aug', 'sept',
        ],
        south: [
            'jan', 'feb', 'mar', 'nov', 'dec'
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Blue Weevil Beetle',
        imgLarge: '/img/bugs/blueweevilbeetle.png',
        imgSmall: '/img/bugs/blueweevilbeetle-small.png',
        north: [
            'jul', 'aug',
        ],
        south: [
            'jan', 'feb',
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Dung Beetle',
        imgLarge: '/img/bugs/dungbeetle.png',
        imgSmall: '/img/bugs/dungbeetle-small.png',
        north: [
            'jan', 'feb', 'dec'
        ],
        south: [
            'jun', 'jul', 'aug',
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Earth-boring Dung Beetle',
        imgLarge: '/img/bugs/earthboringdungbeetle.png',
        imgSmall: '/img/bugs/earthboringdungbeetle-small.png',
        north: [
            'jul', 'aug', 'sept',
        ],
        south: [
            'jan', 'feb', 'mar',
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Scarab Beetle',
        imgLarge: '/img/bugs/scarabbeetle.png',
        imgSmall: '/img/bugs/scarabbeetle-small.png',
        north: [
            'jul', 'aug',
        ],
        south: [
            'jan', 'feb',
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '11pm', '12xm'
        ]
    },

    {
        name: 'Drone Beetle',
        imgLarge: '/img/bugs/dronebeetle.png',
        imgSmall: '/img/bugs/dronebeetle-small.png',
        north: [
            'jun', 'jul', 'aug',
        ],
        south: [
            'jan', 'feb', 'dec'
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Goliath Beetle',
        imgLarge: '/img/bugs/goliathbeetle.png',
        imgSmall: '/img/bugs/goliathbeetle-small.png',
        north: [
            'jun', 'jul', 'aug', 'sept',
        ],
        south: [
            'jan', 'feb', 'mar', 'dec'
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Saw Stag',
        imgLarge: '/img/bugs/sawstag.png',
        imgSmall: '/img/bugs/sawstag-small.png',
        north: [
            'jul', 'aug',
        ],
        south: [
            'jan', 'feb',
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Miyama Stag',
        imgLarge: '/img/bugs/miyamastag.png',
        imgSmall: '/img/bugs/miyamastag-small.png',
        north: [
            'jul', 'aug',
        ],
        south: [
            'jan', 'feb',
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Giant Stag',
        imgLarge: '/img/bugs/giantstag.png',
        imgSmall: '/img/bugs/giantstag-small.png',
        north: [
            'jul', 'aug',
        ],
        south: [
            'jan', 'feb',
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '11pm', '12xm'
        ]
    },

    {
        name: 'Rainbow Stag',
        imgLarge: '/img/bugs/rainbowstag.png',
        imgSmall: '/img/bugs/rainbowstag-small.png',
        north: [
            'jun', 'jul', 'aug', 'sept',
        ],
        south: [
            'jan', 'feb', 'mar', 'dec'
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Cyclommatus Stag',
        imgLarge: '/img/bugs/cyclommatusstag.png',
        imgSmall: '/img/bugs/cyclommatusstag-small.png',
        north: [
            'jul', 'aug',
        ],
        south: [
            'jan', 'feb',
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Golden Stag',
        imgLarge: '/img/bugs/goldenstag.png',
        imgSmall: '/img/bugs/goldenstag-small.png',
        north: [
            'jul', 'aug',
        ],
        south: [
            'jan', 'feb',
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Giraffe Stag',
        imgLarge: '/img/bugs/giraffestag.png',
        imgSmall: '/img/bugs/giraffestag-small.png',
        north: [
            'jul', 'aug',
        ],
        south: [
            'jan', 'feb',
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Horned Dynastid',
        imgLarge: '/img/bugs/horneddynastid.png',
        imgSmall: '/img/bugs/horneddynastid-small.png',
        north: [
            'jul', 'aug',
        ],
        south: [
            'jan', 'feb',
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Horned Atlas',
        imgLarge: '/img/bugs/hornedatlas.png',
        imgSmall: '/img/bugs/hornedatlas-small.png',
        north: [
            'jul', 'aug',
        ],
        south: [
            'jan', 'feb',
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Horned Elephant',
        imgLarge: '/img/bugs/hornedelephant.png',
        imgSmall: '/img/bugs/hornedelephant-small.png',
        north: [
            'jul', 'aug',
        ],
        south: [
            'jan', 'feb',
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Horned Hercules',
        imgLarge: '/img/bugs/hornedhercules.png',
        imgSmall: '/img/bugs/hornedhercules-small.png',
        north: [
            'jul', 'aug',
        ],
        south: [
            'jan', 'feb',
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Walking Stick',
        imgLarge: '/img/bugs/walkingstick.png',
        imgSmall: '/img/bugs/walkingstick-small.png',
        north: [
            'jul', 'aug', 'sept', 'oct', 'nov',
        ],
        south: [
            'jan', 'feb', 'mar', 'apr', 'may',
        ],
        times: [
            '4am', '5am', '6am', '7am', '5pm', '6pm',
        ]
    },

    {
        name: 'Walking Leaf',
        imgLarge: '/img/bugs/walkingleaf.png',
        imgSmall: '/img/bugs/walkingleaf-small.png',
        north: [
            'jul', 'aug', 'sept',
        ],
        south: [
            'jan', 'feb', 'mar',
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Bagworm',
        imgLarge: '/img/bugs/bagworm.png',
        imgSmall: '/img/bugs/bagworm-small.png',
        north: [
            'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'
        ],
        south: [
            'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Ant',
        imgLarge: '/img/bugs/ant.png',
        imgSmall: '/img/bugs/ant-small.png',
        north: [
            'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'
        ],
        south: [
            'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Hermit Crab',
        imgLarge: '/img/bugs/hermitcrab.png',
        imgSmall: '/img/bugs/hermitcrab-small.png',
        north: [
            'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'
        ],
        south: [
            'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Wharf Roach',
        imgLarge: '/img/bugs/wharfroach.png',
        imgSmall: '/img/bugs/wharfroach-small.png',
        north: [
            'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'
        ],
        south: [
            'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Fly',
        imgLarge: '/img/bugs/fly.png',
        imgSmall: '/img/bugs/fly-small.png',
        north: [
            'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'
        ],
        south: [
            'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Mosquito',
        imgLarge: '/img/bugs/mosquito.png',
        imgSmall: '/img/bugs/mosquito-small.png',
        north: [
            'jun', 'jul', 'aug', 'sept',
        ],
        south: [
            'jan', 'feb', 'mar', 'dec'
        ],
        times: [
            '12am', '1am', '2am', '3am', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Flea',
        imgLarge: '/img/bugs/flea.png',
        imgSmall: '/img/bugs/flea-small.png',
        north: [
            'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov',
        ],
        south: [
            'jan', 'feb', 'mar', 'apr', 'may', 'oct', 'nov', 'dec'
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Snail',
        imgLarge: '/img/bugs/snail.png',
        imgSmall: '/img/bugs/snail-small.png',
        north: [
            'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'
        ],
        south: [
            'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Pill Bug',
        imgLarge: '/img/bugs/pillbug.png',
        imgSmall: '/img/bugs/pillbug-small.png',
        north: [
            'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'sept', 'oct', 'nov', 'dec'
        ],
        south: [
            'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Centipede',
        imgLarge: '/img/bugs/centipede.png',
        imgSmall: '/img/bugs/centipede-small.png',
        north: [
            'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'sept', 'oct', 'nov', 'dec'
        ],
        south: [
            'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'
        ],
        times: [
            '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm',
        ]
    },

    {
        name: 'Spider',
        imgLarge: '/img/bugs/spider.png',
        imgSmall: '/img/bugs/spider-small.png',
        north: [
            'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'
        ],
        south: [
            'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Tarantula',
        imgLarge: '/img/bugs/tarantula.png',
        imgSmall: '/img/bugs/tarantula-small.png',
        north: [
            'jan', 'feb', 'mar', 'apr', 'nov', 'dec'
        ],
        south: [
            'may', 'jun', 'jul', 'aug', 'sept', 'oct',
        ],
        times: [
            '12am', '1am', '2am', '3am', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Scorpion',
        imgLarge: '/img/bugs/scorpion.png',
        imgSmall: '/img/bugs/scorpion-small.png',
        north: [
            'may', 'jun', 'jul', 'aug', 'sept', 'oct',
        ],
        south: [
            'jan', 'feb', 'mar', 'apr', 'nov', 'dec'
        ],
        times: [
            '12am', '1am', '2am', '3am', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },
];

export default bugs;