export type Weather = {
    weather: [{
        main: string;
    }]
    main: {
        temp: number;
        feels_like: number;
        pressure: number;
    },
    name: string;
    wind: {
        speed: number;
    }
};

export type WeekWeather = {
    list: [
        {
            dt_txt: string;
            pop: number;
            main: {
                temp: number;
                feels_like: number;
                pressure: number;
            },
            weather: [
                {
                    main: string;
                    description: string;
                },
            ],
            wind: {
                speed: number;
            },
        },
        {
            dt_txt: string;
            pop: number;
            main: {
                temp: number;
                feels_like: number;
                pressure: number;
            },
            weather: [
                {
                    main: string;
                    description: string;
                },
            ],
            wind: {
                speed: number;
            },
        },
        {
            dt_txt: string;
            pop: number;
            main: {
                temp: number;
                feels_like: number;
                pressure: number;
            },
            weather: [
                {
                    main: string;
                    description: string;
                },
            ],
            wind: {
                speed: number;
            },
        },
        {
            dt_txt: string;
            pop: number;
            main: {
                temp: number;
                feels_like: number;
                pressure: number;
            },
            weather: [
                {
                    main: string;
                    description: string;
                },
            ],
            wind: {
                speed: number;
            },
        },
        {
            dt_txt: string;
            pop: number;
            main: {
                temp: number;
                feels_like: number;
                pressure: number;
            },
            weather: [
                {
                    main: string;
                    description: string;
                },
            ],
            wind: {
                speed: number;
            },
        },
        {
            dt_txt: string;
            pop: number;
            main: {
                temp: number;
                feels_like: number;
                pressure: number;
            },
            weather: [
                {
                    main: string;
                    description: string;
                },
            ],
            wind: {
                speed: number;
            },
        },
        {
            dt_txt: string;
            pop: number;
            main: {
                temp: number;
                feels_like: number;
                pressure: number;
            },
            weather: [
                {
                    main: string;
                    description: string;
                },
            ],
            wind: {
                speed: number;
            },
        },
    ]
};