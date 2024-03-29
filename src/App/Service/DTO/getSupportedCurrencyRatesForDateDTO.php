<?php

declare(strict_types=1);

namespace App\DTO;

class SupportedCurrencyRatesForDateDTO implements \JsonSerializable
{
    public function jsonSerialize()
    {
        return [
            [
                'currency' => [
                    'name' => 'Euro',
                    'code' => 'EUR'
                ],
                'buy' => [
                    'dataA' => [
                            'date' =>1, 
                            'price' => 2
                        ],
                    'dataB' => [
                            'date' =>1, 
                            'price' => 2
                    ],
                ],
                'sell' => [
                    'dataA' => [
                            'date' =>1, 
                            'price' => 2
                        ],
                    'dataB' => [
                            'date' =>3, 
                            'price' => 4
                    ],
                ],
                'NBP' => [
                    'dataA' => [
                            'date' =>5, 
                            'price' => 6
                        ],
                    'dataB' => [
                            'date' =>7, 
                            'price' => 8
                    ],
                ]
            ],            
            [
                'currency' => [
                    'name' => 'Dolar amerykański',
                    'code' => 'USD'
                ],
                'buy' => [
                    'dataA' => [
                            'date' =>9, 
                            'price' => 10
                        ],
                    'dataB' => [
                            'date' =>11, 
                            'price' => 12
                    ],
                ],
                'sell' => [
                    'dataA' => [
                            'date' =>13, 
                            'price' => 14
                        ],
                    'dataB' => [
                            'date' =>15, 
                            'price' => 16
                    ],
                ],
                'NBP' => [
                    'dataA' => [
                            'date' =>17, 
                            'price' => 18
                        ],
                    'dataB' => [
                            'date' =>19, 
                            'price' => 20
                    ],
                ]
            ] 
        ];
    }
}
