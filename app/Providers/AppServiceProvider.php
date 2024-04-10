<?php

namespace App\Providers;

use App\Models\Event;
use App\Models\Video;
use App\Models\Course;
use App\Observers\EventObserver;
use App\Observers\VideoObserver;
use App\Observers\CourseObserver;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Course::observe(CourseObserver::class);
        Event::observe(EventObserver::class);
        Video::observe(VideoObserver::class);
    }
}
