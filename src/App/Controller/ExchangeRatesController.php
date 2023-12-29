<?php

declare(strict_types=1);

namespace App\Controller;

use App\Service\SupportedCurrencyRatesService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use \DateTime;

class ExchangeRatesController extends AbstractController
{
    protected  $supportedCurrencyRatesService; 

    public function __construct(SupportedCurrencyRatesService $supportedCurrencyRatesService)
    {
        $this->supportedCurrencyRatesService = $supportedCurrencyRatesService;
    }

    public function getList(Request $request): Response
    {   
        if ($request->get("when")) {
            $when =  DateTime::createFromFormat('Y-m-d', $request->get("when"));
        } else {
            $when = new DateTime();
        } 

        $supportedCurrencyRatesForDate = $this->supportedCurrencyRatesService->getSupportedCurrencyRatesForDate($when);
        return new JsonResponse(
            $supportedCurrencyRatesForDate,
            Response::HTTP_OK
        );
    }
}
