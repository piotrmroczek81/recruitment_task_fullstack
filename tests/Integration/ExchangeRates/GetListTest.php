<?php

namespace Integration\SetupCheck;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class GetListTest extends WebTestCase
{
    public function testGetList(): void
    {
        $client = static::createClient();

        $client->request('GET', '/api/exchange-rates');
        $this->assertResponseIsSuccessful();
        $response = $client->getResponse();
        $this->assertJson($response->getContent());
        $responseData = json_decode($response->getContent(), TRUE);
        
        $this->assertArrayHasKey('currency', $responseData[0]);
        $this->assertArrayHasKey('buy', $responseData[0]);
        $this->assertArrayHasKey('sell', $responseData[0]);
        $this->assertArrayHasKey('NBP', $responseData[0]);
    }
}