<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Event extends Model
{
    use HasFactory;
    
    protected $table = 'events';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'poster',
        'location',
        'date',
        'description',
        'visibility',
        'created_by'
    ];

    // Format the date using Carbon
    public function getDateAttribute($value)
    {
        return Carbon::parse($value)->format('F j, Y');
    }
}