<?php

namespace Integration\SetupCheck;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

// @skip
class SetupCheckTest extends WebTestCase
{
    
    // @skip
    public function testConnectivity(): void
    {
        $client = static::createClient();

        // test e.g. the profile page
        $client->request('GET', '/api/setup-check');
        $this->assertResponseIsSuccessful();
        $response = $client->getResponse();
        $this->assertJson($response->getContent());
        $responseData = json_decode($response->getContent(), TRUE);
        $this->assertArrayHasKey('testParam', $responseData);
    }
}