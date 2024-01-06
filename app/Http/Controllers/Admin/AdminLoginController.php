<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\ViewController;
use App\Services\impl\AdminUserService as ImplAdminUserService;
use App\Services\UserService;

class AdminLoginController extends Controller implements ViewController
{

    private ImplAdminUserService $adminuserservice;

    public function __construct(ImplAdminUserService $adminuserservice = null)
    {
        $this->adminuserservice = $adminuserservice;
    }

    public function render(): \Inertia\Response
    {
        return Inertia::render('admin/Login');
    }

    public function login(Request $request): Response|RedirectResponse
    {

        $username = $request->input('username');
        $password = $request->input('password');


        if (empty($username) || empty($password)) {
            return back()->withErrors([
                "user" => "invalid credentials"
            ]);
        }



        $process_login = $this->adminuserservice->login($username, $password);

        if ($process_login) return redirect('/admin/dashboard');

        return back()->withErrors([
            "user" => "invalid credentials"
        ]);
    }
}
