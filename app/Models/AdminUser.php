<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AdminUser extends Model
{
    use HasFactory;
    use HasUuids;

    protected $table = 'admin_users';
    protected $primaryKey = 'user_id';
    public $incrementing = false;
    protected $fillable = [
        'username',
        'name',
        'password',
        'email',
        'role_id',
        'permission',
        'last_login',
        'status'
    ];

    protected $hidden = ['password'];
}
