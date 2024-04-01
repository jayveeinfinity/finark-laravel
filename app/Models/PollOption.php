<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PollOption extends Model
{
    use HasFactory;

    protected $fillable = ['post_id', 'option_text'];

    public function post()
    {
        return $this->belongsTo(Post::class);
    }
}
