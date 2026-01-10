<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Author extends Model
{
    use HasFactory;

    protected $fillabe = [
        'name',
        'user_id',
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function articles(){
        return $this->hasMany(Article::class);
    }

    public function comments(){
        return $this->morphMany(Comment::class, 'commentable');
    }

    public function audiences(){
        return $this->hasManyThrough(Audience::class, Article::class);
    }
}
