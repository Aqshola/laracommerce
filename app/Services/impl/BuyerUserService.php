<?php

namespace App\Services\impl;

use App\Services\UserService;

class BuyerUserService  implements UserService
{
    public function login(string $username, string $password): bool
    {
        return true;
    }
}
