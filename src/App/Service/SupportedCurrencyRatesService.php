<?php

declare(strict_types=1);

namespace App\Service;

use App\DTO\SupportedCurrencyRatesForDateDTO;
use \DateTime;

class SupportedCurrencyRatesService 
{
    public function getSupportedCurrencyRatesForDate(DateTime $when): SupportedCurrencyRatesForDateDTO
    {
        return new SupportedCurrencyRatesForDateDTO();
    }
}
