<?php


namespace App\Http\Controllers;

interface ViewController
{
    public function render(): \Inertia\Response;
}
