<?php

namespace Integration\SetupCheck;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class GetListTest extends WebTestCase
{
    public function testConnectivity(): void
    {
        $client = static::createClient();

        $client->request('GET', '/api/exchange-rates');
        $this->assertResponseIsSuccessful();
        $response = $client->getResponse();
        $this->assertJson($response->getContent());
        $responseData = json_decode($response->getContent(), TRUE);
        $this->assertEquals('hello', $responseData);
        // $this->assertArrayHasKey('testParam', $responseData);
    }


}