todo:

~~ obsluda daty w urlu ~~
~~ fallback daty gy w urlu brak ~~
testy frontu
walidacja poprawnosci daty w urlu i przekierowanie do 404
sprawdzanie daty granicznej
strona 404

pobieranie kursow z api backend
podswietlanie current routy w menu

api backend
```
        let exchangeRates =
            [
                {
                    currency: {
                        name: 'Euro',
                        code: 'EUR'
                    },
                    buy: {
                        dataA: {date:1, price: 2},
                        dataB: {date:3, price: 4 }
                    },
                    sell: {
                        dataA: {date:5, price: 6 },
                        dataB: {date:7, price: 8 }
                    },
                    nbp: {
                        dataA: {date:9, price: 10 },
                        dataB: {date:11, price: 12 }
                    }
                },
                {
                    currency: {
                        name: 'Dolar amerykański',
                        code: 'USD'
                    },
                    buy: {
                        dataA: {date:1, price: 2},
                        dataB: {date:3, price: 4 }
                    },
                    sell: {
                        dataA: {date:5, price: 6 },
                        dataB: {date:7, price: 8 }
                    },
                    nbp: {
                        dataA: {date:9, price: 10 },
                        dataB: {date:11, price: 12 }
                    }
                },
                {
                    currency: {
                        name: 'Boliwar dla Pana Waldemara z Cargo',
                        code: 'WAL'
                    },
                    buy: {
                        dataA: {date:1, price: 2},
                        dataB: {date:3, price: 4 }
                    },
                    sell: {
                        dataA: {date:5, price: 6 },
                        dataB: {date:7, price: 8 }
                    },
                    nbp: {
                        dataA: {date:9, price: 10 },
                        dataB: {date:11, price: 12 }
                    }
                }
            ];
```



test backend GetListTest
naprawic Integration\SetupCheck\SetupCheckTest::testConnectivity