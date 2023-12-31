<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Http\Controllers\Controller;

class AdminLoginController extends Controller
{
    public function render()
    {
        return Inertia::render('admin/Login');
    }
}
