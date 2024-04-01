<?php

use Inertia\Inertia;
use App\Models\Partner;
use App\Models\Feedback;
use App\Models\Appointment;
use App\Models\CareerApplication;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ForumController;
use App\Http\Controllers\VideoController;
use App\Http\Controllers\CareerController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\PartnerController;
use App\Http\Controllers\FeedbackController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\WatchVideoController;
use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\Extranet\LandingController;
use App\Http\Controllers\Intranet\DashboardController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [LandingController::class, 'index'])->name('extranet.landing');
Route::get('/about', [LandingController::class, 'about']);
Route::get('/services', [LandingController::class, 'services']);
Route::get('/services/{slug}', [LandingController::class, 'service']);
Route::get('/events', [LandingController::class, 'events']);
Route::get('/blogs', [LandingController::class, 'blogs']);
Route::get('/careers', [LandingController::class, 'careers']);
Route::get('/partners', [LandingController::class, 'partners']);

Route::post('/appointment/timeslots', [AppointmentController::class, 'getAvailableTimeSlots']);

Route::post('/appointment/store', [AppointmentController::class, 'store']);
Route::post('/feedback/store', [FeedbackController::class, 'store']);
Route::post('/careers/store', [CareerController::class, 'store']);

Route::get('/signin', [LoginController::class, 'index'])->name('signin');
Route::post('/auth', [LoginController::class, 'auth'])->name('auth');
Route::get('/signout', [LoginController::class, 'deauth'])->name('deauth');

/*
|--------------------------------------------------------------------------
| Intranet routes
|--------------------------------------------------------------------------
|
| Below are routes that accessible users to the intranet
|
*/
Route::middleware('auth')->group(function() {
    Route::prefix('admin')->group(function () {
        Route::get('/', [DashboardController::class, 'index']);
        Route::get('/courses', [CourseController::class, 'index']);
        Route::get('/courses/{id}', [CourseController::class, 'show'])->where('id', '[0-9]+');
        Route::get('/courses/posters/{course}', [CourseController::class , 'getPoster']);

        Route::get('/videos/{uid}', [VideoController::class, 'show']);
        Route::post('/videos/watch/update', [WatchVideoController::class, 'update']);
        // Route::get('/videos/play/{video}', [VideoController::class , 'getVideo']);

        Route::get('/profile', [UserController::class, 'profile']);
/*
|--------------------------------------------------------------------------
| Admin routes
|--------------------------------------------------------------------------
|
| Below are routes that accessible to developer and admin
|
*/
        Route::group(['middleware' => ['role:developer|admin']], function () {
            
            Route::get('/dashboard', [DashboardController::class, 'dashboard'])->name('admin.dashboard');
            Route::get('/appointments', [AppointmentController::class, 'index']);
            Route::get('/appointments/{id}', [AppointmentController::class, 'show'])->where('id', '[0-9]+');;

            Route::get('/partners', [PartnerController::class, 'index']);
            Route::get('/partners/create', [PartnerController::class, 'create']);
            Route::post('/partners/store', [PartnerController::class, 'store']);

            Route::get('/blogs', [BlogController::class, 'index']);
            Route::get('/blogs/create', [BlogController::class, 'create']);

            Route::get('/careers', [CareerController::class, 'index']);
            Route::get('/careers/create', [CareerController::class, 'create']);

            Route::get('/users', [UserController::class, 'index']);
            Route::get('/users/create', [UserController::class, 'create']);
            Route::get('/users/edit/{id}', [UserController::class, 'edit'])->where('id', '[0-9]+');
            Route::get('/users/export/', [UserController::class, 'export']);
            Route::get('/users/profile/{id}', [UserController::class, 'show'])->where('id', '[0-9]+');

            Route::post('/users/store', [UserController::class, 'store']);
            Route::post('/users/update', [UserController::class, 'update']);
            Route::post('/users/delete/{id}', [UserController::class, 'destroy'])->where('id', '[0-9]+');

            Route::get('/courses/create', [CourseController::class, 'create']);
            Route::get('/courses/edit/{course_id}', [CourseController::class, 'edit']);
            Route::post('/courses/store', [CourseController::class, 'store']);
            Route::post('/courses/update', [CourseController::class, 'update']);
            
            Route::get('/videos/create/{course_id?}', [VideoController::class, 'create']);
            Route::get('/videos/edit/{video_id}', [VideoController::class, 'edit']);
            Route::post('/videos/store', [VideoController::class, 'store']);
            Route::post('/videos/upload', [VideoController::class, 'upload']);
            Route::post('/videos/update', [VideoController::class, 'update']);
            Route::post('/videos/upload/chunks', [VideoController::class, 'uploadChunks']);
            
            Route::get('/clients', [ClientController::class, 'index']);
        });

/*
|--------------------------------------------------------------------------
| Forum routes
|--------------------------------------------------------------------------
|
| Below are routes that not restricted to consultant and unit manager
|
*/
        Route::prefix('forum')->group(function () {
            Route::get('/', [ForumController::class, 'index'])->name('admin.forum');
            Route::get('/category', [ForumController::class, 'category']);
            Route::get('/category/single', [ForumController::class, 'show']);
        });
    });
});