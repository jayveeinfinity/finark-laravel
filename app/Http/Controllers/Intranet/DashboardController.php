<?php

namespace App\Http\Controllers\Intranet;

use Inertia\Inertia;
use App\Models\Partner;
use App\Models\Feedback;
use App\Models\Appointment;
use App\Models\CareerApplication;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function index() {
        $user = Auth::user();
        if(in_array($user->roles->first()->name, ['developer', 'admin', 'virtual-assistant'])) {
            return redirect()->route('admin.dashboard');
        } else {
            return redirect()->route('admin.forum');
        }
    }

    public function dashboard() {
        Inertia::setRootView('corporate-ui');
            
        $appointments_count = Appointment::where('active', 1)->count();
        $career_applications_count = CareerApplication::where('active', 1)->count();
        $feedback_count = Feedback::where('active', 1)->count();
        $partners_count = Partner::where('active', 1)->count();
    
        return Inertia::render('Admin/Dashboard/Index', [
            'appointmentsCount' => number_format($appointments_count),
            'careerApplicationsCount' => number_format($career_applications_count),
            'feedbackCount' => number_format($feedback_count),
            'partnersCount' => number_format($partners_count)
        ]);
    }
}
