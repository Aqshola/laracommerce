<?php

namespace App\Services\impl;

use App\Models\AdminUser;
use App\Services\UserService;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;

class AdminUserService implements UserService
{
    public function login(string $username, string $password): bool
    {
        $user = AdminUser::query()->where('username', $username)->first();
        if (!isset($user)) return false;

        $check_password = Hash::check($password, $user->password);

        if (!$check_password) return false;
        Session::put('admin_id', $user->user_id);
        return true;
    }

    public function logout()
    {
        Session::remove('admin_id');
    }
}
