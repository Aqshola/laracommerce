<?php

use Illuminate\Http\Request;

interface LoginController
{
    public function login(Request $request): bool;
    public function logout(Request $request): bool;
}
