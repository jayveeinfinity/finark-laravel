<?php

namespace App\Observers;

use App\Models\Event;
use Illuminate\Support\Str;

class EventObserver
{
    /**
     * Handle the Event "creating" event.
     *
     * @param  \App\Models\Course  $course
     * @return void
     */
    public function creating(Event $event)
    {
        $event->slug = Str::slug($event->name);
        $event->created_by = auth()->user()->id;
    }
}
