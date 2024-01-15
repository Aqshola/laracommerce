<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Inertia\Inertia;

class AdminProductController extends Controller
{
    public function render()
    {
        return Inertia::render('admin/Product/Index');
    }

    public function renderFormInput()
    {
        return Inertia::render('admin/Product/Add');
    }
}
