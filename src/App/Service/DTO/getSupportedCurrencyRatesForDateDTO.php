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
                ],
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
            ] 
            ]                                        
        ];
    }
}
