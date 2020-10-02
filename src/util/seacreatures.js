const seaCreatures = [
    {
        name: 'Seaweed',
        imgLarge: '/img/seacreatures/seaweed.png',
        imgSmall: '/img/seacreatures/seaweed-small.png',
        north: [
            'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'oct', 'nov', 'dec'
        ],
        south: [
            'jan', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Sea Grapes',
        imgLarge: '/img/seacreatures/seagrapes.png',
        imgSmall: '/img/seacreatures/seagrapes-small.png',
        north: [
            'jun', 'jul', 'aug', 'sept',
        ],
        south: [
            'jan', 'feb', 'mar', 'dec'
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Sea Cucumber',
        imgLarge: '/img/seacreatures/seacucumber.png',
        imgSmall: '/img/seacreatures/seacucumber-small.png',
        north: [
            'jan', 'feb', 'mar', 'apr', 'nov', 'dec'
        ],
        south: [
           'may', 'jun', 'jul', 'aug', 'sept', 'oct',
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Sea Pig',
        imgLarge: '/img/seacreatures/seapig.png',
        imgSmall: '/img/seacreatures/seapig-small.png',
        north: [
            'jan', 'feb', 'nov', 'dec'
        ],
        south: [
            'may', 'jun', 'jul', 'aug',
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Sea Star',
        imgLarge: '/img/seacreatures/seastar.png',
        imgSmall: '/img/seacreatures/seastar-small.png',
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
        name: 'Sea urchin',
        imgLarge: '/img/seacreatures/seaurchin.png',
        imgSmall: '/img/seacreatures/seaurchin-small.png',
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
        name: 'Slate Pencil Urchin',
        imgLarge: '/img/seacreatures/slatepencilurchin.png',
        imgSmall: '/img/seacreatures/slatepencilurchin-small.png',
        north: [
            'may', 'jun', 'jul', 'aug', 'sept',
        ],
        south: [
            'jan', 'feb', 'mar', 'nov', 'dec'
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Sea Anemone',
        imgLarge: '/img/seacreatures/seaanemone.png',
        imgSmall: '/img/seacreatures/seaanemone-small.png',
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
        name: 'Moon Jellyfish',
        imgLarge: '/img/seacreatures/moonjellyfish.png',
        imgSmall: '/img/seacreatures/moonjellyfish-small.png',
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
        name: 'Sea Slug',
        imgLarge: '/img/seacreatures/seaslug.png',
        imgSmall: '/img/seacreatures/seaslug-small.png',
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
        name: 'Pearl Oyster',
        imgLarge: '/img/seacreatures/pearloyster.png',
        imgSmall: '/img/seacreatures/pearloyster-small.png',
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
        name: 'Mussel',
        imgLarge: '/img/seacreatures/mussel.png',
        imgSmall: '/img/seacreatures/mussel-small.png',
        north: [
            'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'
        ],
        south: [
            'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'dec'
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Oyster',
        imgLarge: '/img/seacreatures/oyster.png',
        imgSmall: '/img/seacreatures/oyster-small.png',
        north: [
            'jan', 'feb', 'sept', 'oct', 'nov', 'dec'
        ],
        south: [
            'mar', 'apr', 'may', 'jun', 'jul', 'aug',
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Scallop',
        imgLarge: '/img/seacreatures/scallop.png',
        imgSmall: '/img/seacreatures/scallop-small.png',
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
        name: 'Whelk',
        imgLarge: '/img/seacreatures/whelk.png',
        imgSmall: '/img/seacreatures/whelk-small.png',
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
        name: 'Turban Shell',
        imgLarge: '/img/seacreatures/turbanshell.png',
        imgSmall: '/img/seacreatures/turbanshell-small.png',
        north: [
            'mar', 'apr', 'may', 'sept', 'oct', 'nov', 'dec'
        ],
        south: [
            'mar', 'apr', 'may', 'jun', 'sept', 'oct', 'nov',
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Abalone',
        imgLarge: '/img/seacreatures/abalone.png',
        imgSmall: '/img/seacreatures/abalone-small.png',
        north: [
            'jan', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'
        ],
        south: [
            'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'dec'
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Gigas Giant Clam',
        imgLarge: '/img/seacreatures/gigasgiantclam.png',
        imgSmall: '/img/seacreatures/gigasgiantclam-small.png',
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
        name: 'Chambered Nautilus',
        imgLarge: '/img/seacreatures/chamberednautilus.png',
        imgSmall: '/img/seacreatures/chamberednautilus-small.png',
        north: [
            'mar', 'apr', 'may', 'jun', 'sept', 'oct', 'nov',
        ],
        south: [
            'mar', 'apr', 'may', 'sept', 'oct', 'nov', 'dec'
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Octopus',
        imgLarge: '/img/seacreatures/octopus.png',
        imgSmall: '/img/seacreatures/octopus-small.png',
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
        name: 'Umbrella Octopus',
        imgLarge: '/img/seacreatures/umbrellaoctopus.png',
        imgSmall: '/img/seacreatures/umbrellaoctopus-small.png',
        north: [
            'mar', 'apr', 'may', 'sept', 'oct', 'nov',
        ],
        south: [
            'mar', 'apr', 'may', 'sept', 'oct', 'nov',
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Vampire Squid',
        imgLarge: '/img/seacreatures/vampiresquid.png',
        imgSmall: '/img/seacreatures/vampiresquid-small.png',
        north: [
            'may', 'jun', 'jul', 'aug',
        ],
        south: [
            'jan', 'feb', 'nov', 'dec'
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Firefly Squid',
        imgLarge: '/img/seacreatures/fireflysquid.png',
        imgSmall: '/img/seacreatures/fireflysquid-small.png',
        north: [
            'mar', 'apr', 'may', 'jun',
        ],
        south: [
            'sept', 'oct', 'nov', 'dec'
        ],
        times: [
            '12am', '1am', '2am', '3am', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Gazami Crab',
        imgLarge: '/img/seacreatures/gazamicrab.png',
        imgSmall: '/img/seacreatures/gazamicrab-small.png',
        north: [
            'jun', 'jul', 'aug', 'sept', 'oct', 'nov',
        ],
        south: [
            'jan', 'feb', 'mar', 'apr', 'may', 'dec'
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Dungeness Crab',
        imgLarge: '/img/seacreatures/dungenesscrab.png',
        imgSmall: '/img/seacreatures/dungenesscrab-small.png',
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
        name: 'Snow Crab',
        imgLarge: '/img/seacreatures/snowcrab.png',
        imgSmall: '/img/seacreatures/snowcrab-small.png',
        north: [
            'jan', 'feb', 'mar', 'apr', 'nov', 'dec'
        ],
        south: [
            'may', 'jun', 'jul', 'aug', 'sept', 'oct',
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Red King Crab',
        imgLarge: '/img/seacreatures/redkingcrab.png',
        imgSmall: '/img/seacreatures/redkingcrab-small.png',
        north: [
            'jan', 'feb', 'mar', 'nov', 'dec'
        ],
        south: [
            'may', 'jun', 'jul', 'aug', 'sept',
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Acorn barnacle',
        imgLarge: '/img/seacreatures/acornbarnacle.png',
        imgSmall: '/img/seacreatures/acornbarnacle-small.png',
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
        name: 'Spider Crab',
        imgLarge: '/img/seacreatures/spidercrab.png',
        imgSmall: '/img/seacreatures/spidercrab-small.png',
        north: [
            'mar', 'apr',
        ],
        south: [
            'sept', 'oct',
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Tiger Prawn',
        imgLarge: '/img/seacreatures/tigerprawn.png',
        imgSmall: '/img/seacreatures/tigerprawn-small.png',
        north: [
            'jun', 'jul', 'aug', 'sept',
        ],
        south: [
            'jan', 'feb', 'mar', 'dec'
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Sweet Shrimp',
        imgLarge: '/img/seacreatures/sweetshrimp.png',
        imgSmall: '/img/seacreatures/sweetshrimp-small.png',
        north: [
            'jan', 'feb', 'sept', 'oct', 'nov', 'dec'
        ],
        south: [
            'mar', 'apr', 'may', 'jun', 'jul', 'aug',
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Mantis Shrimp',
        imgLarge: '/img/seacreatures/mantisshrimp.png',
        imgSmall: '/img/seacreatures/mantisshrimp-small.png',
        north: [
            'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'
        ],
        south: [
            'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Spiny Lobster',
        imgLarge: '/img/seacreatures/spinylobster.png',
        imgSmall: '/img/seacreatures/spinylobster-small.png',
        north: [
            'oct', 'nov', 'dec'
        ],
        south: [
            'apr', 'may', 'jun',
        ],
        times: [
            '12am', '1am', '2am', '3am', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Lobster',
        imgLarge: '/img/seacreatures/lobster.png',
        imgSmall: '/img/seacreatures/lobster-small.png',
        north: [
            'jan', 'apr', 'may', 'jun', 'dec'
        ],
        south: [
            'jun', 'jul', 'oct', 'nov', 'dec'
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Giant Isopod',
        imgLarge: '/img/seacreatures/giantisopod.png',
        imgSmall: '/img/seacreatures/giantisopod-small.png',
        north: [
            'jul', 'aug', 'sept', 'oct',
        ],
        south: [
            'jan', 'feb', 'mar', 'apr',
        ],
        times: [
            '12am', '1am', '2am', '3am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Horseshoe Crab',
        imgLarge: '/img/seacreatures/horseshoecrab.png',
        imgSmall: '/img/seacreatures/horseshoecrab-small.png',
        north: [
            'jul', 'aug', 'sept',
        ],
        south: [
            'jan', 'feb', 'mar',
        ],
        times: [
            '12am', '1am', '2am', '3am', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Sea Pineapple',
        imgLarge: '/img/seacreatures/seapineapple.png',
        imgSmall: '/img/seacreatures/seapineapple-small.png',
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
        name: 'Spotted Garden Eel',
        imgLarge: '/img/seacreatures/spottedgardeneel.png',
        imgSmall: '/img/seacreatures/spottedgardeneel-small.png',
        north: [
            'may', 'jun', 'jul', 'aug', 'sept', 'oct',
        ],
        south: [
            'jan', 'feb', 'mar', 'apr', 'nov', 'dec'
        ],
        times: [
            '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm',
        ]
    },

    {
        name: 'Flatworm',
        imgLarge: '/img/seacreatures/flatworm.png',
        imgSmall: '/img/seacreatures/flatworm-small.png',
        north: [
            'aug', 'sept',
        ],
        south: [
            'feb', 'mar',
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },

    {
        name: 'Venus Flower Basket',
        imgLarge: '/img/seacreatures/venusflowerbasket.png',
        imgSmall: '/img/seacreatures/venusflowerbasket-small.png',
        north: [
            'jan', 'feb', 'oct', 'nov', 'dec'
        ],
        south: [
            'apr', 'may', 'jun', 'jul', 'aug',
        ],
        times: [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    },
];

export default seaCreatures;