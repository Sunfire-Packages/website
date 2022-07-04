<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class SiteController extends Controller
{
    /**
     * Site entrypoint
     *
     * @return RedirectResponse
     */
    public function index()
    {
        return redirect('docs/'.DEFAULT_VERSION);
    }
}
